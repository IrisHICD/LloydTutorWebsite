import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { animateScroll as scroll } from "react-scroll";
import "./ContactBody.scss";

function ContactBody() {
  const [state, handleSubmit] = useForm("xldeaawq");

  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 500,
      smooth: "easeInOutQuart",
    });
  };

  if (state.succeeded) {
    return (
      <div className="contact__success">
        <p>Thanks for your message! We'll get back to you soon.</p>
        <button onClick={scrollToTop} className="btn">
          Back to Top
        </button>
      </div>
    );
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="contact__heading">
          <h3>Contact Us</h3>
          <button onClick={scrollToTop} className="arrow__up">
            &gt;
          </button>
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
            required
          ></textarea>
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>

        <button type="submit" className="btn" disabled={state.submitting}>
          {state.submitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
}

export default ContactBody;
