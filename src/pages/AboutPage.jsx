import React from "react";
import "./Page.scss";
import Navbar from "../components/Navbar/Navbar";
import AboutBody from "../components/AboutBody/AboutBody";

function AboutPage() {
  return (
    <div className="page">
      <Navbar />
      <AboutBody />
    </div>
  );
}

export default AboutPage;
