import React, { useState, useEffect } from "react";
import { getTeams } from "../api/teamsApi";

const AboutTeam = () => {
  const [teamData, setTeamData] = useState([]);
  const [teamIndex, setTeamIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const teamVisible = 3;

  useEffect(() => {
    setLoading(true);
    getTeams()
      .then((res) => {
        if (res.data.success) {
          // Filter only active team members from the data array
          const data = res.data.data.filter((member) => member.is_active);
          setTeamData(data);
        } else {
          setError("Gagal memuat data tim.");
        }
        setLoading(false);
      })
      .catch((err) => {
        setError("Gagal memuat data tim.");
        setLoading(false);
      });
  }, []);

  const handleTeamPrev = () => {
    if (teamIndex === 0) setTeamIndex(teamData.length - teamVisible);
    else setTeamIndex((prev) => Math.max(prev - 1, 0));
  };
  const handleTeamNext = () => {
    if (teamIndex >= teamData.length - teamVisible) setTeamIndex(0);
    else setTeamIndex((prev) => Math.min(prev + 1, teamData.length - teamVisible));
  };

  if (loading) {
    return <div className="text-center py-20">Memuat data tim...</div>;
  }
  if (error) {
    return <div className="text-center py-20 text-red-600">{error}</div>;
  }
  if (!teamData.length) {
    return <div className="text-center py-20">Tidak ada data tim yang aktif.</div>;
  }

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
                  key={member.id}
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
                    src={member.image_url || "/team1.png"}
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
                      {member.position}
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
