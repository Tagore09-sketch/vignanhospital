import React from 'react';
import ServicePage from './ServicePage';

const WellnessService = () => {
  const serviceData = {
    title: "Wellness Services",
    backgroundImage: "/image1.jpg",
    description: "Comprehensive wellness programs focused on preventive care, health optimization, and lifestyle improvement.",
    serviceDetails: "Our wellness services are designed to help you achieve and maintain optimal health through preventive care, lifestyle modifications, and holistic health approaches. We focus on early detection, health promotion, and empowering individuals to take control of their health and well-being.",
    
    diseases: [
      {
        name: "Obesity Management",
        icon: "fas fa-weight",
        description: "Comprehensive weight management programs including diet, exercise, and behavioral counseling.",
        symptoms: ["Excess weight", "Difficulty losing weight", "Health complications", "Low energy", "Joint pain"]
      },
      {
        name: "Stress & Anxiety",
        icon: "fas fa-brain",
        description: "Stress management techniques and anxiety reduction programs for better mental health.",
        symptoms: ["Chronic stress", "Anxiety attacks", "Sleep problems", "Irritability", "Physical tension"]
      },
      {
        name: "Metabolic Syndrome",
        icon: "fas fa-heartbeat",
        description: "Prevention and management of metabolic syndrome through lifestyle modifications.",
        symptoms: ["High blood pressure", "High blood sugar", "Excess abdominal fat", "Abnormal cholesterol"]
      },
      {
        name: "Sleep Disorders",
        icon: "fas fa-bed",
        description: "Assessment and treatment of sleep-related issues for better rest and recovery.",
        symptoms: ["Insomnia", "Sleep apnea", "Restless sleep", "Daytime fatigue", "Snoring"]
      },
      {
        name: "Nutritional Deficiencies",
        icon: "fas fa-apple-alt",
        description: "Identification and correction of nutritional deficiencies through diet and supplementation.",
        symptoms: ["Fatigue", "Weak immunity", "Poor concentration", "Hair loss", "Skin problems"]
      },
      {
        name: "Lifestyle-Related Conditions",
        icon: "fas fa-running",
        description: "Prevention and management of conditions related to sedentary lifestyle and poor habits.",
        symptoms: ["Low energy", "Poor fitness", "Frequent illness", "Mood swings", "Digestive issues"]
      }
    ]
  };

  return <ServicePage {...serviceData} />;
};

export default WellnessService;