import React from "react";
import "./AboutBody.scss";
import tutor from "../../assets/images/tutor.jpg";

function AboutBody() {
  return (
    <div className="about">
      <div className="about__summary">
        <div className="about__imgbox">
          <img className="about__img" src={tutor} alt="Tutor Iris" />
        </div>
        <div className="about__details">
          <p className="about__exp">
            <strong>Tutor Experience:</strong> 10+ years{" "}
          </p>
          <p>
            <strong>Bachelor of Science degree:</strong> University of Toronto
            (double major in Genetics and Ecology)
          </p>
          <p>
            <strong>Master of Science degree:</strong> University of
            Saskatchewan (Research in Cattle Supplementation){" "}
          </p>
          <p className="about__specialty">
            <strong>Specialty:</strong> Math and Sciences{" "}
          </p>
        </div>
      </div>
      <div className="about__about">
        <h3>Hello, I’m Iris!</h3>
        <p>
          With over a decade of experience as a dedicated tutor, I’ve had the
          privilege of inspiring countless students in STEM subjects. I’ve
          devoted my evenings and weekends to tutoring because I’m passionate
          about empowering young minds to achieve their potential. Parents often
          tell me that my positive and engaging teaching style makes a
          difference, helping students not only understand challenging concepts
          but also build the confidence they need to thrive academically.
          There's nothing more rewarding than seeing a student’s “lightbulb
          moment” and knowing they’re on the path to future success. I’d be
          delighted to support your child’s learning journey. Let’s work
          together to help them reach their goals and shine in STEM!
        </p>
      </div>
    </div>
  );
}

export default AboutBody;
