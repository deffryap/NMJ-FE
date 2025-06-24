import React from "react";
import HeroSection from "../Home/HeroSection";
import InfoCard from "../Home/InfoCard";
import AboutSection from "../Home/AboutSection";
import ValuesSection from "../Home/ValuesSection";
import ServicesSection from "../Home/ServicesSection";
import TestimonialSection from "../Home/TestimonialSection";
import FAQSection from "../Home/FAQSection";
import NewsletterSection from "../Home/NewsletterSection";

const HomePage = () => {
  return (
    <div className="min-h-screen w-full pt-20 overflow-x-hidden">
      <HeroSection />
      <InfoCard />
      <AboutSection />
      <ValuesSection />
      <ServicesSection />
      <TestimonialSection />
      <FAQSection />
      <NewsletterSection />
    </div>
  );
};

export default HomePage;
