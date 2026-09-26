import React from "react";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import Products from "./components/Products";
import Careers from "./components/Careers";
import Contact from "./components/Contact";
import About from "./components/About.jsx";
import Rental from "./components/Rental.jsx";

// Import all service components
import ChronicDiseaseService from "./components/ChronicDiseaseService.jsx";
import CompanionshipService from "./components/CompanionshipService.jsx";
import DoctorsHomeService from "./components/DoctorsHomeService.jsx";
import ElderlyService from "./components/ElderlyService.jsx";
import GeneticTestingService from "./components/GeneticTestingService.jsx";
import PregnancyCareService from "./components/PregnancyCareService.jsx";
import WellnessService from "./components/WellnessService.jsx";
import LabTestService from "./components/LabTestService.jsx";
import PhysiotherapyService from "./components/PhysiotherapyService.jsx";
import NurseService from "./components/NurseService.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/Careers" element={<Careers />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
        <Route path="/Rental" element={<Rental />} />
        
        {/* Service Routes */}
        <Route path="/services/chronic" element={<ChronicDiseaseService />} />
        <Route path="/services/companionship" element={<CompanionshipService />} />
        <Route path="/services/doctors-home" element={<DoctorsHomeService />} />
        <Route path="/services/elderly" element={<ElderlyService />} />
        <Route path="/services/genetic" element={<GeneticTestingService />} />
        <Route path="/services/pregnancy" element={<PregnancyCareService />} />
        <Route path="/services/wellness" element={<WellnessService />} />
        <Route path="/services/lab" element={<LabTestService />} />
        <Route path="/services/physio" element={<PhysiotherapyService />} />
        <Route path="/services/nurse" element={<NurseService />} />
      </Routes>
    </>
  );
}

export default App;
