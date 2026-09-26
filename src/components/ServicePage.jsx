import React, { useState, useEffect } from 'react';
import Header from './Header';
import './ServicePage.css';

const ServicePage = ({ 
  title, 
  backgroundImage, 
  description, 
  diseases, 
  serviceDetails,
  features,
  stats 
}) => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    address: '',
    selectedDisease: ''
  });
  const [activeCard, setActiveCard] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [animatedStats, setAnimatedStats] = useState([]);

  useEffect(() => {
    setIsVisible(true);
    
    // Animate stats numbers
    if (stats) {
      const animateNumbers = () => {
        stats.forEach((stat, index) => {
          const finalNumber = parseInt(stat.number.replace(/\D/g, '')) || 0;
          let currentNumber = 0;
          const increment = finalNumber / 50;
          
          const timer = setInterval(() => {
            currentNumber += increment;
            if (currentNumber >= finalNumber) {
              currentNumber = finalNumber;
              clearInterval(timer);
            }
            
            setAnimatedStats(prev => {
              const newStats = [...prev];
              newStats[index] = {
                ...stat,
                number: stat.number.includes('%') 
                  ? `${Math.round(currentNumber)}%`
                  : stat.number.includes('+')
                  ? `${Math.round(currentNumber)}+`
                  : stat.number.includes('hrs')
                  ? `${Math.round(currentNumber)}hrs`
                  : `${Math.round(currentNumber)}`
              };
              return newStats;
            });
          }, 50);
        });
      };
      
      setTimeout(animateNumbers, 500);
    }
  }, [stats]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    // Add success animation
    const submitBtn = e.target.querySelector('.submit-btn');
    submitBtn.style.background = 'linear-gradient(135deg, #28a745, #20c997)';
    submitBtn.innerHTML = '<i class="fas fa-check"></i> Submitted Successfully!';
    
    setTimeout(() => {
      alert('Thank you! We will contact you soon.');
      setFormData({
        username: '',
        email: '',
        address: '',
        selectedDisease: ''
      });
      submitBtn.style.background = 'linear-gradient(135deg, #2e5d34, #1e4728)';
      submitBtn.innerHTML = '<i class="fas fa-calendar-check"></i> Schedule Consultation';
    }, 2000);
  };

  const handleCardClick = (index) => {
    setActiveCard(activeCard === index ? null : index);
  };

  return (
    <div className="service-page">
      <Header />
      
      {/* Hero Section with Background */}
      <div 
        className="service-hero"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="hero-overlay">
          <div className={`hero-content ${isVisible ? 'fade-in' : ''}`}>
            <h1 className="service-title">{title}</h1>
            <p className="service-description">{description}</p>
            <div className="hero-buttons">
              <a href="#contact" className="btn btn-primary">Book Consultation</a>
              <a href="#services" className="btn btn-outline">Learn More</a>
            </div>
            <div className="scroll-indicator" onClick={() => document.getElementById('services').scrollIntoView({behavior: 'smooth'})}>
              <i className="fas fa-chevron-down"></i>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      {stats && (
        <div className="stats-section">
          <div className="container">
            <div className="stats-grid">
              {(animatedStats.length > 0 ? animatedStats : stats).map((stat, index) => (
                <div key={index} className="stat-card interactive-hover">
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Service Details Section */}
      <div className="service-content" id="services">
        <div className="container">
          <div className="content-section">
            <h2>Our Services</h2>
            <p>{serviceDetails}</p>
          </div>

          {/* Features Section */}
          {features && (
            <div className="features-section">
              <h2>Why Choose Our Service</h2>
              <div className="features-grid">
                {features.map((feature, index) => (
                  <div key={index} className="feature-card interactive-hover">
                    <div className="feature-icon">
                      <i className={feature.icon}></i>
                    </div>
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Diseases Section */}
          <div className="diseases-section">
            <h2>Conditions We Treat</h2>
            <div className="diseases-grid">
              {diseases.map((disease, index) => (
                <div 
                  key={index} 
                  className={`disease-card ${activeCard === index ? 'active' : ''} interactive-hover`}
                  onMouseEnter={() => setActiveCard(index)}
                  onMouseLeave={() => setActiveCard(null)}
                  onClick={() => handleCardClick(index)}
                >
                  <div className="disease-icon">
                    <i className={disease.icon || 'fas fa-heartbeat'}></i>
                  </div>
                  <h3>{disease.name}</h3>
                  <p>{disease.description}</p>
                  {disease.symptoms && (
                    <div className="symptoms">
                      <h4>Common Symptoms:</h4>
                      <ul>
                        {disease.symptoms.map((symptom, idx) => (
                          <li key={idx}>{symptom}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-section" id="contact">
            <h2>Schedule Your Consultation</h2>
            <div className="form-container">
              <div className="form-info">
                <h3>Get Expert Care Today</h3>
                <div className="info-items">
                  <div className="info-item">
                    <i className="fas fa-phone"></i>
                    <span>24/7 Emergency Support</span>
                  </div>
                  <div className="info-item">
                    <i className="fas fa-home"></i>
                    <span>Home Visit Available</span>
                  </div>
                  <div className="info-item">
                    <i className="fas fa-user-md"></i>
                    <span>Expert Medical Team</span>
                  </div>
                </div>
              </div>
              
              <form onSubmit={handleSubmit} className="service-contact-form">
                <div className="form-group">
                  <label htmlFor="username">Full Name *</label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="address">Address *</label>
                  <textarea
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    rows="3"
                    placeholder="Enter your complete address"
                    required
                  ></textarea>
                </div>

                <div className="form-group">
                  <label htmlFor="selectedDisease">Select Condition *</label>
                  <select
                    id="selectedDisease"
                    name="selectedDisease"
                    value={formData.selectedDisease}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Choose a condition...</option>
                    {diseases.map((disease, index) => (
                      <option key={index} value={disease.name}>
                        {disease.name}
                      </option>
                    ))}
                  </select>
                </div>

                <button type="submit" className="submit-btn">
                  <i className="fas fa-calendar-check"></i>
                  Schedule Consultation
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating Action Button */}
      <div className="floating-actions">
        <a href="#contact" className="fab-button" title="Quick Contact">
          <i className="fas fa-phone"></i>
        </a>
        <a href="tel:+1234567890" className="fab-button emergency" title="Emergency Call">
          <i className="fas fa-ambulance"></i>
        </a>
      </div>
    </div>
  );
};

export default ServicePage;