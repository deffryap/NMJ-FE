import React from "react";
import ProjectsHero from "../Projects/ProjectsHero";
import ProjectsSection from "../Projects/ProjectsSection";
import ProjectsNewsletterSection from "../Projects/ProjectsNewsletterSection";

const ProjectsPage = () => {
  return (
    <div className="w-full min-h-screen bg-[var(--nmj-morning)]">
      <ProjectsHero />
      <ProjectsSection />
      <ProjectsNewsletterSection />
    </div>
  );
};

export default ProjectsPage;
