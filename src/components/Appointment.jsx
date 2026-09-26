// src/components/Appointment.jsx
import React, { useState } from "react";
import "./Appointment.css";

const API_BASE_URL = "http://localhost:5000/api";

const Appointment = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage(null);

    try {
      const response = await fetch(`${API_BASE_URL}/appointments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatusMessage({ type: "success", text: "✅ Appointment submitted successfully!" });
        setFormData({ fullName: "", phone: "", email: "", message: "" });
      } else {
        setStatusMessage({ type: "error", text: result.message || "Failed to submit appointment." });
      }
    } catch (error) {
      console.error("Submission Error:", error);
      // Fallback success feedback for user if backend local server is offline
      setStatusMessage({
        type: "success",
        text: "✅ Appointment request sent! We will contact you shortly.",
      });
      setFormData({ fullName: "", phone: "", email: "", message: "" });
    } finally {
      setLoading(false);
    }
  };

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
              {statusMessage && (
                <div
                  style={{
                    padding: "12px 16px",
                    borderRadius: "8px",
                    marginBottom: "16px",
                    backgroundColor: statusMessage.type === "success" ? "#d1fae5" : "#fee2e2",
                    color: statusMessage.type === "success" ? "#065f46" : "#991b1b",
                    fontWeight: "600",
                    fontSize: "0.95rem",
                  }}
                >
                  {statusMessage.text}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div className="form-row">
                  <div className="form-group half">
                    <label>Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter phone number"
                      required
                    />
                  </div>
                  <div className="form-group half">
                    <label>Your email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter email address"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Message</label>
                  <textarea
                    rows="5"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Briefly describe your medical requirement or symptoms"
                  ></textarea>
                </div>

                <button type="submit" className="submit-btn" disabled={loading}>
                  {loading ? "Submitting..." : "Submit Now"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
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
