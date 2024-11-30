import React from "react";
import Navbar from "../components/Navbar/Navbar";
import "./Page.scss";
import ContactBody from "../components/ContactBody/ContactBody";
import Footer from "../components/Footer/Footer";

function ContactPage() {
  return (
    <div className="page">
      <Navbar />
      <ContactBody />
      <Footer />
    </div>
  );
}

export default ContactPage;
