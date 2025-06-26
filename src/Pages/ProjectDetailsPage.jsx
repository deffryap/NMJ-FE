// src/Pages/ProjectDetailsPage.jsx

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProjectById } from '../api/projectsApi';

// Impor komponen Hero dan Content dari folder Projects/Details
import ProjectDetailHero from '../Projects/Details/ProjectDetailHero';
import ProjectDetailContent from '../Projects/Details/ProjectDetailContent';

const ProjectDetailsPage = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    getProjectById(id)
      .then((res) => {
        setProject(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError('Proyek tidak ditemukan.');
        setLoading(false);
      });
    window.scrollTo(0, 0);
  }, [id]);

  if (loading) {
    return <div className="text-center py-20">Memuat detail proyek...</div>;
  }
  if (error || !project) {
    return (
      <div className="text-center py-20">
        <h1 className="text-2xl font-bold">{error || 'Proyek tidak ditemukan.'}</h1>
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