import React from 'react';
import ServicePage from './ServicePage';

const LabTestService = () => {
  const serviceData = {
    title: "Lab Test Packages",
    backgroundImage: "/Lab Technicians & Assistants.jpg",
    description: "Comprehensive laboratory testing services with accurate results and convenient home sample collection.",
    serviceDetails: "Our laboratory testing services offer a wide range of diagnostic tests with state-of-the-art equipment and experienced technicians. We provide convenient home sample collection, fast turnaround times, and accurate results to support your healthcare needs and enable early detection of health issues.",
   
    diseases: [
      {
        name: "Diabetes Screening",
        icon: "fas fa-tint",
        description: "Blood glucose tests, HbA1c, and comprehensive diabetes monitoring panels.",
        symptoms: ["Frequent urination", "Excessive thirst", "Unexplained weight loss", "Fatigue", "Blurred vision"]
      },
      {
        name: "Heart Health Assessment",
        icon: "fas fa-heart",
        description: "Lipid profile, cardiac enzymes, and cardiovascular risk assessment tests.",
        symptoms: ["Chest pain", "Shortness of breath", "High cholesterol", "Family history", "Hypertension"]
      },
      {
        name: "Liver Function Tests",
        icon: "fas fa-liver",
        description: "Comprehensive liver function panel to assess liver health and detect abnormalities.",
        symptoms: ["Abdominal pain", "Jaundice", "Fatigue", "Dark urine", "Loss of appetite"]
      },
      {
        name: "Kidney Function Tests",
        icon: "fas fa-kidneys",
        description: "Creatinine, BUN, and complete kidney function assessment panels.",
        symptoms: ["Swelling", "Changes in urination", "Fatigue", "High blood pressure", "Back pain"]
      },
      {
        name: "Thyroid Function Tests",
        icon: "fas fa-thyroid",
        description: "TSH, T3, T4, and comprehensive thyroid hormone level assessments.",
        symptoms: ["Weight changes", "Fatigue", "Hair loss", "Mood changes", "Temperature sensitivity"]
      },
      {
        name: "Complete Blood Count",
        icon: "fas fa-vial",
        description: "Comprehensive blood analysis including hemoglobin, white cells, and platelet counts.",
        symptoms: ["Fatigue", "Frequent infections", "Easy bruising", "Weakness", "Pale skin"]
      }
    ]
  };

  return <ServicePage {...serviceData} />;
};

export default LabTestService;