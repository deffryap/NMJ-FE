import React from "react";
import { PlayCircle } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="w-full bg-[var(--nmj-college)] py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-6 lg:px-8 flex flex-col items-center">
      <div className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-16">
        {/* LEFT: Image */}
        <div className="flex-1 order-2 lg:order-1 relative">
          <div className="relative w-full max-w-md mx-auto lg:mx-0">
            <div className="w-full h-64 sm:h-80 md:h-96 bg-[var(--nmj-morning)] shadow-lg relative overflow-hidden">
              <img
                src="/gambar.png"
                alt="Construction Site"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-[var(--nmj-red)]"></div>
            <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-[var(--nmj-morning)]"></div>
          </div>
        </div>

        {/* About & Progress */}
        <div className="flex-1 pr-0 sm:pr-4 md:pr-8 lg:pr-12 xl:pr-16 flex flex-col justify-center order-1 lg:order-2">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4 leading-tight text-center lg:text-left">
            Lebih Dekat dengan PT NMJ Konstruksi
          </h2>
          <p className="text-white text-xs sm:text-sm md:text-base mb-4 sm:mb-6 md:mb-8 max-w-xl text-center lg:text-left">
            PT NAEK MAJU JAYA (NMJ) adalah perusahaan konstruksi terkemuka yang
            berkomitmen memberikan solusi bangunan inovatif dan pengembangan
            infrastruktur di seluruh Indonesia.
          </p>
          <div className="mb-4 sm:mb-6 md:mb-8 flex flex-col gap-3 sm:gap-4 md:gap-5">
            <div>
              <div className="flex justify-between items-center mb-1 text-xs sm:text-sm font-semibold text-white">
                <span>Kepuasan Klien</span>
                <span>95%</span>
              </div>
              <div className="w-full bg-white/20 rounded-full h-2">
                <div
                  className="bg-[var(--nmj-red)] h-2 rounded-full"
                  style={{ width: "95%" }}
                ></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center mb-1 text-xs sm:text-sm font-semibold text-white">
                <span>Penyelesaian Proyek</span>
                <span>85%</span>
              </div>
              <div className="w-full bg-white/20 rounded-full h-2">
                <div
                  className="bg-[var(--nmj-red)] h-2 rounded-full"
                  style={{ width: "85%" }}
                ></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center mb-1 text-xs sm:text-sm font-semibold text-white">
                <span>Standar Keamanan</span>
                <span>98%</span>
              </div>
              <div className="w-full bg-white/20 rounded-full h-2">
                <div
                  className="bg-[var(--nmj-red)] h-2 rounded-full"
                  style={{ width: "98%" }}
                ></div>
              </div>
            </div>
          </div>
          <button className="mt-2 text-white font-bold border-b-2 border-[var(--nmj-red)] hover:text-[var(--nmj-red)] transition w-max px-0 py-1 rounded-none shadow-none text-xs sm:text-sm md:text-base mx-auto lg:mx-0">
            TENTANG KAMI
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
