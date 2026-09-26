import React from 'react';
import ServicePage from './ServicePage';

const ElderlyService = () => {
  const serviceData = {
    title: "Elderly Care Services",
    backgroundImage: "/Wheelchair.jpg",
    description: "Comprehensive and compassionate care services designed specifically for elderly patients and their unique needs.",
    serviceDetails: "Our elderly care services provide comprehensive support for seniors, focusing on maintaining independence, dignity, and quality of life. We offer personalized care plans that address the unique physical, emotional, and social needs of each elderly patient, including medical care, assistance with daily activities, and emotional support.",
    
    diseases: [
      {
        name: "Dementia & Alzheimer's",
        icon: "fas fa-brain",
        description: "Specialized care and support for patients with memory-related conditions and their families.",
        symptoms: ["Memory loss", "Confusion", "Disorientation", "Behavioral changes", "Communication difficulties"]
      },
      {
        name: "Osteoporosis",
        icon: "fas fa-bone",
        description: "Bone health management and fall prevention strategies for elderly patients.",
        symptoms: ["Bone pain", "Fractures", "Loss of height", "Stooped posture", "Mobility issues"]
      },
      {
        name: "Depression in Elderly",
        icon: "fas fa-sad-cry",
        description: "Mental health support and counseling services tailored for senior patients.",
        symptoms: ["Persistent sadness", "Loss of interest", "Social withdrawal", "Sleep disturbances", "Appetite changes"]
      },
      {
        name: "Mobility Issues",
        icon: "fas fa-walking",
        description: "Physical therapy and mobility assistance to help maintain independence and prevent falls.",
        symptoms: ["Difficulty walking", "Balance problems", "Joint stiffness", "Muscle weakness", "Fear of falling"]
      },
      {
        name: "Medication Management",
        icon: "fas fa-pills",
        description: "Comprehensive medication review and management to prevent drug interactions and ensure compliance.",
        symptoms: ["Multiple medications", "Confusion about dosing", "Side effects", "Drug interactions", "Non-compliance"]
      },
      {
        name: "Chronic Pain",
        icon: "fas fa-hand-holding-heart",
        description: "Pain management strategies specifically designed for elderly patients with chronic conditions.",
        symptoms: ["Persistent pain", "Limited mobility", "Sleep disruption", "Mood changes", "Reduced quality of life"]
      }
    ]
  };

  return <ServicePage {...serviceData} />;
};

export default ElderlyService;