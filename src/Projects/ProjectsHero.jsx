import React from "react";
import { Link } from "react-router-dom";

const ProjectsHero = () => (
  <section
    className="relative w-full min-h-[220px] md:min-h-[320px] flex flex-col justify-center overflow-hidden"
    style={{
      backgroundImage: "url('/gambar.png')", // Ganti dengan gambar hero proyek yang sesuai
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <div className="absolute inset-0 bg-[var(--nmj-college)]/90 z-0" />
    <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 h-full md:grid md:grid-cols-2 md:items-center md:gap-0">
      <div className="flex flex-col justify-center md:min-h-[320px] md:pt-10">
        <div
          className="text-white/80 text-xs mb-2 flex gap-2 items-center"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <Link to="/" className="hover:text-white">Home</Link>
          <span className="text-white">/</span>
          <span className="text-white">Proyek</span>
        </div>
        <h1
          className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg text-left"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Proyek Kami
        </h1>
      </div>
      <div className="hidden md:block" />
    </div>
    {/* Dekorasi kotak sudut */}
    <div className="absolute top-0 left-0 w-4 h-4 bg-white z-20" />
    <div className="absolute top-0 right-0 w-4 h-4 bg-[var(--nmj-red)] z-20" />
    <div className="absolute bottom-0 right-0 w-4 h-4 bg-white z-20" />
  </section>
);

export default ProjectsHero;
