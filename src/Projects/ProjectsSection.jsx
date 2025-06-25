// src/Projects/ProjectsSection.jsx

import React from "react";
import { Link } from "react-router-dom";
import { projects } from "./data/projects";

const ProjectsSection = () => {

  return (
    <section className="w-full bg-[var(--nmj-morning)] py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:px-10 flex flex-col items-center">
      <div className="w-full max-w-6xl mx-auto">
        <h2
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-8 sm:mb-10 md:mb-12 leading-tight text-center"
          data-aos="fade-up"
        >
          Proyek-Proyek Unggulan Kami
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          {projects.map((project, index) => (
            // 4. Bungkus seluruh kartu dengan Link
            <Link to={`/projects/${project.id}`} key={project.id}>
              <div
                className="relative bg-white shadow-lg overflow-hidden group h-full" // tambah h-full
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {/* Seluruh isi kartu Anda tetap di sini */}
                <div className="relative w-full h-64 sm:h-72 md:h-80 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {/* ... Overlay Stats ... */}
                  <div className="absolute bottom-0 left-0 bg-[var(--nmj-red)] text-white p-2 sm:p-3 shadow-lg z-20 transition-opacity duration-300 group-hover:opacity-0">
                    <div className="text-center">
                      <div className="text-base sm:text-lg font-extrabold mb-0.5 leading-tight">
                        {project.stats.split(',')[0]}
                      </div>
                      <div className="text-xs sm:text-sm font-light leading-tight">
                        {project.stats.split(',')[1]}
                      </div>
                    </div>
                  </div>
                  {/* ... Layer Overlay Detail ... */}
                  <div className="absolute inset-0 z-30">
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                    <div className="relative z-10 flex h-full flex-col justify-end p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold mb-1">{project.title}</h3>
                        <p className="text-sm sm:text-base">{project.location} | {project.year}</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* ... Decorative elements ... */}
                <div className="absolute top-2 right-2 w-4 h-4 sm:w-5 sm:h-5 bg-white z-40"></div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;