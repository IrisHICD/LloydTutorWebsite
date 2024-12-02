import React, { useState } from "react";
import axios from "axios";
import "./BookingBody.scss";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    age: "",
    subject: "",
    availability: [],
    noPreference: false,
    parentEmail: "", // Add this field
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => {
      if (name === "noPreference") {
        return {
          ...prev,
          noPreference: checked,
          availability: checked ? [] : prev.availability,
        };
      }

      if (type === "checkbox") {
        const newAvailability = checked
          ? [...prev.availability, value]
          : prev.availability.filter((val) => val !== value);

        return { ...prev, availability: newAvailability };
      }

      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation logic
    if (!formData.age) {
      alert("Student age is required.");
      return;
    }

    if (!formData.subject) {
      alert("Subject selection is required.");
      return;
    }

    if (!formData.noPreference && formData.availability.length === 0) {
      alert("Please select availability or choose 'No Preference'.");
      return;
    }

    if (!formData.parentEmail) {
      alert("Parent's email is required.");
      return;
    }

    try {
      const response = await axios.post("/api/send-email", formData);
      if (response.status === 200) {
        alert("Email sent successfully!");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to send email.");
    }
  };

  return (
    <div className="booking">
      <div className="booking__intro">
        <div className="booking__heading">
          <h3>Book a session</h3>
          <button className="arrow__up">&gt;</button>
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
