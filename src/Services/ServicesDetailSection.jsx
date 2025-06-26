import React, { useEffect, useState } from "react";
import { PlayCircle, ClipboardList, Building, HardHat, ArrowRight } from "lucide-react";
import { getServices } from "../api/servicesApi";

const iconMap = [ClipboardList, Building, HardHat];

const ServicesDetailSection = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    getServices()
      .then((res) => {
        // Filter only active services
        const data = res.data.filter((service) => service.is_active);
        setServices(data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Gagal memuat data layanan.");
        setLoading(false);
      });
  }, []);

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
          {/* Daftar Layanan dengan Ikon */}
          <div className="space-y-6 mb-10">
            {loading ? (
              <div className="text-white">Memuat layanan...</div>
            ) : error ? (
              <div className="text-red-400">{error}</div>
            ) : !services.length ? (
              <div className="text-white">Tidak ada layanan aktif.</div>
            ) : (
              services.map((service, index) => {
                const Icon = iconMap[index % iconMap.length] || ClipboardList;
                return (
                  <div
                    key={service.id}
                    className="flex items-start gap-4"
                    data-aos="fade-up"
                    data-aos-delay={400 + index * 100}
                  >
                    <div className="flex-shrink-0 bg-[var(--nmj-red)] p-3 mt-1">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-1">
                        {service.title}
                      </h3>
                      <p className="text-white/70 text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                );
              })
            )}
          </div>
          {/* Tombol Aksi (CTA) yang Lebih Menonjol */}
          <a
            href="#services"
            className="flex items-center justify-center gap-2 bg-[var(--nmj-red)] text-white font-bold px-8 py-3 w-max hover:brightness-110 transition-all shadow-lg transform hover:-translate-y-1"
            data-aos="fade-up"
            data-aos-delay="700"
          >
            <span>LIHAT SEMUA LAYANAN</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesDetailSection;