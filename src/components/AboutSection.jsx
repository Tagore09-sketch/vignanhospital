import React from "react";
import "./AboutSection.css"; // your existing CSS file

const AboutSection = () => {
  return (
    <div className="container">
      <div className="pre-title">Revolutionizing Healthcare with</div>

      <h1 className="main-title">
        Vignan <span>Hospital</span>
      </h1>

      <h2 className="intro-subtitle">
        Introducing Swift, Life-Saving Bike Ambulances & Home-Based Medical
        Services
      </h2>

      <p className="description">
        Vignan Hospital is transforming healthcare delivery in emerging cities
        by addressing the gaps between hospitals and patients after discharge.
        With innovative Bike Ambulances, home-based healthcare, and continuous
        medical support, we provide essential services to bridge the critical
        time and distance gaps.
      </p>

      <div className="highlights">
        <div className="highlight-item">
          <span>»</span>
          Highlight the gap in post-discharge care for patients in tier 2 and
          tier 3 cities.
        </div>

        <div className="highlight-item">
          <span>»</span>
          Showcase the innovation: Bike Ambulances for swift emergency care
          before conventional ambulances arrive.
        </div>
      </div>

      <a href="tel:+917780597718" className="cta-button">
        <i className="fa-solid fa-phone"></i>
        Contact us for Emergency Care
      </a>
    </div>
  );
};

export default AboutSection;
