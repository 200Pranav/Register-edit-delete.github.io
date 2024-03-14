import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "#D64161FF", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" }}>
    <div className="container-fluid">
        <a className="navbar-brand" href="#" style={{ color: "#fff", fontWeight: "bold", textShadow: "1px 1px 2px rgba(0, 0, 0, 0.8)" }}>
            MERN
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/" className="nav-link" style={{ color: "#fff", textShadow: "1px 1px 2px rgba(0, 0, 0, 0.8)" }}>
                        Create Post
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/read" className="nav-link" style={{ color: "#fff", textShadow: "1px 1px 2px rgba(0, 0, 0, 0.8)" }}>
                        All Posts
                    </Link>
                </li>
            </ul>
        </div>
    </div>
</nav>

  )
};