import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Read.css"; 


const Read = () => {
  const [data, setData] = useState();
  const [error, setError] = useState();

  async function handleDelete(id) {
    try {
      const response = await fetch(`http://localhost:8000/${id}`, {
        method: "DELETE",
      });
      
      if (!response.ok) {
        throw new Error('Failed to delete user');
      }
      
      const result = await response.json();
      console.log("deleted", response.ok);
      setError("Deleted Successfully");
      setTimeout(() => {
        setError("");
        getData();
      }, 1000);
    } catch (error) {
      setError(error.message);
    }
  }
  

  async function getData() {
    const response = await fetch("http://localhost:8000");
    const result = await response.json();
    console.log("result..", result);
    if (!response.ok) {
      setError(result.error);
    }

    if (response.ok) {
      setData(result);
      setError("");
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container my-2">
      {error && <div class="alert alert-danger"> {error} </div>}
      <div className="row">
        {data?.map((ele) => (
          <div key={ele._id} className="col-3">
            <div class="card" style={{ backgroundColor: "#80CBC4"}}>
              <div class="card-body" >
                <h5 class="card-title">{ele.name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{ele.email}</h6>
                <p class="card-text">{ele.age}</p>
                <Link to={`/${ele._id}`} class="card-link">
                  Edit
                </Link>

                <a class="card-link" onClick={() => handleDelete(ele._id)}>
                  Delete
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Read;