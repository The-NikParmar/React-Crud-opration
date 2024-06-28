import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function Read() {
  const [data, setData] = useState({}); 
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/users/${id}`);
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData(); 
  }, [id]);

  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-md">
          <a className="navbar-brand " href="#">
            <h2>List Of Users</h2>
          </a>
          <Link to="/"><button type="button" class="btn btn-dark m-3">Back </button></Link>
        </div>
      </nav>


      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "90vh" }}>
      <div className="col-md-6 shadow p-4">
        <div className="data-box ">
          <h2>User Information</h2>
          <div className="data-item">
            <span className="label">Name: </span>
            <span className="value">{data.name}</span>
          </div>
          <div className="data-item">
            <span className="label">Email: </span>
            <span className="value">{data.email}</span>
          </div>
          <div className="data-item">
            <span className="label">Phone: </span>
            <span className="value">{data.phone}</span>
          </div>
          <div className="data-item">
            <span className="label">Address: </span>
            <span className="value">{data.address}</span>
          </div>
            <Link to={`/update/${id}`} className="btn btn-primary mt-3">Edit</Link>
        </div>
      </div>
    </div>
    </>
  );
}

export default Read;
