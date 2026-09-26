import React from "react";
import "./Careers.css";
import Header from "./Header";
import Appointment from "./Appointment";

const roles = [
  {
    title: "Doctors",
    desc: "For Medico Specialists, PGs, MBBS and PharmD.",
    img: "https://images.unsplash.com/photo-1582750433449-648ed127bb54",
  },
  {
    title: "Nurses (MSc, BSc Nursing, GNM, ANM)",
    desc: "Qualified nurses ready to serve patients",
    img: "/Nurse.jpg",
  },
  {
    title: "Physiotherapists",
    desc: "MPT and BPT staff",
    img: "/Physiotherapist.jpg",
  },
  {
    title: "Lab Technicians & Assistants",
    desc: "BSC, MSC (MLT / DMLT)",
    img: "/Lab Technicians & Assistants.jpg",
  },
];

export default function Careers() {
  return (
    <div className="careers-page">
      <Header />

      {/* Hero Section with Background Image */}
      <section className="hero-careers">
        <div className="hero-content">
          <h1 className="hero-title">
            A Giant step into the future
            <br />
            of <span className="highlight">HOME HEALTH CARE</span> with
            <br />
            our <span className="highlight-med">MED WARRIORS™</span>
          </h1>

          <p className="hero-subtitle">
            Join us in bringing quality healthcare to homes. Work when you're
            free
            <br />
            and make a difference.
          </p>

          <a href="/Contact" className="contact-btn">
            Contact NOW
          </a>
        </div>
      </section>

      {/* WHO CAN JOIN */}
      <section className="who-can-join" id="join">
        <h2>Who Can Join?</h2>
        <p>
          These positions are ideally suitable for professionals who are
          practicing or those who are passionate to render services full or part
          time.
        </p>

        <div className="cards">
          {roles.map((role, index) => (
            <div className="card" key={index}>
              <img src={role.img} alt={role.title} />
              <h3>{role.title}</h3>
              <p>{role.desc}</p>
            </div>
          ))}
        </div>

        <button className="join-btn">Join Now</button>
      </section>

      {/* HOW IT WORKS */}
      <section className="how-it-works">
        <h2>How It Works</h2>

        <div className="steps">
          <div className="step">
            <span>1</span>
            <p>Register</p>
          </div>
          <div className="step">
            <span>2</span>
            <p>Get Verified</p>
          </div>
          <div className="step">
            <span>3</span>
            <p>Start Earning</p>
          </div>
        </div>
      </section>

      <Appointment />
    </div>
  );
}
