import React from "react";
import AboutHero from "../About/AboutHero";
import AboutMainContent from "../About/AboutMainContent";
import AboutTentangSection from "../About/AboutTentangSection";
import AboutTimeline from "../About/AboutTimeline";
import AboutTeam from "../About/AboutTeam";
import AboutAwards from "../About/AboutAwards";

const AboutPage = () => {
  return (
    <div className="w-full min-h-screen bg-[var(--nmj-morning)]">
      <AboutHero />
      <AboutMainContent />
      <AboutTentangSection />
      <AboutTimeline />
      <AboutTeam />
      <AboutAwards />
    </div>
  );
};

export default AboutPage;
