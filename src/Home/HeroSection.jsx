import React from "react";

const HeroSection = () => {
  return (
    <section
      className="relative flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 lg:px-0 pt-8 sm:pt-12 pb-6 sm:pb-8 bg-[var(--nmj-college)] overflow-hidden min-h-[500px] sm:min-h-[600px] lg:min-h-[700px]"
      style={{
        backgroundImage: "url('/gambar.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      data-aos="fade-up"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-0" />
      {/* Left Gradient Overlay */}
      <div
        className="absolute inset-y-0 left-0 w-full lg:w-2/3 z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0))",
        }}
      />
      <div className="flex-1 z-20 pl-4 sm:pl-8 lg:pl-20 py-6 sm:py-8 flex flex-col items-start text-left">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 sm:mb-6 drop-shadow-lg text-left">
          Penghubung Menuju <br /> Keunggulan Konstruksi
        </h1>
        <p className="text-base sm:text-lg text-white mb-6 sm:mb-8 max-w-lg drop-shadow-lg text-left">
          Kami adalah penghubung utama menuju keunggulan di sektor konstruksi,
          mendorong kemajuan dan membangun infrastruktur berkelanjutan untuk
          masa depan.
        </p>
        <button className="bg-[var(--nmj-red)] text-white px-4 sm:px-6 py-2 sm:py-3 rounded font-semibold mb-6 sm:mb-8 shadow hover:bg-[var(--nmj-red)] transition self-start text-sm sm:text-base">
          Jelajahi Lebih Lanjut
        </button>
        {/* Slider Bullets */}
        <div className="flex items-center gap-3 sm:gap-4 mt-4">
          <span className="w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center border border-gray-200 rounded-full text-white text-xs sm:text-sm bg-black/20">
            01
          </span>
          <span className="w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center border-2 border-white rounded-full text-white text-xs sm:text-sm font-bold bg-black/40">
            02
          </span>
          <span className="w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center border border-gray-200 rounded-full text-white text-xs sm:text-sm bg-black/20">
            03
          </span>
        </div>
      </div>
      {/* Right: Kosong, hanya untuk layout */}
      <div className="flex-1 hidden lg:block" />
    </section>
  );
};

export default HeroSection;
