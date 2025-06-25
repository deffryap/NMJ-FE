// src/Pages/ProjectDetailsPage.jsx

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { projects } from '../Projects/data/projects';

// Impor komponen Hero dan Content dari folder Projects/Details
import ProjectDetailHero from '../Projects/Details/ProjectDetailHero';
import ProjectDetailContent from '../Projects/Details/ProjectDetailContent';

const ProjectDetailsPage = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    // Cari proyek yang cocok di dalam data
    const foundProject = projects.find(p => p.id === parseInt(id));
    setProject(foundProject);

    // Selalu scroll ke atas saat halaman dibuka
    window.scrollTo(0, 0);
  }, [id]);

  // Jika data belum ditemukan (atau id tidak valid)
  if (!project) {
    return (
      <div className="text-center py-20">
        <h1 className="text-2xl font-bold">Proyek tidak ditemukan.</h1>
      </div>
    );
  }

  // Jika proyek ditemukan, tampilkan Hero dan Content
  return (
    <div className="w-full min-h-screen bg-[var(--nmj-morning)]">
      <ProjectDetailHero project={project} />
      <ProjectDetailContent project={project} />
    </div>
  );
};

export default ProjectDetailsPage;