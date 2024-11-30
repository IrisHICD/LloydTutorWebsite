import React from "react";
import "./Footer.scss";
import { FaEnvelope, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__icons">
        <a
          href="mailto:iris_hoin_cheang@hotmail.com"
          className="footer__icon"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Email"
        >
          <FaEnvelope size={24} />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100063838950316"
          className="footer__icon"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <FaFacebook size={24} />
        </a>
      </div>
      <div className="footer__loc">
        <h3>Location: </h3>
        <p>Online AND In-person in Lloydminster, AB</p>
      </div>
    </div>
  );
}
