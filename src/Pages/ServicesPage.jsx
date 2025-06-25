import React from "react";
import ServicesHero from "../Services/ServicesHero";
import ServicesDetailSection from "../Services/ServicesDetailSection";
import ServicesSection from "../Services/ServicesSection"; 

const ServicesPage = () => {
  return (
    <div className="w-full min-h-screen bg-[var(--nmj-morning)]">
      <ServicesHero />
      <ServicesDetailSection />
      <ServicesSection />
    </div>
  );
};
export default ServicesPage;
