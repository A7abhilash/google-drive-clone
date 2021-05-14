import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function Navbar() {
  const { currentUser } = useAuth();
  return (
    <div
      className="navbar bg-light align-items-center justify-content-between"
      style={{ height: "8vh" }}
    >
      <div className="container">
        <div className="navbar-brand">
          <h3>
            <Link to="/" className="text-decoration-none">
              Google Drive Clone
            </Link>
          </h3>
        </div>
        {currentUser && (
          <h4>
            <Link to="/profile" className="text-dark">
              <i className="fas fa-user-circle fa-lg"></i>
            </Link>
          </h4>
        )}
      </div>
    </div>
  );
}

export default Navbar;
