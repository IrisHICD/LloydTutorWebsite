import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__name">
        <NavLink
          to="/"
          exact
          className="navbar__title"
          activeClassName="active"
        >
          Lloydminster Tutoring Services
        </NavLink>
      </div>
      <div className="navbar__links">
        <NavLink to="/about" className="navbar__link" activeClassName="active">
          About
        </NavLink>
        <NavLink
          to="/booking"
          className="navbar__link"
          activeClassName="active"
        >
          Booking
        </NavLink>
        <NavLink
          to="/contact"
          className="navbar__link"
          activeClassName="active"
        >
          Contact
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
