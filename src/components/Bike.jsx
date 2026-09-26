import React from "react";
import "./Bike.css";

const BikeAmbulance = () => {
  return (
    <div className="bike-section">
      <div className="content-wrapper">
        <div className="text-content">
          <h2 className="title">Vignan Bike Ambulance</h2>

          <p className="subtitle">
            A Game Changer – Bridging Critical Time Gaps in Healthcare
          </p>

          <p className="main-text">
            The Bike Ambulance sets Vignan apart by bridging critical time gaps
            in patient healthcare. Equipped with a doctor, nurse, first-aid kit,
            and oxygen, it delivers life-saving treatment and immediate
            stabilization before a conventional ambulance arrives. This
            innovative solution ensures faster emergency response and has a
            profound impact, as highlighted by real-life stories and
            testimonials.
          </p>

          <div className="contact-info">
            <p className="call-text">Call for Bike Ambulance</p>
            <p className="phone-number">+91 7780597718</p>

            <a href="tel:+91 7780597718" className="contact-now-btn">
              Contact Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BikeAmbulance;
