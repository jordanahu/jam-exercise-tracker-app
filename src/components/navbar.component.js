import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav className="container navbar navbar-dark bg-dark navbar-expand-sm d-flex">
     
     <span className="navbar-brand">
        <Link style={{"color":"inherit", "textDecoration":"none"}} to="/">Exercise Tracker</Link>
      </span>
      <div>
        <ul className="navbar-nav">
          <li className="navbar-item">
            <Link to="/user" className="nav-link">
              Create User
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/create" className="nav-link">
              Create Exercise Log
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/" className="nav-link">
              Exercises
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
