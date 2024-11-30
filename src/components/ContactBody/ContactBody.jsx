import React, { useState } from "react";
import axios from "axios";
import "./ContactBody.scss";

function ContactBody() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!formData.name) {
      alert("Name is required.");
      return;
    }
    if (!formData.email) {
      alert("Email is required.");
      return;
    }
    if (!formData.message) {
      alert("Message is required.");
      return;
    }

    try {
      const response = await axios.post("/api/send-contact-email", formData);
      if (response.status === 200) {
        alert("Your message has been sent successfully!");
        setFormData({ name: "", email: "", message: "" }); // Clear the form
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send your message.");
    }
  };

  return (
    <div>
      {" "}
      <form onSubmit={handleSubmit} className="contact-form">
        <h2>Contact Us</h2>

        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
          ></textarea>
        </div>

        <button type="submit" className="btn">
          Send Message
        </button>
      </form>
    </div>
  );
}

export default ContactBody;
