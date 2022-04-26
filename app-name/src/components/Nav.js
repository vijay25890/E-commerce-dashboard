import React from "react";
import "../App.css";
import { Link, useNavigate } from "react-router-dom";

const Nav = () => {
  const auth = localStorage.getItem("user");
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("/signup");
  };
  return (
    <div>
      <ul className="nav-ul">
        <li>
          <Link to="/">Products</Link>
          <Link to="/add">Add Product</Link>
          <Link to="/update">Update Product</Link>
          <Link to="/profile">Profile</Link>
          {auth ? (
            <Link onClick={logout} to="/signup">
              Logout
            </Link>
          ) : (
            <Link to="/signup">Sign Up</Link>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Nav;
