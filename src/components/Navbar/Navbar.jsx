import React from "react";
import { Link } from "react-scroll";
import "./Navbar.scss";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__name">
        <Link to="home" smooth={true} duration={500} className="navbar__title">
          Lloydminster Tutoring Services
        </Link>
      </div>
      <div className="navbar__links">
        <Link to="about" smooth={true} duration={500} className="navbar__link">
          About
        </Link>
        <Link
          to="booking"
          smooth={true}
          duration={500}
          className="navbar__link"
        >
          Booking
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          className="navbar__link"
        >
          Contact
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
