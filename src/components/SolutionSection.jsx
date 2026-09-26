import React from "react";
import "./SolutionSection.css";

const solutionsData = [
  {
    title: "Seamless Follow-up Care",
    img: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=800",
  },
  {
    title: "Home-Based Healthcare Services",
    img: "https://images.unsplash.com/photo-1576092768241-dec231889d3c?w=800",
  },
  {
    title: "Medication & Physiotherapy",
    img: "https://images.unsplash.com/photo-1586776976030-838c2720a6b4?w=800",
  },
  {
    title: "ICU Setup at Home",
    img: "https://images.unsplash.com/photo-1603398938378-e54eab446dde?w=800",
  },
  {
    title: "Emergency Bike Assistance",
    img: "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?w=800",
  },
  {
    title: "Geriatric and Elderly Care",
    img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800",
  },
  {
    title: "Blood collection at Home",
    img: "https://images.unsplash.com/photo-1576092768241-dec231889d3c?w=800",
  },
  {
    title: "Hospital Collaboration & Tracking",
    img: "https://images.unsplash.com/photo-1586776976030-838c2720a6b4?w=800",
  },
  {
    title: "Transportation & Mobility Solutions",
    img: "https://images.unsplash.com/photo-1603398938378-e54eab446dde?w=800",
  },
  {
    title: "Mental Health Support",
    img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800",
  },
];

const SolutionsSection = () => {
  return (
    <section className="solutions-section">
      <div className="solutions-container">
        <h2 className="solutions-title">Solutions Offered By Vignan</h2>

        <p className="solutions-subtitle">
          Vignan bridges these gaps with home-based care, follow-up
          coordination, and medication management. With professionals within a
          30 kilometre radius, hospital collaboration, and bike ambulances for
          emergency aid, we deliver timely, affordable, and compassionate
          healthcare right at your doorstep.
        </p>

        <div className="solutions-grid">
          {solutionsData.map((solution, index) => (
            <div className="solution-card" key={index}>
              <div
                className="card-bg"
                style={{ backgroundImage: `url(${solution.img})` }}
              ></div>
              <div className="card-overlay"></div>
              <h3>{solution.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
