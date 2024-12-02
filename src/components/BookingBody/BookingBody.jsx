import React from "react";
import { animateScroll as scroll } from "react-scroll";
import "./BookingBody.scss";

const BookingForm = () => {
  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 500,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <div className="booking">
      <div className="booking__intro">
        <div className="booking__heading">
          <h3>Book a session</h3>
          <button onClick={scrollToTop} className="arrow__up">
            &gt;
          </button>
        </div>

        <p>
          All private tutor sessions are 1-on-1 and fully customized. Grade 1-10
          sessions are $35 per hour while Grade 11-12 or College Level sessions
          are $40 per hour.
        </p>
        <p>
          To request an appointment, email or message me on Facebook with your
          subject of interest and availability. Note that appointments are
          limited. Having no preference on availability will increase your
          chance of getting a time slot.
        </p>
      </div>
    </div>
  );
};

export default BookingForm;
