import React, { useState } from "react";
import "./MainBody.scss";
import freeimage from "../../assets/images/freeimage.jpg";

function MainBody() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const feedbacks = [
    "Our daughter’s grades in Pre-calculus have improved dramatically since working with Iris. More importantly, she’s regained her confidence and is no longer intimidated by the subject. Iris explains concepts in a way that makes them easy to understand and provides strategies to solve complex problems. She is always punctual, prepared, and professional. Thank you!",
    "Iris's expertise in Math and Science is remarkable, but what sets her apart is her ability to connect with students on a personal level. Our son enjoys his regular tutor sessions and it shows through his grades. Iris is honest and genuinely invested in students' success. We highly recommend her tutoring services!",
    "Our son is a busy athlete with a packed schedule of practices, and we started to notice that his academic performance was beginning to fall behind. Iris was recommended to us by a friend, and reaching out to her was one of the best decisions we’ve ever made. With just one session per week, our son scored an 85% on his Grade 11 Pre-Calculus final! Thank you so much for all your help!",
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % feedbacks.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? feedbacks.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="body">
      <div className="body__controls">
        <button onClick={handlePrev} className="arrow left">
          &lt;
        </button>
        <button onClick={handleNext} className="arrow right">
          &gt;
        </button>
      </div>
      <div className="body__feedbacks">
        <p>{feedbacks[currentIndex]}</p>
      </div>

      <img src={freeimage} className="body__img" alt="Decorative" />
    </div>
  );
}

export default MainBody;
