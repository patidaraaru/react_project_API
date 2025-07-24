import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import LoginContext from "./Auth/LoginContext";

const Navigation = () => {
 const navigate = useNavigate();
  const { logout } = useContext(LoginContext);
   const isAuthenticated = localStorage.getItem("Token");
  return (
    <div>
      <header className="header">
        <div className="logo">🦋App</div>
        <nav className="nav-links">
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
          <NavLink to="/about" className="nav-link">
            About
          </NavLink>
          <NavLink to="/contact" className="nav-link">
            Contact
          </NavLink>
          <NavLink to="/product" className="nav-link">
            Product
          </NavLink>
          <NavLink to="/gallery" className="nav-link">
            Gallery
          </NavLink>
          <NavLink to="/wish-list" className="nav-link">
            WishList
          </NavLink>
          <NavLink to="/category" className="nav-link">
            Category
          </NavLink>
          {isAuthenticated ? (
            <button onClick={logout}>Logout</button>
          ) : (
            <NavLink to="/login" className="nav-link">
              Login
            </NavLink>
          )}
        </nav>
      </header>
    </div>
  );
};

export default Navigation;
