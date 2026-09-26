import React from 'react';
import ServicePage from './ServicePage';

const NurseService = () => {
  const serviceData = {
    title: "Nurse Services",
    backgroundImage: "/Nurse.jpg",
    description: "Professional nursing care services at home providing medical care, medication management, and patient support.",
    serviceDetails: "Our nursing services provide professional medical care in the comfort of your home. Our registered nurses and healthcare assistants offer a wide range of services including medication administration, wound care, vital sign monitoring, and patient education to ensure optimal health outcomes and recovery.",
    
    diseases: [
      {
        name: "Post-Operative Care",
        icon: "fas fa-band-aid",
        description: "Comprehensive nursing care following surgical procedures including wound care and monitoring.",
        symptoms: ["Surgical wounds", "Pain management", "Infection prevention", "Mobility assistance", "Recovery monitoring"]
      },
      {
        name: "Chronic Disease Management",
        icon: "fas fa-heartbeat",
        description: "Ongoing nursing support for patients with chronic conditions requiring regular monitoring.",
        symptoms: ["Complex medication needs", "Frequent monitoring", "Symptom management", "Complication prevention"]
      },
      {
        name: "Wound Care",
        icon: "fas fa-first-aid",
        description: "Professional wound assessment, cleaning, dressing, and monitoring for optimal healing.",
        symptoms: ["Open wounds", "Slow healing", "Infection signs", "Drainage", "Pain"]
      },
      {
        name: "IV Therapy",
        icon: "fas fa-syringe",
        description: "Intravenous medication administration and fluid therapy in the home setting.",
        symptoms: ["Dehydration", "Medication needs", "Nutritional support", "Infection treatment"]
      },
      {
        name: "Palliative Care",
        icon: "fas fa-heart",
        description: "Compassionate nursing care focused on comfort and quality of life for serious illnesses.",
        symptoms: ["Pain management", "Symptom control", "Emotional support", "Family guidance"]
      },
      {
        name: "Elderly Care Nursing",
        icon: "fas fa-user-clock",
        description: "Specialized nursing care for elderly patients with multiple health conditions and care needs.",
        symptoms: ["Multiple medications", "Mobility issues", "Cognitive changes", "Safety concerns", "Health monitoring"]
      }
    ]
  };

  return <ServicePage {...serviceData} />;
};

export default NurseService;