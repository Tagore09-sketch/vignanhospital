import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import AboutSection from "./AboutSection";
import ServicesSection from "./ServiceSection";
import SolutionSection from "./SolutionSection";
import Whychoose from "./Whychoose";
import Bike from "./Bike";
import Vignan from "./Vignan";
import Appointment from "./Appointment";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <AboutSection />
      <ServicesSection />
      <SolutionSection />
      <Whychoose />
      <Bike />
      <Vignan />
      <Appointment />
    </div>
  );
};

export default Home;
