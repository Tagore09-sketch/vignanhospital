import React from 'react';
import ServicePage from './ServicePage';

const DoctorsHomeService = () => {
  const serviceData = {
    title: "Doctors Home Visit",
    backgroundImage: "/image1.jpg",
    description: "Professional medical consultations and treatments in the comfort of your home with qualified doctors.",
    serviceDetails: "Our doctors home visit service brings quality healthcare directly to your doorstep. Our qualified physicians provide comprehensive medical consultations, diagnoses, treatments, and follow-up care in the familiar and comfortable environment of your home.",
    
    diseases: [
      {
        name: "Acute Illness",
        icon: "fas fa-thermometer-half",
        description: "Treatment for sudden onset illnesses like fever, flu, infections, and other acute conditions.",
        symptoms: ["High fever", "Severe cough", "Body aches", "Nausea", "Headaches"]
      },
      {
        name: "Chronic Disease Follow-up",
        icon: "fas fa-calendar-check",
        description: "Regular monitoring and management of chronic conditions like diabetes, hypertension.",
        symptoms: ["Blood pressure fluctuations", "Blood sugar variations", "Medication side effects", "Symptom changes"]
      },
      {
        name: "Wound Care",
        icon: "fas fa-band-aid",
        description: "Professional wound cleaning, dressing, and monitoring for proper healing.",
        symptoms: ["Open wounds", "Surgical site care", "Infection signs", "Delayed healing", "Pain management"]
      },
      {
        name: "Elderly Health Issues",
        icon: "fas fa-user-clock",
        description: "Comprehensive care for age-related health problems and mobility issues.",
        symptoms: ["Joint pain", "Memory issues", "Balance problems", "Medication confusion", "General weakness"]
      },
      {
        name: "Post-Hospitalization Care",
        icon: "fas fa-hospital",
        description: "Follow-up care after hospital discharge to ensure proper recovery and prevent readmission.",
        symptoms: ["Recovery monitoring", "Medication adjustments", "Complication prevention", "Rehabilitation needs"]
      },
      {
        name: "Preventive Health Checkups",
        icon: "fas fa-shield-virus",
        description: "Regular health screenings and preventive care to maintain optimal health.",
        symptoms: ["Routine monitoring", "Health assessments", "Risk factor evaluation", "Vaccination needs"]
      }
    ]
  };

  return <ServicePage {...serviceData} />;
};

export default DoctorsHomeService;