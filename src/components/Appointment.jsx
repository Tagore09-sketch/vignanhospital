// src/components/AppointmentPage.jsx  (or wherever you place it)
import React from "react";
import "./Appointment.css";

const Appointment = () => {
  return (
    <div className="appointment-page">
      <div className="container">
        <h1 className="Names">Book an Appointment</h1>

        <div className="two-columns">
          {/* LEFT COLUMN: Info + Map */}
          <div className="left-column">
            <p>
              For any queries call: <strong>7780597718</strong>
            </p>
            <p>
              Bike Ambulance: <strong>6303548685</strong>
            </p>
            <p>
              Appointments & Emergencies: <strong>8466008539</strong>
            </p>

            <div className="map-wrapper">
              <iframe
                title="Vignan University Vadlamudi Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3826.366!2d80.5474733!3d16.2328134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4a0c76397dde35%3A0x41605c13c7a52ae2!2sVignan%27s%20Foundation%20for%20Science%2C%20Technology%20and%20Research!5e0!3m2!1sen!2sin!4v1738500000000!5m2!1sen!2sin"
                width="100%"
                height="380"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>

              {/* Optional info overlay like your screenshot */}
              <div className="map-info">
                <p>
                  <strong>
                    Vignan's Foundation for Science, Technology & Research
                  </strong>
                </p>
                <p>Vadlamudi, Guntur District - 522213</p>
                <p>Andhra Pradesh, India</p>
                <p className="map-action">Directions</p>
                <p className="map-action">View larger map</p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Contact Form Box */}
          <div className="right-column">
            <div className="form-box">
              <form>
                <div className="form-group">
                  <label>Full Name</label>
                  <input type="text" placeholder="" />
                </div>

                <div className="form-row">
                  <div className="form-group half">
                    <label>Phone Number</label>
                    <input type="tel" placeholder="" />
                  </div>
                  <div className="form-group half">
                    <label>Your email</label>
                    <input type="email" placeholder="" />
                  </div>
                </div>

                <div className="form-group">
                  <label>Message</label>
                  <textarea rows="5" placeholder=""></textarea>
                </div>

                <button type="submit" className="submit-btn">
                  Submit Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer - kept simple */}
      <footer className="footer">
        <div className="footer-links">
          Terms & Conditions | Privacy Policy | Cancellation & Refund Policy
        </div>
        <p>Copyright © 2025</p>
        <div className="footer-extra">
          To Refer a patient | Feedback Form | Partner privacy policy
        </div>
        <p>Made with ❤️ by filesi | Digital Marketing Agency</p>
      </footer>
    </div>
  );
};

export default Appointment;
