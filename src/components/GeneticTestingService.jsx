import React from 'react';
import ServicePage from './ServicePage';

const GeneticTestingService = () => {
  const serviceData = {
    title: "Genetic Testing Services",
    backgroundImage: "/ecg.jpeg",
    description: "Advanced genetic testing and counseling services to understand your genetic health risks and make informed decisions.",
    serviceDetails: "Our genetic testing services provide comprehensive genetic analysis to identify potential health risks, hereditary conditions, and personalized treatment options. We offer pre-test counseling, accurate testing, and post-test support to help you understand your genetic profile and make informed healthcare decisions.",
   
    diseases: [
      {
        name: "Hereditary Cancer Risk",
        icon: "fas fa-ribbon",
        description: "Testing for genetic mutations that increase cancer risk, including BRCA1/BRCA2 for breast and ovarian cancer.",
        symptoms: ["Family history of cancer", "Early onset cancer", "Multiple cancer types", "Unusual cancer patterns"]
      },
      {
        name: "Cardiovascular Genetic Disorders",
        icon: "fas fa-heart",
        description: "Genetic testing for inherited heart conditions and cardiovascular disease risk factors.",
        symptoms: ["Family history of heart disease", "Sudden cardiac death", "Cardiomyopathy", "Arrhythmias"]
      },
      {
        name: "Neurological Genetic Conditions",
        icon: "fas fa-brain",
        description: "Testing for genetic neurological disorders including Huntington's, ALS, and Alzheimer's risk.",
        symptoms: ["Progressive neurological symptoms", "Family history", "Movement disorders", "Cognitive decline"]
      },
      {
        name: "Metabolic Genetic Disorders",
        icon: "fas fa-atom",
        description: "Genetic testing for inherited metabolic conditions and enzyme deficiencies.",
        symptoms: ["Metabolic abnormalities", "Growth delays", "Developmental issues", "Organ dysfunction"]
      },
      {
        name: "Pharmacogenomics",
        icon: "fas fa-pills",
        description: "Testing to determine how your genes affect your response to medications.",
        symptoms: ["Adverse drug reactions", "Treatment resistance", "Unusual medication responses"]
      },
      {
        name: "Carrier Screening",
        icon: "fas fa-baby",
        description: "Testing to identify carriers of genetic conditions for family planning purposes.",
        symptoms: ["Family planning concerns", "Ethnic predisposition", "Previous affected child"]
      }
    ]
  };

  return <ServicePage {...serviceData} />;
};

export default GeneticTestingService;