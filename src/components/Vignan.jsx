import React from "react";
import "./Vignan.css"; // you'll create this file next

const Vignan = () => {
  return (
    <div className="vignan-container">
      <h1 className="main-title">
        Comprehensive Services Offered by
        <br />
        Vignan
      </h1>

      <p className="subtitle">
        Aarogya Vahini and Jeevana Setu: Dual Streams of Care
      </p>

      <div className="dual-columns">
        {/* Left Column - AAROGYA VAHINI */}
        <div className="column aarogya-vahini">
          <h2 className="column-title">AAROGYA VAHINI</h2>
          <p className="column-subtitle">
            Focus on core medical services and critical home-based care.
          </p>

          <ul className="service-list">
            <li>Home-based medical care</li>
            <li>Post-operative care</li>
            <li>Lab services and vaccination at home</li>
            <li>Pain management and palliative care</li>
            <li>DNA testing and non-invasive procedures</li>
          </ul>
        </div>

        {/* Right Column - JEEVANA SETU */}
        <div className="column jeevana-setu">
          <h2 className="column-title">JEEVANA SETU</h2>
          <p className="column-subtitle">
            Focus on outreach, elderly care, and transportation solutions.
          </p>

          <ul className="service-list">
            <li>Geriatric and elderly care</li>
            <li>Mental health support and counseling</li>
            <li>Community outreach programs</li>
            <li>Rental of medical equipment</li>
            <li>Emergency response via Bike Ambulances</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Vignan;
