import React, { useState } from "react";

const awardsData = [
  { year: "2019", title: "Sustainability Excellence Award", color: "white" },
  { year: "2020", title: "Environmental Leadership Award", color: "red" },
  { year: "2021", title: "Energy Company of the Year Award", color: "white" },
  { year: "2022", title: "Innovation in Oil and Gas Award", color: "white" },
  { year: "2023", title: "Best Safety Performance", color: "red" },
  { year: "2024", title: "Top Infrastructure Award", color: "white" },
  { year: "2025", title: "Green Construction Award", color: "white" },
  { year: "2026", title: "Community Impact Award", color: "red" },
];

const AboutAwards = () => {
  const [awardsIndex, setAwardsIndex] = useState(0);
  const awardsVisible = 4;
  const handleAwardsPrev = () => {
    if (awardsIndex === 0) setAwardsIndex(awardsData.length - awardsVisible);
    else setAwardsIndex((prev) => Math.max(prev - 1, 0));
  };
  const handleAwardsNext = () => {
    if (awardsIndex >= awardsData.length - awardsVisible) setAwardsIndex(0);
    else
      setAwardsIndex((prev) =>
        Math.min(prev + 1, awardsData.length - awardsVisible)
      );
  };
  return (
    <section className="w-full bg-[var(--nmj-college)] py-14 px-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        <div
          className="mb-4 text-xs tracking-widest font-bold text-[var(--nmj-red)] uppercase"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Awards
        </div>
        <h2
          className="text-3xl md:text-4xl font-medium text-white mb-10"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Our Work Achievements
        </h2>
        <div className="relative flex flex-col items-center justify-center">
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 overflow-hidden">
            {awardsData
              .slice(awardsIndex, awardsIndex + awardsVisible)
              .map((award, idx) => (
                <div
                  key={award.year + idx}
                  className={`relative ${
                    award.color === "red"
                      ? "bg-[var(--nmj-red)] text-white border border-[var(--nmj-red)] scale-105 z-10"
                      : "bg-[var(--nmj-morning)] text-[var(--nmj-college)] border border-[var(--nmj-morning)]"
                  } p-8 flex flex-col items-start min-h-[160px] shadow transition-transform hover:scale-105 hover:shadow-xl cursor-pointer`}
                  data-aos="slide-up"
                  data-aos-delay={200 + idx * 100}
                  data-aos-once="true"
                >
                  <span
                    className={`text-xs mb-1 font-bold uppercase ${
                      award.color === "red"
                        ? "text-[var(--nmj-morning)]"
                        : "text-[var(--nmj-red)]"
                    }`}
                  >
                    {award.year}
                  </span>
                  <span className="font-medium text-lg">{award.title}</span>
                </div>
              ))}
          </div>
          <div className="flex gap-4 mt-8">
            <button
              onClick={handleAwardsPrev}
              className="w-12 h-12 bg-[var(--nmj-red)] text-white text-2xl shadow flex items-center justify-center select-none hover:bg-[var(--nmj-morning)] hover:text-[var(--nmj-college)] transition"
            >
              &#60;
            </button>
            <button
              onClick={handleAwardsNext}
              className="w-12 h-12 bg-[var(--nmj-red)] text-white text-2xl shadow flex items-center justify-center select-none hover:bg-[var(--nmj-morning)] hover:text-[var(--nmj-college)] transition"
            >
              &#62;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutAwards;
