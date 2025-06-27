import React from "react";
import { PlayCircle, ArrowDown } from "lucide-react";

const ServicesDetailSection = () => {

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services-section');
    if (servicesSection) {
      servicesSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="w-full bg-[var(--nmj-college)] py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-16">
        {/* KIRI: Komposisi Gambar yang Lebih Dinamis */}
        <div className="relative flex items-center justify-center" data-aos="fade-right">
          <div className="relative w-full max-w-sm h-80 sm:h-96 md:h-[450px]">
            {/* Latar belakang sebagai elemen dekoratif */}
            <div className="absolute top-0 left-0 w-full h-full bg-[var(--nmj-red)] shadow-2xl origin-bottom-left" />
            {/* Gambar utama dengan efek overlay */}
            <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 w-full h-full overflow-hidden shadow-2xl">
              <img
                src="/gambar.png"
                alt="Layanan Konstruksi Unggulan"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20" />
            </div>
            {/* Tombol Play Video (Contoh interaktif) */}
            <button
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/80 hover:text-white hover:scale-110 transition-all duration-300 group"
              aria-label="Tonton Video"
            >
              <PlayCircle className="w-20 h-20 drop-shadow-lg" strokeWidth={1} />
            </button>
          </div>
        </div>
        {/* KANAN: Detail Layanan dengan Desain Baru */}
        <div className="flex flex-col" data-aos="fade-left" data-aos-delay="100">
          <div className="text-sm font-bold text-[var(--nmj-red)] uppercase tracking-widest mb-2">
            Layanan Kami
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight">
            Solusi Konstruksi Terintegrasi
          </h2>
          <p className="text-white/80 text-base md:text-lg mb-8 max-w-xl">
            Dari perencanaan hingga serah terima, kami menyediakan keahlian dan
            sumber daya untuk mewujudkan visi proyek Anda menjadi kenyataan.
          </p>
          {/* Tombol Aksi (CTA) yang Lebih Menonjol */}
          <button
            onClick={scrollToServices}
            className="flex items-center justify-center gap-2 bg-[var(--nmj-red)] text-white font-bold px-8 py-3 w-max hover:brightness-110 transition-all shadow-lg transform hover:-translate-y-1 group cursor-pointer"
            data-aos="fade-up"
            data-aos-delay="700"
          >
            <span>LIHAT SEMUA LAYANAN</span>
            <ArrowDown className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesDetailSection;