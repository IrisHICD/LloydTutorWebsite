import React from "react";
import "./LandingPage.scss";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import MainBody from "../components/MainBody/MainBody";

function LandingPage() {
  return (
    <div className="landingpage">
      <Navbar />
      <MainBody />
      <Footer />
    </div>
  );
}

export default LandingPage;
