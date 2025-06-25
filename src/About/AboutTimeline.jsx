import React from "react";

const AboutTimeline = () => (
  <section className="w-full bg-[var(--nmj-college)] py-14 px-0 border-b border-[var(--nmj-morning)]">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
      <div className="mb-4 text-xs tracking-widest font-bold text-[var(--nmj-red)] uppercase">
        Timeline
      </div>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div
          className="relative bg-[var(--nmj-red)] text-white shadow px-8 py-10 flex flex-col items-start min-h-[160px] transition-transform hover:scale-105 hover:shadow-xl cursor-pointer"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="text-4xl font-extrabold mb-2">2020</div>
          <div className="text-base font-semibold mb-1">
            Foundation & Establishment
          </div>
        </div>
        <div
          className="relative bg-[var(--nmj-morning)] text-[var(--nmj-college)] shadow px-8 py-10 flex flex-col items-start min-h-[160px] border border-[var(--nmj-college)] transition-transform hover:scale-105 hover:shadow-xl cursor-pointer"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="text-4xl font-extrabold mb-2">2021</div>
          <div className="text-base font-semibold mb-1">
            First Major Construction Project
          </div>
        </div>
        <div
          className="relative bg-[var(--nmj-red)] text-white shadow px-8 py-10 flex flex-col items-start min-h-[160px] transition-transform hover:scale-105 hover:shadow-xl cursor-pointer"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div className="text-4xl font-extrabold mb-2">2022</div>
          <div className="text-base font-semibold mb-1">
            Industry Recognition
          </div>
        </div>
        <div
          className="relative bg-[var(--nmj-morning)] text-[var(--nmj-college)] shadow px-8 py-10 flex flex-col items-start min-h-[160px] border border-[var(--nmj-college)] transition-transform hover:scale-105 hover:shadow-xl cursor-pointer"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div className="text-4xl font-extrabold mb-2">2023</div>
          <div className="text-base font-semibold mb-1">
            Continued Growth & Innovation
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutTimeline;
