import React, { useState } from "react";
import axios from "axios";
import "./BookingBody.scss";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    age: "",
    subject: "",
    availability: [],
    noPreference: false,
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
        <h3>Book a session</h3>
        <p>
          All private tutor sessions are 1-on-1 and fully customized. Grade 1-10
          sessions are $35 per hour while Grade 11-12 or College Level sessions
          are $40 per hour.
        </p>
        <p>
          To request an appointment, please fill out the form below. Please note
          appointments are limited. Selecting “no preference” under availability
          will increase your chance of getting a time slot.
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="booking__titles" htmlFor="age">
            Student Age
          </label>
          <input
            id="age"
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label className="booking__titles" htmlFor="subject">
            Subject
          </label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
          >
            <option value="">Select a subject</option>
            <option value="math">Math</option>
            <option value="chemistry">Chemistry</option>
            <option value="biology">Biology</option>
            <option value="physics">Physics</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="form-group">
          <label className="booking__titles">Availability</label>
          <div>
            <input
              className="booking__checkbox"
              type="checkbox"
              id="no-preference"
              name="noPreference"
              checked={formData.noPreference}
              onChange={handleChange}
            />
            <label htmlFor="no-preference">No Preference</label>
          </div>

          {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].map(
            (day) => (
              <div key={day}>
                <input
                  className="booking__checkbox"
                  type="checkbox"
                  id={`${day}-evening`}
                  name="availability"
                  value={`${day} Evening`}
                  onChange={handleChange}
                  checked={formData.availability.includes(`${day} Evening`)}
                  disabled={formData.noPreference}
                />
                <label htmlFor={`${day}-evening`}>{day} Evening</label>
              </div>
            )
          )}

          {["Saturday", "Sunday"].map((day) => (
            <div key={day}>
              <input
                className="booking__checkbox"
                type="checkbox"
                id={`${day}-afternoon`}
                name="availability"
                value={`${day} Afternoon`}
                onChange={handleChange}
                checked={formData.availability.includes(`${day} Afternoon`)}
                disabled={formData.noPreference}
              />
              <label htmlFor={`${day}-afternoon`}>{day} Afternoon</label>

              <input
                className="booking__checkbox"
                type="checkbox"
                id={`${day}-evening`}
                name="availability"
                value={`${day} Evening`}
                onChange={handleChange}
                checked={formData.availability.includes(`${day} Evening`)}
                disabled={formData.noPreference}
              />
              <label htmlFor={`${day}-evening`}>{day} Evening</label>
            </div>
          ))}
        </div>

        <button className="booking__btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
