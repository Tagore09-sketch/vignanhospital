import React from 'react';
import ServicePage from './ServicePage';

const ChronicDiseaseService = () => {
  const serviceData = {
    title: "Chronic Disease Management",
    backgroundImage: "/chronic disease.png",
    description: "Comprehensive care and management for chronic conditions with personalized treatment plans and continuous monitoring.",
    serviceDetails: "Our chronic disease management program provides comprehensive care for patients with long-term health conditions. We focus on preventing complications, managing symptoms, and improving quality of life through personalized treatment plans, regular monitoring, patient education, and lifestyle counseling.",
    
    diseases: [
      {
        name: "Diabetes Management",
        icon: "fas fa-tint",
        description: "Complete diabetes care including blood sugar monitoring, medication management, and lifestyle counseling.",
        symptoms: ["Frequent urination", "Excessive thirst", "Unexplained weight loss", "Fatigue", "Blurred vision"]
      },
      {
        name: "Hypertension Control",
        icon: "fas fa-heartbeat",
        description: "Blood pressure monitoring and management with medication optimization and lifestyle modifications.",
        symptoms: ["Headaches", "Shortness of breath", "Chest pain", "Dizziness", "Nosebleeds"]
      },
      {
        name: "Heart Disease Care",
        icon: "fas fa-heart",
        description: "Comprehensive cardiac care including monitoring, medication management, and lifestyle guidance.",
        symptoms: ["Chest pain", "Shortness of breath", "Fatigue", "Swelling in legs", "Irregular heartbeat"]
      },
      {
        name: "Arthritis Management",
        icon: "fas fa-bone",
        description: "Pain management and mobility support for various forms of arthritis with physical therapy.",
        symptoms: ["Joint pain", "Stiffness", "Swelling", "Reduced range of motion", "Fatigue"]
      },
      {
        name: "COPD Treatment",
        icon: "fas fa-lungs",
        description: "Respiratory care and management for chronic obstructive pulmonary disease patients.",
        symptoms: ["Chronic cough", "Shortness of breath", "Wheezing", "Chest tightness", "Frequent infections"]
      },
      {
        name: "Kidney Disease Support",
        icon: "fas fa-kidneys",
        description: "Monitoring and management of chronic kidney disease with dietary and medication guidance.",
        symptoms: ["Fatigue", "Swelling", "Changes in urination", "Nausea", "Loss of appetite"]
      }
    ]
  };

  return <ServicePage {...serviceData} />;
};

export default ChronicDiseaseService;