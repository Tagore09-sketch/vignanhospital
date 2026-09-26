import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setIsServicesOpen(false);
  };

  const toggleServices = (e) => {
    if (window.innerWidth <= 992) {
      // On mobile: toggle sub-menu
      e.preventDefault();
      setIsServicesOpen(!isServicesOpen);
    }
  };

  return (
    <header>
      <div className="header-container">
        <div className="logo-area">
          <i className="fa-solid fa-hand-holding-medical logo-icon"></i>

          <div className="logo-text">
            <div className="hospital-name">VIGNAN HOSPITAL</div>
            <div className="tagline">"Your Health, Our Priority"</div>
          </div>
        </div>

        {/* Hamburger */}
        <button
          className="hamburger"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <i className={`fa-solid ${isOpen ? "fa-xmark" : "fa-bars"}`}></i>
        </button>

        {/* Navigation */}
        <ul className={`nav-links ${isOpen ? "active" : ""}`}>
          <li>
            <a href="/" className="active" onClick={closeMenu}>
              Home
            </a>
          </li>
          <li>
            <a href="/About" onClick={closeMenu}>
              About Us
            </a>
          </li>

          {/* Services with Dropdown */}
          <li
            className="dropdown"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <a href="#" className="dropdown-toggle" onClick={toggleServices}>
              Services <i className="fa-solid fa-chevron-down arrow"></i>
            </a>

            <ul className={`dropdown-menu ${isServicesOpen ? "show" : ""}`}>
              <li>
                <a href="/services/chronic" onClick={closeMenu}>
                  Chronic disease management
                </a>
              </li>
              <li>
                <a href="/services/companionship" onClick={closeMenu}>
                  Companionship care
                </a>
              </li>
              <li>
                <a href="/services/doctors-home" onClick={closeMenu}>
                  Doctors Home Visit
                </a>
              </li>
              <li>
                <a href="/services/elderly" onClick={closeMenu}>
                  Elderly Care
                </a>
              </li>
              <li>
                <a href="/services/genetic" onClick={closeMenu}>
                  Genetic Testing
                </a>
              </li>
              <li>
                <a href="/services/pregnancy" onClick={closeMenu}>
                  Pregnancy Care
                </a>
              </li>
              <li>
                <a href="/services/wellness" onClick={closeMenu}>
                  Wellness Services
                </a>
              </li>
              <li>
                <a href="/services/lab" onClick={closeMenu}>
                  Lab Test Packages
                </a>
              </li>
              <li>
                <a href="/services/physio" onClick={closeMenu}>
                  Physiotherapy at home
                </a>
              </li>
              <li>
                <a href="/services/nurse" onClick={closeMenu}>
                  Nurse Services
                </a>
              </li>
            </ul>
          </li>

          <li>
            <a href="/products" onClick={closeMenu}>
              Products
            </a>
          </li>
          <li>
            <a href="/Rental" onClick={closeMenu}>
              Rental Equipments
            </a>
          </li>
          <li>
            <a href="/Careers" onClick={closeMenu}>
              Careers
            </a>
          </li>
          <li>
            <a href="/Contact" onClick={closeMenu}>
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
