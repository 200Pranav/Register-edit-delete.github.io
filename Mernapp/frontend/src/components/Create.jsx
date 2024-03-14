import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState(1);
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        var addUser = { name: name, email, age }; // Include 'name' in the addUser object
        console.log(addUser);

        const response = await fetch("http://localhost:8000/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: 'include',
            body: JSON.stringify(addUser),
        });

        const result = await response.json();

        if (!response.ok) {
            console.log(result.error);
            setError(result.error);
        }
        if (response.ok) {
            console.log(result);
            setName("");
            setEmail("");
            setAge(0);
            setError("");
            navigate("/read");
        }

        console.log(name, email, age);
    };


    return (
        <div className="container my-5">
            <h1 className="h1 text-center" style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)", color: "#007bff" }}>Registration</h1>

            {error && <div className="alert alert-danger"> {error} </div>}
            
            <form className="form" onSubmit={handleSubmit} style={{ backgroundColor: "#435E55FF", padding: "20px", borderRadius: "8px", maxWidth: "400px", margin: "0 auto", boxShadow: "0 4px 8px rgba(0, 0, 0.9, 1.8)" }}>
                <div className="mb-8">
                    <label style={{ display: "block", marginBottom: "8px", color: "white", textShadow: "1px 1px 2px rgba(0, 0, 0.8, 0.9)" }} className="form-label">
                        Name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        style={{ width: "100%", padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
                    />
                </div>
                <div className="mb-8">
                    <label style={{ display: "block", marginBottom: "8px", color: "white", textShadow: "1px 1px 2px rgba(0, 0, 0.8, 0.9)" }} className="form-label">
                        Email address
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={{ width: "100%", padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
                    />
                </div>
                <div className="mb-8">
                    <label style={{ display: "block", marginBottom: "8px", color: "white", textShadow: "1px 1px 2px rgba(0, 0, 0.8, 0.9)" }} className="form-label">
                        Age
                    </label>
                    <input
                        type="number"
                        className="form-control"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        style={{ width: "100%", padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
                    />
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: "50%", padding: "10px", margin: "20px", borderRadius: "40px", background: "#007bff", color: "white", border: "none" }}>
                    Submit
                </button>
            </form>


        </div>
    );
};

export default Create;