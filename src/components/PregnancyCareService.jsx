import React from 'react';
import ServicePage from './ServicePage';

const PregnancyCareService = () => {
  const serviceData = {
    title: "Pregnancy Care Services",
    backgroundImage: "/image1.jpg",
    description: "Comprehensive prenatal and postnatal care services ensuring the health and well-being of mother and baby.",
    serviceDetails: "Our pregnancy care services provide comprehensive support throughout your pregnancy journey, from preconception counseling to postnatal care. We offer regular monitoring, health assessments, nutritional guidance, and emotional support to ensure the best outcomes for both mother and baby.",
   
    diseases: [
      {
        name: "Gestational Diabetes",
        icon: "fas fa-tint",
        description: "Monitoring and management of diabetes that develops during pregnancy.",
        symptoms: ["Excessive thirst", "Frequent urination", "Fatigue", "Blurred vision", "High blood sugar"]
      },
      {
        name: "Pregnancy Hypertension",
        icon: "fas fa-heartbeat",
        description: "Management of high blood pressure during pregnancy including preeclampsia prevention.",
        symptoms: ["High blood pressure", "Protein in urine", "Swelling", "Headaches", "Vision changes"]
      },
      {
        name: "Morning Sickness",
        icon: "fas fa-dizzy",
        description: "Treatment and management of nausea and vomiting during pregnancy.",
        symptoms: ["Nausea", "Vomiting", "Food aversions", "Dehydration", "Weight loss"]
      },
      {
        name: "Anemia in Pregnancy",
        icon: "fas fa-tired",
        description: "Diagnosis and treatment of iron deficiency and other types of anemia during pregnancy.",
        symptoms: ["Fatigue", "Weakness", "Pale skin", "Shortness of breath", "Cold hands and feet"]
      },
      {
        name: "Pregnancy Complications",
        icon: "fas fa-exclamation-triangle",
        description: "Management of various pregnancy complications including placental issues and preterm labor.",
        symptoms: ["Bleeding", "Severe cramping", "Reduced fetal movement", "Severe headaches", "Persistent vomiting"]
      },
      {
        name: "Postpartum Depression",
        icon: "fas fa-sad-tear",
        description: "Support and treatment for postpartum depression and mood disorders after childbirth.",
        symptoms: ["Persistent sadness", "Anxiety", "Difficulty bonding", "Sleep disturbances", "Loss of appetite"]
      }
    ]
  };

  return <ServicePage {...serviceData} />;
};

export default PregnancyCareService;