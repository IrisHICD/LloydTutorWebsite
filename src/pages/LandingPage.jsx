import React from "react";
import "./Page.scss";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import MainBody from "../components/MainBody/MainBody";

function LandingPage() {
  return (
    <div className="page">
      <Navbar />
      <MainBody />
      <Footer />
    </div>
  );
}

export default LandingPage;
