import React from "react";
import "./About.css";
import Header from "./Header";
import Appointment from "./Appointment";

const About = () => {
  return (
    <div className="about-page">
      <Header />
      {/* Header Banner */}
      <header className="about-header">
        <div className="header-content">
          <h1>About Vignan</h1>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-text">
            <h2>Closing the Gap Between Hospitals and Homes</h2>
            <p className="mission-statement">
              At Vignan Hospital, we bridge the gap between hospitals and homes
              by extending quality medical care, emotional support, and
              emergency services right to your doorstep. Our goal is to ensure
              continuous healing and compassionate care, even after patients
              leave the hospital.
            </p>
            <p className="mission-statement">
              At Vignan Hospital, we extend care beyond hospital walls,
              delivering medical support and emergency services at home so
              healing never stops.
            </p>
          </div>

          <div className="hero-image">
            <img src="/image1.jpg" alt="Doctor hand with heart symbol" />
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision">
        <div className="mv-grid">
          <div className="mv-card">
            <h3>Our Mission</h3>
            <p>
              To make healthcare truly accessible, compassionate, affordable,
              and professional by combining cutting-edge medical innovation with
              genuine human connection, delivered wherever it’s needed.
            </p>
          </div>

          <div className="mv-card">
            <h3>Our Vision</h3>
            <p>
              To build a connected system of care across India, especially in
              underserved regions, where hospitals, homes, and communities work
              together to create a continuous and caring health experience.
            </p>
          </div>
        </div>
      </section>

      {/* What We Stand For */}
      <section className="values-section">
        <h2>What We Stand For</h2>
        <p className="values-intro">
          We treat every patient like family—with empathy, dignity, and respect.
        </p>

        <div className="values-grid">
          <div className="value-card">
            <h4>Compassion</h4>
            <p>
              We treat every patient like family—with empathy, dignity, and
              respect.
            </p>
          </div>

          <div className="value-card">
            <h4>Accessibility</h4>
            <p>
              We reach homes that clinics can’t—bringing quality care even to
              remote areas.
            </p>
          </div>

          <div className="value-card">
            <h4>Trust</h4>
            <p>
              We earn it through consistency, transparency, and doing what’s
              right for our patients.
            </p>
          </div>

          <div className="value-card">
            <h4>Innovation</h4>
            <p>
              From Bike Ambulances to real-time tracking, we use smart tools to
              care better and faster.
            </p>
          </div>

          <div className="value-card">
            <h4>Continuity</h4>
            <p>
              Health doesn’t pause after discharge—we’re with you for
              follow-ups, rehab, and support.
            </p>
          </div>

          <div className="value-card">
            <h4>Community Empowerment</h4>
            <p>
              We work hand-in-hand with local nurses, caregivers, and health
              workers to build resilient healthcare ecosystems.
            </p>
          </div>
        </div>
      </section>

      {/* Two Pillars */}
      <section className="pillars-section">
        <h2>Our Two Pillars of Service</h2>

        <div className="pillars-grid">
          <div className="pillar-card">
            <h3>Aarogya Vahini</h3>
            <p>
              Our primary care delivery stream. From nursing and diagnostics to
              pain relief, post-op recovery, and clinical procedures, we bring
              skilled care directly to your home.
            </p>
          </div>

          <div className="pillar-card">
            <h3>Jeevana Setu</h3>
            <p>
              Our bridge of support. Focused on elder care, counseling, mobility
              solutions, and emergency response, Jeevana Setu keeps people
              connected to their health journey even after they leave the
              hospital.
            </p>
          </div>
        </div>
      </section>

      {/* Board */}
      <section className="board-section">
        <h2>Meet Our Board</h2>

        <div className="board-grid">
          <div className="board-member">
            <div
              className="photo-placeholder"
              style={{ background: "#ddd" }}
            ></div>
            <h4>A.Rahul Kumar</h4>
            <p className="role">Founder & Managing Director</p>
            <p>
              An experienced professional with a strong background in marketing,
              business development, and healthcare. They have held leadership
              positions at APTECH, TATA Infotech, Wonder Web Solutions, Sri Sai
              Hospitals, and 4P Healthcare Private Limited.
            </p>
          </div>

          <div className="board-member">
            <div
              className="photo-placeholder"
              style={{ background: "#ddd" }}
            ></div>
            <h4>k.Amarnadh</h4>
            <p className="role">Director – Operations</p>
            <p>
              An MBBS doctor with UK certification in Critical Care. Dr. Kishore
              brings 12 years of emergency and ICU experience, ensuring
              Deerghayushman delivers round-the-clock, hospital-grade care to
              homes across India.
            </p>
          </div>

          <div className="board-member">
            <div
              className="photo-placeholder"
              style={{ background: "#ddd" }}
            ></div>
            <h4>P.yaswanth</h4>
            <p className="role">Advisor</p>
            <p>
              Founder, HelloKidney.ai | Senior Nephrologist. A pioneer in
              AI-powered kidney care with 15+ years of clinical expertise.
            </p>
          </div>

          <div className="board-member">
            <div
              className="photo-placeholder"
              style={{ background: "#ddd" }}
            ></div>
            <h4>Bhanu Prakash</h4>
            <p className="role">Advisor</p>
            <p>
              Founder, SOPRAV Healthcare | Healthcare Strategist. Deep
              experience in integrative medicine, mental health, and public
              health systems.
            </p>
          </div>

          <div className="board-member">
            <div
              className="photo-placeholder"
              style={{ background: "#ddd" }}
            ></div>
            <h4>Tagore</h4>
            <p className="role">Advisor</p>
            <p>
              IIT Bombay Alumnus | Innovator & Educator. Supports scaling health
              tech and community outreach in rural and semi-urban India.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="cta-section">
        <h2>Experience the Future of Care, Right at Home</h2>
        <p>
          Call us today or download the Deerghayushman App to connect with our
          trained Med Warriors—and bring compassionate healthcare home.
        </p>
        <a href="/Contact">
          <button className="connect-button">Connect With Us</button>
        </a>
      </section>
      <Appointment />
    </div>
  );
};

export default About;
