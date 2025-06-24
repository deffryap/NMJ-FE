import React from "react";
import { PlayCircle } from "lucide-react";

const AboutSection = () => {
  return (
    <section
      className="flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 lg:px-0 py-12 sm:py-16 gap-8 sm:gap-12 bg-[var(--nmj-college)]"
      data-aos="fade-right"
    >
      {/* Video */}
      <div className="flex-1 relative flex items-start justify-center pl-4 sm:pl-8 lg:pl-20 order-2 lg:order-1">
        <div className="relative w-full max-w-[520px] sm:max-w-[640px] lg:max-w-[900px] aspect-[16/9] shadow-lg bg-white">
          <img
            src="/gambar.png"
            alt="Company Video"
            className="w-full h-full object-cover"
            style={{ maxHeight: "480px" }}
          />
          <div
            className="absolute top-0 left-0 w-6 h-6 sm:w-8 sm:h-8 bg-white"
            style={{ zIndex: 2 }}
          ></div>
          <div
            className="absolute bottom-0 left-0 w-3 h-3 sm:w-4 sm:h-4 bg-[var(--nmj-red)]"
            style={{ zIndex: 2 }}
          ></div>
          <div
            className="absolute top-0 right-0 w-4 h-4 sm:w-6 sm:h-6 bg-white"
            style={{ zIndex: 2 }}
          ></div>
          {/* Play Button */}
          <button className="absolute bottom-0 left-0 flex items-center gap-2 sm:gap-3 bg-[var(--nmj-red)] text-white px-4 sm:px-7 py-3 sm:py-5 rounded-none rounded-tr-lg shadow-lg">
            <PlayCircle className="w-5 h-5 sm:w-7 sm:h-7" />
            <div className="flex flex-col items-start text-left">
              <span className="text-xs">Play</span>
              <span className="font-bold text-sm sm:text-base leading-tight">
                Company Video
              </span>
            </div>
          </button>
        </div>
      </div>
      {/* About & Progress */}
      <div className="flex-1 pr-4 sm:pr-8 lg:pr-20 flex flex-col justify-center order-1 lg:order-2">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight text-center lg:text-left">
          Lebih Dekat dengan PT NMJ Konstruksi
        </h2>
        <p className="text-white text-sm sm:text-base mb-6 sm:mb-8 max-w-xl text-center lg:text-left">
          PT NAEK MAJU JAYA (NMJ) adalah perusahaan konstruksi terkemuka yang
          berkomitmen memberikan solusi bangunan inovatif dan pengembangan
          infrastruktur di seluruh Indonesia.
        </p>
        <div className="mb-6 sm:mb-8 flex flex-col gap-4 sm:gap-5">
          <div>
            <div className="flex justify-between items-center mb-1 text-xs sm:text-sm font-semibold text-white">
              <span>Kepuasan Klien</span>
              <span>95%</span>
            </div>
            <div className="w-full h-1 bg-gray-200">
              <div
                className="bg-[var(--nmj-red)] h-1"
                style={{ width: "95%" }}
              ></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between items-center mb-1 text-xs sm:text-sm font-semibold text-white">
              <span>Penyelesaian Proyek</span>
              <span>85%</span>
            </div>
            <div className="w-full h-1 bg-gray-200">
              <div
                className="bg-[var(--nmj-red)] h-1"
                style={{ width: "85%" }}
              ></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between items-center mb-1 text-xs sm:text-sm font-semibold text-white">
              <span>Standar Keamanan</span>
              <span>98%</span>
            </div>
            <div className="w-full h-1 bg-gray-200">
              <div
                className="bg-[var(--nmj-red)] h-1"
                style={{ width: "98%" }}
              ></div>
            </div>
          </div>
        </div>
        <button className="mt-2 text-white font-bold border-b-2 border-[var(--nmj-red)] hover:text-[var(--nmj-red)] transition w-max px-0 py-1 rounded-none shadow-none text-sm sm:text-base mx-auto lg:mx-0">
          TENTANG KAMI
        </button>
      </div>
    </section>
  );
};

export default AboutSection;
