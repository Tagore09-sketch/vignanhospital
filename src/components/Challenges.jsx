import React from "react";
import "./Challenges.css";

const Challenges = () => {
  return (
    <section className="vignan-section">
      <div className="challenges-container">
        <h2 className="sections-title">
          Challenges Faced by Patients & Hospitals
        </h2>

        <div className="challenges-columns">
          {/* Left Column - FOR PATIENTS */}
          <div className="column">
            <h3 className="columns-title">FOR PATIENTS</h3>
            <ul className="challenges-list">
              <li>Follow-up access issues</li>
              <li>Post-treatment awareness gaps</li>
              <li>Transportation difficulties</li>
              <li>Financial burdens</li>
              <li>Medication adherence problems</li>
              <li>Elderly care and rehabilitation challenges</li>
              <li>Mental health and family dependence</li>
            </ul>
          </div>

          {/* Right Column - FOR HOSPITALS */}
          <div className="column">
            <h3 className="columns-title">FOR HOSPITALS</h3>
            <ul className="challenges-list">
              <li>Difficulty in recovery monitoring</li>
              <li>High readmission rates</li>
              <li>Gaps in care continuity</li>
              <li>Resource constraints</li>
              <li>Communication gaps</li>
              <li>Missed preventive care opportunities</li>
              <li>Care Continuity</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Challenges;
