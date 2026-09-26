import React from 'react';
import ServicePage from './ServicePage';

const PhysiotherapyService = () => {
  const serviceData = {
    title: "Physiotherapy at Home",
    backgroundImage: "/Physiotherapist.jpg",
    description: "Professional physiotherapy services delivered at your home for convenient rehabilitation and pain management.",
    serviceDetails: "Our home physiotherapy services bring expert rehabilitation care directly to your doorstep. Our licensed physiotherapists provide personalized treatment plans, exercise programs, and manual therapy techniques to help you recover from injuries, manage chronic conditions, and improve mobility in the comfort of your home.",
    
    diseases: [
      {
        name: "Post-Surgical Rehabilitation",
        icon: "fas fa-band-aid",
        description: "Comprehensive rehabilitation following orthopedic, cardiac, or other surgical procedures.",
        symptoms: ["Limited mobility", "Pain", "Muscle weakness", "Stiffness", "Reduced function"]
      },
      {
        name: "Stroke Recovery",
        icon: "fas fa-brain",
        description: "Specialized physiotherapy for stroke patients to regain movement, balance, and independence.",
        symptoms: ["Paralysis", "Weakness", "Balance problems", "Coordination issues", "Speech difficulties"]
      },
      {
        name: "Back & Neck Pain",
        icon: "fas fa-spine",
        description: "Treatment for chronic back pain, neck pain, and spinal conditions through targeted therapy.",
        symptoms: ["Chronic pain", "Stiffness", "Limited range of motion", "Muscle spasms", "Radiating pain"]
      },
      {
        name: "Sports Injuries",
        icon: "fas fa-running",
        description: "Rehabilitation and recovery programs for sports-related injuries and performance optimization.",
        symptoms: ["Acute injury", "Muscle strains", "Joint pain", "Reduced performance", "Swelling"]
      },
      {
        name: "Arthritis Management",
        icon: "fas fa-bone",
        description: "Pain management and mobility improvement for various types of arthritis conditions.",
        symptoms: ["Joint pain", "Stiffness", "Swelling", "Reduced mobility", "Morning stiffness"]
      },
      {
        name: "Neurological Conditions",
        icon: "fas fa-brain",
        description: "Physiotherapy for neurological conditions including Parkinson's, multiple sclerosis, and spinal cord injuries.",
        symptoms: ["Movement disorders", "Balance issues", "Muscle weakness", "Coordination problems", "Tremors"]
      }
    ]
  };

  return <ServicePage {...serviceData} />;
};

export default PhysiotherapyService;