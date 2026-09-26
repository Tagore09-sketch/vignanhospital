import { useEffect, useState } from "react";
import "./Hero.css";

const Hero = () => {
  const [showScroll, setShowScroll] = useState(false);

  // Scroll to top button logic
  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* HERO SECTION */}
      <section className="heros">
        <div className="hero-content">
          <h1>
            Bridging the gap in <br />
            <span>India's Healthcare</span>
          </h1>

          <p className="subtitle">
            Delivering immediate emergency care and ongoing healthcare support
            for a smoother, more effective recovery.
          </p>

          <div className="features">
            <div className="feature-item">
              <i
                className="fa-solid fa-angles-right"
                style={{ color: "#ffffff" }}
              ></i>
              24/7 Care Services
            </div>

            <div className="feature-item">
              <i
                className="fa-solid fa-angles-right"
                style={{ color: "#ffffff" }}
              ></i>
              In-Home Nursing Care
            </div>

            <div className="feature-item">
              <i
                className="fa-solid fa-angles-right"
                style={{ color: "#ffffff" }}
              ></i>
              Hospital Support Services
            </div>
          </div>

          <div className="btn-click">
            <a href="tel:+917780597718" className="btn btn-primary">
              <i className="fa-solid fa-phone"></i> Contact Now
            </a>

            <a
              href="https://wa.me/+917780597718?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20your%20home%20care%20services."
              className="btn btn-outline"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-whatsapp"></i> Chat Now
            </a>
          </div>
        </div>
      </section>

      {/* FLOATING SOCIAL ICONS */}
      <div className="social-icons">
        <a href="#">
          <i className="fa-brands fa-facebook-f"></i>
        </a>
        <a href="#">
          <i className="fa-brands fa-twitter"></i>
        </a>
        <a href="#">
          <i className="fa-brands fa-youtube"></i>
        </a>
        <a href="#">
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a href="https://wa.me/917780597718">
          <i className="fa-brands fa-whatsapp"></i>
        </a>
        <a href="tel:+7780597718" title="Call Us">
          <i className="fa-solid fa-phone-volume"></i>
        </a>

        <button
          id="scrollToTop"
          className={showScroll ? "show" : ""}
          title="Back to Top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <i className="fa-solid fa-arrow-up"></i>
        </button>
      </div>
    </>
  );
};

export default Hero;
