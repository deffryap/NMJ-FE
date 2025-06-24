import React from "react";
import {
  Building,
  HardHat,
  Landmark,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const ServicesSection = () => {
  return (
    <section
      className="w-full bg-[var(--nmj-college)] py-16 px-4 sm:px-8 flex flex-col items-center"
      data-aos="fade-left"
    >
      <div className="w-full max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-2">
          <div className="text-sm text-white font-semibold tracking-widest uppercase">
            LAYANAN
          </div>
          <div className="flex gap-2">
            <button className="w-8 h-8 flex items-center justify-center border border-gray-300 bg-white text-slate-800 hover:bg-gray-100 transition">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button className="w-8 h-8 flex items-center justify-center border border-gray-300 bg-white text-slate-800 hover:bg-gray-100 transition">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-10 leading-tight">
          Apa yang Kami Lakukan di Bidang Konstruksi
        </h2>
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 justify-center items-stretch">
          {/* Card 1 */}
          <div
            className="flex-1 bg-[var(--nmj-morning)] shadow-md p-8 flex flex-col justify-between h-full items-start relative border border-gray-100 min-h-[340px] md:min-h-[400px]"
            data-aos="fade-right"
            data-aos-delay="0"
          >
            {/* Dekorasi sudut kanan atas */}
            <div
              className="absolute top-0 right-0 w-8 h-3 bg-white"
              style={{ zIndex: 2 }}
            ></div>
            <div
              className="absolute top-3 right-0 w-4 h-4 bg-[var(--nmj-morning)]"
              style={{ zIndex: 2 }}
            ></div>
            <div>
              <div className="w-12 h-12 flex items-center justify-center mb-4">
                <Building className="w-12 h-12 text-[var(--nmj-red)]" />
              </div>
              <h3 className="text-xl font-extrabold text-[var(--nmj-red)] mb-2">
                Konstruksi Bangunan
              </h3>
              <p className="text-[var(--nmj-red)] text-sm mb-4 flex-1">
                Kami ahli dalam membangun gedung berkualitas tinggi untuk
                kebutuhan komersial, residensial, dan industri dengan fokus pada
                keamanan dan daya tahan.
              </p>
            </div>
            <button className="text-xs font-extrabold text-[var(--nmj-red)] border-b-2 border-[var(--nmj-red)] hover:text-white hover:border-white transition uppercase">
              Selengkapnya
            </button>
          </div>
          {/* Card 2 (highlighted) */}
          <div
            className="flex-1 bg-[var(--nmj-red)] shadow-md p-8 flex flex-col justify-between h-full items-start relative text-white border border-[var(--nmj-red)] min-h-[340px] md:min-h-[400px]"
            data-aos="fade-left"
            data-aos-delay="100"
          >
            {/* Dekorasi sudut kanan atas */}
            <div
              className="absolute top-0 right-0 w-8 h-3 bg-white"
              style={{ zIndex: 2 }}
            ></div>
            <div
              className="absolute top-3 right-0 w-4 h-4 bg-[var(--nmj-red)]"
              style={{ zIndex: 2 }}
            ></div>
            <div>
              <div className="w-12 h-12 flex items-center justify-center mb-4">
                <HardHat className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-xl font-extrabold text-white mb-2">
                Manajemen Proyek
              </h3>
              <p className="text-white text-sm mb-4 flex-1">
                Kami menyediakan layanan manajemen proyek profesional untuk
                memastikan setiap proyek konstruksi selesai tepat waktu, sesuai
                anggaran, dan standar tertinggi.
              </p>
            </div>
            <button className="text-xs font-extrabold text-white border-b-2 border-white hover:text-[var(--nmj-red)] hover:border-[var(--nmj-red)] transition uppercase">
              Selengkapnya
            </button>
          </div>
          {/* Card 3 */}
          <div
            className="flex-1 bg-[var(--nmj-morning)] shadow-md p-8 flex flex-col justify-between h-full items-start relative border border-gray-100 min-h-[340px] md:min-h-[400px]"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            {/* Dekorasi sudut kanan atas */}
            <div
              className="absolute top-0 right-0 w-8 h-3 bg-white"
              style={{ zIndex: 2 }}
            ></div>
            <div
              className="absolute top-3 right-0 w-4 h-4 bg-[var(--nmj-morning)]"
              style={{ zIndex: 2 }}
            ></div>
            <div>
              <div className="w-12 h-12 flex items-center justify-center mb-4">
                <Landmark className="w-12 h-12 text-[var(--nmj-red)]" />
              </div>
              <h3 className="text-xl font-extrabold text-[var(--nmj-red)] mb-2">
                Pengembangan Infrastruktur
              </h3>
              <p className="text-[var(--nmj-red)] text-sm mb-4 flex-1">
                Kami menawarkan solusi pengembangan infrastruktur menyeluruh,
                mulai dari jalan, jembatan, hingga utilitas, mendukung
                pertumbuhan berkelanjutan.
              </p>
            </div>
            <button className="text-xs font-extrabold text-[var(--nmj-red)] border-b-2 border-[var(--nmj-red)] hover:text-white hover:border-white transition uppercase">
              Selengkapnya
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
