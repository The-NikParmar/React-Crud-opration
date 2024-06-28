import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function Edit() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/users/${id}`);
        setValues(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3000/users/${id}`, values);
      alert("User updated successfully!");
      navigate("/");
    } catch (error) {
      console.error(error);
      alert("Error updating user.");
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-md">
          <a className="navbar-brand" href="#">
            <h2>User Information</h2>
          </a>
          <Link to="/">
            <button type="button" className="btn btn-dark m-3">
              Back
            </button>
          </Link>
        </div>
      </nav>

      <div
        className="container d-flex justify-content-center align-items-center"
        style={{ minHeight: "90vh" }}
      >
        <div className="col-md-6 shadow p-4">
          <h3>Edit User</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={values.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                name="email"
                value={values.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">
                Phone
              </label>
              <input
                type="tel"
                className="form-control"
                id="phone"
                name="phone"
                value={values.phone}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="address" className="form-label">
                Address
              </label>
              <input
                type="text"
                className="form-control"
                id="address"
                name="address"
                value={values.address}
                onChange={handleInputChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-success">
              Update Data
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Edit;
