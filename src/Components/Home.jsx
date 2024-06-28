import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [data, setData] = useState([]);


 const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:3000/users/${id}`);
      const ok = alert("are yousure delete this")
      console.log("User deleted:", response.data);
      setData(data.filter((user) => user.id !== id)); // Update local data
    } catch (error) {
      console.error(error);
      // Handle errors appropriately (e.g., display error message to the user)
    }
  };


  useEffect(() => {
    axios
      .get("http://localhost:3000/users")
      .then((result) => setData(result.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-md">
          <a className="navbar-brand " href="#">
            <h2>List Of Users</h2>
          </a>
          <Link to="/create"><button type="button" class="btn btn-dark m-3">Add User +</button></Link>
        </div>
      </nav>
      
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Address</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d, i) => (
            <tr key={i}>
              <td>{d.id}</td>
              <td>{d.name}</td>
              <td>{d.email}</td>
              <td>{d.phone}</td>
              <td>{d.address}</td>
              <td>
              <Link  to={`/read/${d.id}`} type="button" className="btn btn-success me-2">
                  Read
                </Link>

                <Link  to={`/update/${d.id}`} type="button" className="btn btn-primary me-2">
                  Edit
                </Link>

                <button type="button" className="btn btn-danger" onClick={() => handleDelete(d.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Home;
