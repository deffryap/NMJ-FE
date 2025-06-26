import React from "react";

const progressData = [
  { label: "Kepuasan Klien", value: 90 },
  { label: "Penyelesaian Proyek", value: 65 },
  { label: "Emisi Karbon Industri", value: 25 },
];

const AboutMainContent = () => (
  <section className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 py-10 md:py-16 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center relative bg-white">
    {/* Gambar & Tombol Video */}
    <div
      className="relative flex flex-col items-start"
      data-aos="fade-right"
      data-aos-delay="100"
    >
      <div className="relative w-full max-w-md mx-auto md:mx-0">
        <img
          src="/gambar.png"
          alt="Tentang NMJ"
          className="w-full h-64 md:h-80 object-cover"
        />
        {/* Dekorasi kotak sudut */}
        <div className="absolute top-0 left-0 w-4 h-4 bg-white" />
        <div className="absolute top-0 right-0 w-3 h-3 bg-[var(--nmj-red)]" />
        <div className="absolute bottom-0 left-0 w-3 h-3 bg-[var(--nmj-red)]" />
      </div>
      <button
        className="mt-4 flex items-center gap-2 bg-[var(--nmj-red)] text-white px-5 py-3 text-sm font-semibold shadow hover:bg-red-700 transition"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <svg
          width="18"
          height="18"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="9" cy="9" r="8" stroke="currentColor" strokeWidth="2" />
          <polygon points="7,6 13,9 7,12" fill="white" />
        </svg>
        <span>Putar Video Perusahaan</span>
      </button>
    </div>
    {/* Konten Kanan */}
    <div
      className="flex flex-col gap-4 md:gap-6"
      data-aos="fade-left"
      data-aos-delay="200"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-[var(--nmj-college)] mb-2">
        Lebih Dekat dengan PT NMJ
      </h2>
      <p className="text-[var(--nmj-college)]/90 text-sm md:text-base mb-4 max-w-xl">
        PT Naek Maju Jaya (NMJ) adalah perusahaan konstruksi terkemuka yang
        berkomitmen memberikan solusi inovatif dan pengembangan infrastruktur di
        seluruh Indonesia.
      </p>
      <div className="flex flex-col gap-3 mt-2">
        {progressData.map((item) => (
          <div key={item.label}>
            <div className="flex justify-between items-center text-xs md:text-sm font-semibold text-[var(--nmj-college)] mb-1">
              <span>{item.label}</span>
              <span>{item.value}%</span>
            </div>
            <div className="w-full bg-gray-300 rounded-full h-2">
              <div
                className="bg-[var(--nmj-red)] h-2 rounded-full"
                style={{ width: `${item.value}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
      <button className="mt-4 text-[var(--nmj-college)] font-bold border-b-2 border-[var(--nmj-red)] hover:text-[var(--nmj-red)] transition w-max px-0 py-1 rounded-none shadow-none text-sm md:text-base">
        SELENGKAPNYA TENTANG KAMI
      </button>
    </div>
    {/* Dekorasi kotak sudut */}
    <div className="absolute bottom-0 left-0 w-4 h-4 bg-[var(--nmj-red)]" />
  </section>
);

export default AboutMainContent;
