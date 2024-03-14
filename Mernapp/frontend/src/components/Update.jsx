import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Update = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(0);
  const [error, setError] = useState();
  const { id } = useParams();
  const navigate = useNavigate();

  // Receving single user data
  const getSingleData = async () => {
    try {
      const response = await fetch(`http://localhost:8000/${id}`);
      const result = await response.json();

      if (!response.ok) {
        throw new Error("Failed to fetch user data");
      }

      setName(result.name);
      setEmail(result.email);
      setAge(result.age);
    } catch (error) {
      setError(error.message);
    }
  };

  // Passing edited data to backend
  const handleUpdate = async (e) => {
    e.preventDefault();
    const updatedUser = { name, email, age };
    try {
      const response = await fetch(`http://localhost:8000/edit/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedUser),
      });
      
      if (!response.ok) {
        throw new Error('Failed to update user');
      }

      const result = await response.json();
      console.log("updated result..", result);
      setError("");
      navigate("/read");
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    getSingleData();
  }, []);

  return (
    <div className="container my-2">
      <h1 className="h1 text-center">Edit Data</h1>
      {error && <div className="alert alert-danger"> {error} </div>}
      <form
        className="form"
        onSubmit={handleUpdate}
        style={{
          backgroundColor: "#435E55FF",
          padding: "20px",
          borderRadius: "8px",
          maxWidth: "400px",
          margin: "0 auto",
          boxShadow: "0 4px 8px rgba(0, 0, 0.9, 1.8)",
        }}
      >
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Age</label>
          <input
            type="number"
            className="form-control"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
        </div>
        <button
          type="submit"
          className="btn btn-info"
          style={{
            width: "50%",
            padding: "10px",
            margin: "20px",
            borderRadius: "40px",
            background: "#007bff",
            color: "white",
            border: "none",
          }}
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default Update;
