import React from "react";
import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <div className="container">
      <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
        >
          <span className="fs-4 fw-bold">TrendTracker</span>
        </a>

        <ul className="nav nav-pills">
          <li className="nav-item">
            <NavLink to="/" className="nav-link" aria-current="page">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/products" className="nav-link" aria-current="page">
              Products
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/users" className="nav-link" aria-current="page">
              Users
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/faqs" className="nav-link" aria-current="page">
              FAQs
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" className="nav-link" aria-current="page">
              About
            </NavLink>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default Navbar;
