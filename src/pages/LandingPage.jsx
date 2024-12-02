import React from "react";
import "./Page.scss";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import MainBody from "../components/MainBody/MainBody";
import BookingBody from "../components/BookingBody/BookingBody";
import ContactBody from "../components/ContactBody/ContactBody";
import { Element } from "react-scroll";
import AboutBody from "../components/AboutBody/AboutBody";

function LandingPage() {
  return (
    <div className="page">
      <Navbar />
      <Element name="home">
        <MainBody />
      </Element>
      <Element name="about">
        <AboutBody />
      </Element>
      <Element name="booking">
        <BookingBody />
      </Element>
      <Element name="contact">
        <ContactBody />
      </Element>
      <Footer />
    </div>
  );
}

export default LandingPage;
