import React from "react";
import "./Whychoose.css";

const Whychoose = () => {
  return (
    <div className="why-choose-section">
      <div className="content-wrapper">
        <div className="text-content">
          <h2 className="title">Why Choose Vignan?</h2>

          <p className="description">
            Vignan ensures effective pain management, provides dedicated elder
            care, and offers home checkups, addressing critical healthcare needs
            with compassion and convenience.
          </p>

          <div className="stats">
            <div className="stat-item">
              <div className="percentage">39%</div>
              <div className="stat-text">
                Of Indians experience postoperative pain
              </div>
            </div>

            <div className="stat-item">
              <div className="percentage">62%</div>
              <div className="stat-text">
                Of seniors rely on others for daily care
              </div>
            </div>

            <div className="stat-item">
              <div className="percentage">71%</div>
              <div className="stat-text">
                of Indians die due to missed health checkups.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whychoose;
