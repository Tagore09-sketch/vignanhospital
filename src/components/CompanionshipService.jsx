import React from 'react';
import ServicePage from './ServicePage';

const CompanionshipService = () => {
  const serviceData = {
    title: "Companionship Care",
    backgroundImage: "/image1.jpg",
    description: "Compassionate companionship services providing emotional support and social interaction for enhanced well-being.",
    serviceDetails: "Our companionship care services focus on providing emotional support, social interaction, and assistance with daily activities. We understand the importance of human connection in maintaining mental and emotional health, especially for elderly individuals or those recovering from illness.",
   
    diseases: [
      {
        name: "Depression & Anxiety",
        icon: "fas fa-brain",
        description: "Emotional support and companionship to help manage depression and anxiety symptoms.",
        symptoms: ["Persistent sadness", "Loss of interest", "Social withdrawal", "Anxiety attacks", "Sleep disturbances"]
      },
      {
        name: "Dementia Support",
        icon: "fas fa-user-friends",
        description: "Specialized companionship for individuals with dementia and memory-related conditions.",
        symptoms: ["Memory loss", "Confusion", "Disorientation", "Mood changes", "Communication difficulties"]
      },
      {
        name: "Post-Surgery Recovery",
        icon: "fas fa-band-aid",
        description: "Supportive care during recovery period to ensure comfort and proper healing.",
        symptoms: ["Limited mobility", "Pain management", "Medication compliance", "Emotional stress", "Isolation"]
      },
      {
        name: "Chronic Loneliness",
        icon: "fas fa-sad-tear",
        description: "Addressing social isolation and loneliness through meaningful companionship.",
        symptoms: ["Social withdrawal", "Lack of motivation", "Decreased appetite", "Sleep issues", "Cognitive decline"]
      },
      {
        name: "Grief & Loss Support",
        icon: "fas fa-dove",
        description: "Compassionate support during difficult times of loss and bereavement.",
        symptoms: ["Overwhelming sadness", "Anger", "Guilt", "Physical symptoms", "Social isolation"]
      },
      {
        name: "Mobility Limitations",
        icon: "fas fa-wheelchair",
        description: "Companionship and assistance for individuals with limited mobility or physical disabilities.",
        symptoms: ["Reduced independence", "Social isolation", "Depression", "Frustration", "Physical discomfort"]
      }
    ]
  };

  return <ServicePage {...serviceData} />;
};

export default CompanionshipService;