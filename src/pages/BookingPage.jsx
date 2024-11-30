import React from "react";
import "./Page.scss";
import Navbar from "../components/Navbar/Navbar";
import BookingBody from "../components/BookingBody/BookingBody";

function BookingPage() {
  return (
    <div className="page">
      <Navbar />
      <BookingBody />
    </div>
  );
}

export default BookingPage;
