import React from "react";
import { animateScroll as scroll } from "react-scroll";
import { Element } from "react-scroll";
import "./Page.scss";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import MainBody from "../components/MainBody/MainBody";
import BookingBody from "../components/BookingBody/BookingBody";
import ContactBody from "../components/ContactBody/ContactBody";
import AboutBody from "../components/AboutBody/AboutBody";

function LandingPage() {
  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 500,
      smooth: "easeInOutQuart",
    });
  };
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
