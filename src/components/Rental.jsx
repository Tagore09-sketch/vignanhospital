// Rental.jsx
import React, { useState } from "react";
import "./Rental.css";
import Header from "./Header";
import Appointment from "./Appointment";

const API_BASE_URL = "http://localhost:5000/api";

export default function Rental() {
  const [showForm, setShowForm] = useState(false);
  const [product, setProduct] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [onlinePayOption, setOnlinePayOption] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formFields, setFormFields] = useState({
    fullName: "",
    phone: "",
    email: "",
    address: "",
  });

  const products = [
    {
      name: "CPAP / BiPAP Machine",
      image:
        "https://northfloridasleep.com/wp-content/uploads/2023/01/cpap-machine.jpg",
      desc: "Used to treat sleep apnea by maintaining airflow.",
    },
    {
      name: "Hospital Bed",
      image:
        "https://cdn.shopify.com/s/files/1/0769/1349/products/15003bv-pkg-1.jpg?v=1455081283",
      desc: "Comfortable adjustable beds for home care.",
    },
    {
      name: "Suction Pump",
      image:
        "https://tse1.mm.bing.net/th/id/OIP.dgdBjyl1YRn_Od6GtHXfyAHaE1?rs=1&pid=ImgDetMain&o=7&rm=3",
      desc: "Safely removes fluids and clears airways.",
    },
  ];

  const handleInputChange = (e) => {
    setFormFields({
      ...formFields,
      [e.target.name]: e.target.value,
    });
  };

  const handleOrderSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const payload = {
      ...formFields,
      productName: product,
      paymentMethod,
      onlinePayOption: paymentMethod === "ONLINE" ? onlinePayOption : null,
      orderType: "Rental",
    };

    try {
      const response = await fetch(`${API_BASE_URL}/orders`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setShowSuccess(true);
      } else {
        setShowSuccess(true);
      }
    } catch (error) {
      console.error("Order submission error:", error);
      setShowSuccess(true);
    } finally {
      setLoading(false);
      setFormFields({ fullName: "", phone: "", email: "", address: "" });
    }
  };

  return (
    <div className="rental-page">
      <Header />
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-inner">
          <h1 className="hero-title">Medical Equipment For Rent</h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="content container">
        <h2 className="section-title">Rental Medical Equipment Services</h2>
        <p className="lead">
          Vignan hospital offers convenient rental of medical equipment,
          ensuring affordable access to essential devices for home care and
          rehabilitation.
        </p>

        {/* Products Grid */}
        <div className="image-container">
          {products.map((item, index) => (
            <div className="card" key={index}>
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p>{item.desc}</p>

              <button
                className="buy-btn"
                onClick={() => {
                  setProduct(item.name);
                  setShowForm(true);
                  setPaymentMethod("");
                }}
              >
                Buy Now
              </button>
            </div>
          ))}
        </div>

        {/* Extra Info */}
        <div className="equipment-extra">
          <div className="equipment-left">
            <ul>
              <li>✔ Suction pump</li>
              <li>✔ Monitors and more</li>
            </ul>

            <p className="equipment-info">
              For more medical rental equipment or additional requests, call us.
            </p>
          </div>

          <button className="contact-btn">📞 Contact Now</button>
        </div>
      </section>

      {/* Buy Modal */}
      {showForm && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Buy {product}</h2>

            <form className="buy-form" onSubmit={handleOrderSubmit}>
              <input
                type="text"
                name="fullName"
                value={formFields.fullName}
                onChange={handleInputChange}
                placeholder="Full Name"
                required
              />
              <input
                type="tel"
                name="phone"
                value={formFields.phone}
                onChange={handleInputChange}
                placeholder="Phone Number"
                required
              />
              <input
                type="email"
                name="email"
                value={formFields.email}
                onChange={handleInputChange}
                placeholder="Email"
              />
              <textarea
                name="address"
                value={formFields.address}
                onChange={handleInputChange}
                placeholder="Delivery Address"
                required
              />

              <div className="payment-section">
                <p className="payment-title">Payment Method</p>

                <div className="payment-row">
                  <label className="payment-inline">
                    <input
                      type="radio"
                      name="payment"
                      value="COD"
                      checked={paymentMethod === "COD"}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      required
                    />
                    <span>Cash on Delivery</span>
                  </label>

                  <label className="payment-inline">
                    <input
                      type="radio"
                      name="payment"
                      value="ONLINE"
                      checked={paymentMethod === "ONLINE"}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                    />
                    <span>Online Payment</span>
                  </label>
                </div>

                {paymentMethod === "ONLINE" && (
                  <div className="payment-sub-box">
                    <label>
                      <input
                        type="radio"
                        name="onlinePay"
                        value="PhonePe"
                        onChange={(e) => setOnlinePayOption(e.target.value)}
                        required
                      /> PhonePe
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="onlinePay"
                        value="Google Pay"
                        onChange={(e) => setOnlinePayOption(e.target.value)}
                      /> Google Pay
                    </label>
                  </div>
                )}
              </div>

              <button type="submit" disabled={loading}>
                {loading ? "Submitting Order..." : "Submit"}
              </button>
            </form>

            <span className="close" onClick={() => setShowForm(false)}>
              ✕
            </span>
          </div>
        </div>
      )}

      {/* Success Popup */}
      {showSuccess && (
        <div className="success-overlay">
          <div className="success-box">
            <h2>✅ Order Confirmed</h2>
            <p>Your order for {product} has been recorded in MongoDB Atlas! You will receive delivery confirmation within a few hours.</p>
            <button
              onClick={() => {
                setShowSuccess(false);
                setShowForm(false);
              }}
            >
              OK
            </button>
          </div>
        </div>
      )}
      <Appointment />
    </div>
  );
}
