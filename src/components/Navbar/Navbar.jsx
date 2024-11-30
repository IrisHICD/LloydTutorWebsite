import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__name">
        <Link to="/">
          <h3 className="navbar__title">Lloydminster Tutoring Services</h3>
        </Link>
      </div>
      <div className="navbar__links">
        <a className="navbar__link" href="about">
          About
        </a>
        <a className="navbar__link" href="booking">
          Booking
        </a>
        <a className="navbar__link" href="contact">
          Contact
        </a>
      </div>
    </div>
  );
}

export default Navbar;
