import React, { useState } from "react";
import "./Product.css";
import Header from "./Header";
import Appointment from "./Appointment";

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("");

  const openBuyForm = (productName) => {
    setSelectedProduct(productName);
    setShowForm(true);
    setPaymentMethod("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccess(true);
  };

  const closeAll = () => {
    setShowSuccess(false);
    setShowForm(false);
    setSelectedProduct(null);
  };

  const products = [
    {
      name: "Mobilab",
      image: "/Mobilab.jpeg",
      desc: "Mobilab is a portable diagnostic solution designed for healthcare professionals to deliver fast and accurate test results in any setting, including clinics, health camps, and remote areas. It offers 24 vital health parameters, covering heart (cholesterol, LDL, triglycerides), liver (bilirubin, albumin, AST, ALT), kidney (creatinine, eGFR), and anemia & diabetic profiles (hemoglobin, glucose). Mobilab provides comprehensive diagnostics, making it an essential tool for rapid health assessments.",
      demoVideo: "/2 video.mp4",
    },
    {
      name: "ProRITHM",
      image: "/prorithm.jpeg",
      desc: "ProRITHM simplifies remote patient monitoring and early detection with its advanced RPM platform. Equipped with cutting-edge proRITHM devices, the platform continuously tracks essential health metrics in real-time, offering a comprehensive solution for both patients and healthcare providers. This technology ensures better health outcomes while providing peace of mind through continuous monitoring and timely interventions.",
      demoVideo: "/prorithm.mp4",
    },
    {
      name: "ECG Pro Plus",
      image: "/ecg.jpeg",
      desc: "Experience the future of cardiac care with the ECG pro-plus combo – a compact, digital ECG system designed for doctors and healthcare professionals. This device allows you to easily capture 12-lead ECGs, ensuring precise and reliable heart monitoring. Its portable design and advanced digital ECG technology enable seamless report sharing, facilitating timely medical intervention anytime, anywhere.",
      demoVideo: "Mobilabvideo.mp4",
    },
    {
      name: "D’Ring",
      image: "/dring.jpeg",
      desc: "Introducing D’Ring, the world’s first non-invasive diabetic risk assessment smart health ring. Powered by an AI-based algorithm, it delivers highly accurate, next-generation preventive healthcare solutions. Painless and easy to use, D’Ring offers continuous health monitoring anytime, anywhere, empowering users to take control of their health.",
      demoVideo: "/3 video.mp4",
    },
  ];

  return (
    <div>
      <Header />

      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Our Products</h1>
          <p className="hero-subtitle">Advanced Medical Technology Solutions</p>
          <div className="hero-features">
            <div className="hero-feature">
              <i className="fas fa-stethoscope"></i>
              <span>Medical Devices</span>
            </div>
            <div className="hero-feature">
              <i className="fas fa-heartbeat"></i>
              <span>Health Monitoring</span>
            </div>
            <div className="hero-feature">
              <i className="fas fa-microscope"></i>
              <span>Diagnostic Tools</span>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS LIST */}
      {products.map((product, index) => (
        <section 
          className={`product-section ${index % 2 === 0 ? 'product-left' : 'product-right'}`} 
          key={index}
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(46, 93, 52, 0.9), rgba(30, 71, 40, 0.8)), url(${product.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="product-content-wrapper">
            <div className="product-image">
              <img src={product.image} alt={product.name} />
              <div className="product-overlay">
                <div className="product-badge">{product.name}</div>
              </div>
            </div>
            <div className="product-text">
              <h3>{product.name}</h3>
              <p>{product.desc}</p>

              <div className="product-actions">
                <a
                  href={product.demoVideo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="demo-btn demo-video">
                    <i className="fas fa-play"></i>
                    Watch Demo
                  </button>
                </a>
                <button
                  className="demo-btn buy-now"
                  onClick={() => openBuyForm(product.name)}
                >
                  <i className="fas fa-shopping-cart"></i>
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* BUY NOW MODAL */}
      {showForm && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Order {selectedProduct}</h2>

            <form className="buy-form" onSubmit={handleSubmit}>
              <input placeholder="Full Name" required />
              <input placeholder="Phone Number" required />
              <input placeholder="Email" />
              <textarea placeholder="Delivery Address" required />

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
                      <input type="radio" name="onlinePay" required /> PhonePe
                    </label>
                    <label>
                      <input type="radio" name="onlinePay" /> Google Pay
                    </label>
                  </div>
                )}
              </div>

              <button type="submit">Submit Order</button>
            </form>

            <span className="close" onClick={() => setShowForm(false)}>
              ✕
            </span>
          </div>
        </div>
      )}

      {/* SUCCESS / CONGRATULATIONS POPUP */}
      {showSuccess && (
        <div className="success-overlay">
          <div className="success-box">
            <h2>🎉 Congratulations!</h2>
            <p>
              Your order for <strong>{selectedProduct}</strong> has been
              successfully placed!
            </p>
            <p>You will receive confirmation shortly.</p>
            <button onClick={closeAll}>OK</button>
          </div>
        </div>
      )}

      <Appointment />
    </div>
  );
};

export default Products;
