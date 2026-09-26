import React from "react";
import "./Contact.css";
import Header from "./Header";
import Appointment from "./Appointment";
const Contact = () => {
  return (
    <div className="contact-page">
      <Header />
      <div className="contact-hero">
        <h1>Contact Us</h1>
      </div>
      <Appointment />
    </div>
  );
};

export default Contact;
