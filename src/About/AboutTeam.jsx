import React, { useState } from "react";

const teamData = [
  {
    name: "Robert Smith",
    role: "CEO & Founder",
    img: "/gambar.png",
    color: "white",
  },
  {
    name: "Emily Lawson",
    role: "Head of Finance",
    img: "/gambar2.webp",
    color: "red",
  },
  {
    name: "Bob Martinez",
    role: "Head of Operations",
    img: "/gambar3.webp",
    color: "white",
  },
  {
    name: "Sarah Lee",
    role: "Project Manager",
    img: "/gambar2.webp",
    color: "white",
  },
  { name: "John Doe", role: "Lead Engineer", img: "/gambar.png", color: "red" },
  { name: "Anna Kim", role: "Architect", img: "/gambar3.webp", color: "white" },
  {
    name: "Michael Tan",
    role: "Site Supervisor",
    img: "/gambar2.webp",
    color: "white",
  },
  { name: "Lisa Wong", role: "Procurement", img: "/gambar.png", color: "red" },
];

const AboutTeam = () => {
  const [teamIndex, setTeamIndex] = useState(0);
  const teamVisible = 3;
  const handleTeamPrev = () => {
    if (teamIndex === 0) setTeamIndex(teamData.length - teamVisible);
    else setTeamIndex((prev) => Math.max(prev - 1, 0));
  };
  const handleTeamNext = () => {
    if (teamIndex >= teamData.length - teamVisible) setTeamIndex(0);
    else
      setTeamIndex((prev) => Math.min(prev + 1, teamData.length - teamVisible));
  };
  return (
    <section className="w-full bg-[var(--nmj-morning)] py-16 px-0 border-b border-[var(--nmj-college)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        <div
          className="mb-4 text-xs tracking-widest font-bold text-[var(--nmj-red)] uppercase"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Team
        </div>
        <h2
          className="text-3xl md:text-4xl font-medium text-[var(--nmj-college)] mb-10"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Our Experts & Leadership Team
        </h2>
        <div className="relative flex flex-col items-center justify-center">
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 overflow-hidden">
            {teamData
              .slice(teamIndex, teamIndex + teamVisible)
              .map((member, idx) => (
                <div
                  key={member.name + idx}
                  className={`relative ${
                    member.color === "red"
                      ? "bg-[var(--nmj-red)] text-white border border-[var(--nmj-red)]"
                      : "bg-[var(--nmj-morning)] text-[var(--nmj-college)] border border-[var(--nmj-college)]"
                  } shadow flex flex-col transition-transform hover:scale-105 hover:shadow-xl cursor-pointer`}
                  data-aos="slide-up"
                  data-aos-delay={200 + idx * 100}
                  data-aos-once="true"
                >
                  <img
                    src={member.img}
                    alt={member.name}
                    className={`w-full h-80 object-cover ${
                      member.color !== "red" ? "grayscale" : ""
                    }`}
                  />
                  <div className="p-6 flex flex-col gap-1">
                    <span className="font-medium text-lg">{member.name}</span>
                    <span
                      className={`text-xs font-semibold uppercase tracking-wider ${
                        member.color === "red"
                          ? "text-[var(--nmj-morning)]"
                          : "text-[var(--nmj-persian)]"
                      }`}
                    >
                      {member.role}
                    </span>
                  </div>
                </div>
              ))}
          </div>
          <div className="flex gap-4 mt-8">
            <button
              onClick={handleTeamPrev}
              className="w-12 h-12 bg-[var(--nmj-red)] text-white text-2xl shadow flex items-center justify-center select-none hover:bg-[var(--nmj-college)] transition"
            >
              &#60;
            </button>
            <button
              onClick={handleTeamNext}
              className="w-12 h-12 bg-[var(--nmj-red)] text-white text-2xl shadow flex items-center justify-center select-none hover:bg-[var(--nmj-college)] transition"
            >
              &#62;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTeam;
