import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Create() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/users", values);
      console.log(response.data); 
      navigate("/"); 
    } catch (error) {
      console.error(error); 
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-md">
          <a className="navbar-brand" href="#">
            <h2>Navbar</h2>
          </a>
          <Link to="/">
            <button type="button" className="btn btn-dark m-3">
              Back
            </button>
          </Link>
        </div>
      </nav>

      <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "90vh" }}>
        <div className="col-md-6 shadow p-4">
          <h3>Add User</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name"
                value={values.name}
                onChange={(e) => setValues({ ...values, name: e.target.value })}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                value={values.email}
                onChange={(e) => setValues({ ...values, email: e.target.value })}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">Phone</label>
              <input type="tel" className="form-control" id="phone" required
                value={values.phone}
                onChange={(e) => setValues({ ...values, phone: e.target.value })}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="address" className="form-label">Address</label>
              <input type="text" className="form-control" id="address" required
                value={values.address}
                onChange={(e) => setValues({ ...values, address: e.target.value })}
              />
            </div>
            {/* Omit password field for security reasons */}
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Create;
