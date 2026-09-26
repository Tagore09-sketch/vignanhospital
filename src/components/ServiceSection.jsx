import React, { useRef } from "react";
import "./ServiceSection.css";

const servicesData = [
  {
    title: "Chronic disease management",
    desc: "Long-term monitoring, medication support & lifestyle guidance",
    img: "/chronic disease.png",
  },
  {
    title: "Cardiovascular Care Plan",
    desc: "Heart health monitoring and cardiac rehabilitation",
    img: "/cardivour.png",
  },
  {
    title: "Diabetes Management",
    desc: "Glucose tracking, diet & insulin support",
    img: "https://images.pexels.com/photos/4167542/pexels-photo-4167542.jpeg",
  },
  {
    title: "Pain Management",
    desc: "Advanced pain relief & physical therapy",
    img: "https://images.pexels.com/photos/7659568/pexels-photo-7659568.jpeg",
  },
  {
    title: "Companionship Care",
    desc: "Emotional support & daily assistance",
    img: "https://images.pexels.com/photos/7659570/pexels-photo-7659570.jpeg",
  },
  {
    title: "Medicine Delivery",
    desc: "Fast & reliable doorstep delivery of prescriptions",
    img: "https://images.pexels.com/photos/7659572/pexels-photo-7659572.jpeg",
  },
  {
    title: "Rental Equipment",
    desc: "High-quality medical devices available for rent",
    img: "https://images.pexels.com/photos/7659575/pexels-photo-7659575.jpeg",
  },
  {
    title: "Blood Tests at Home",
    desc: "Home sample collection with fast lab reporting",
    img: "https://images.pexels.com/photos/7659580/pexels-photo-7659580.jpeg",
  },
  {
    title: "Post-Operative Care",
    desc: "Nursing, wound care & rehabilitation after surgery",
    img: "https://images.pexels.com/photos/7659582/pexels-photo-7659582.jpeg",
  },
  {
    title: "Doctors Home Visit",
    desc: "Physician consultation in the comfort of your home",
    img: "https://images.pexels.com/photos/4167541/pexels-photo-4167541.jpeg",
  },
];

const ServicesSection = () => {
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    carouselRef.current.scrollLeft -= 350;
  };

  const scrollRight = () => {
    carouselRef.current.scrollLeft += 350;
  };

  return (
    <section className="services-section">
      <div className="services-container">
        <h2 className="services-title">Services to the Community</h2>

        <p className="services-subtitle">
          At Vignan Hospital, we provide a wide range of home healthcare
          solutions tailored to meet your needs. Our goal is to provide
          personalized, compassionate, and efficient healthcare right at your
          doorstep.
        </p>

        <div className="carousel-wrapper">
          <button className="carousel-btn prev-btn" onClick={scrollLeft}>
            <i className="fa-solid fa-chevron-left"></i>
          </button>

          <div className="services-carousel" ref={carouselRef}>
            {servicesData.map((service, index) => (
              <div className="service-card" key={index}>
                <div className="card-image">
                  <img src={service.img} alt={service.title} loading="lazy" />
                  <div className="card-overlay-section">
                    <div className="card-caption">{service.title}</div>
                    <div className="card-desc-wrapper">
                      <p className="card-desc">{service.desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="carousel-btn next-btn" onClick={scrollRight}>
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
