import React, { useState, useEffect } from "react";
import {
  Building,
  HardHat,
  Landmark,
  ChevronLeft,
  ChevronRight,
  Wrench,
  Truck,
  Shield,
  Zap,
  Home,
  Factory,
} from "lucide-react";

const ServicesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);

  // Responsive cards per view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCardsPerView(1); // Mobile: 1 card
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2); // Tablet: 2 cards
      } else {
        setCardsPerView(3); // Desktop: 3 cards
      }
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const services = [
    {
      id: 1,
      title: "Konstruksi Bangunan",
      description:
        "Kami ahli dalam membangun gedung berkualitas tinggi untuk kebutuhan komersial, residensial, dan industri dengan fokus pada keamanan dan daya tahan.",
      icon: Building,
      bgColor: "bg-[var(--nmj-morning)]",
      textColor: "text-[var(--nmj-red)]",
      borderColor: "border-gray-100",
      iconColor: "text-[var(--nmj-red)]",
    },
    {
      id: 2,
      title: "Manajemen Proyek",
      description:
        "Kami menyediakan layanan manajemen proyek profesional untuk memastikan setiap proyek konstruksi selesai tepat waktu, sesuai anggaran, dan standar tertinggi.",
      icon: HardHat,
      bgColor: "bg-[var(--nmj-red)]",
      textColor: "text-white",
      borderColor: "border-[var(--nmj-red)]",
      iconColor: "text-white",
    },
    {
      id: 3,
      title: "Pengembangan Infrastruktur",
      description:
        "Kami menawarkan solusi pengembangan infrastruktur menyeluruh, mulai dari jalan, jembatan, hingga utilitas, mendukung pertumbuhan berkelanjutan.",
      icon: Landmark,
      bgColor: "bg-[var(--nmj-morning)]",
      textColor: "text-[var(--nmj-red)]",
      borderColor: "border-gray-100",
      iconColor: "text-[var(--nmj-red)]",
    },
    {
      id: 4,
      title: "Renovasi & Perbaikan",
      description:
        "Layanan renovasi dan perbaikan bangunan dengan standar tinggi, mengubah ruang lama menjadi area yang modern dan fungsional.",
      icon: Wrench,
      bgColor: "bg-[var(--nmj-morning)]",
      textColor: "text-[var(--nmj-red)]",
      borderColor: "border-gray-100",
      iconColor: "text-[var(--nmj-red)]",
    },
    {
      id: 5,
      title: "Logistik & Transportasi",
      description:
        "Solusi logistik dan transportasi untuk material konstruksi dengan armada modern dan sistem tracking yang terintegrasi.",
      icon: Truck,
      bgColor: "bg-[var(--nmj-red)]",
      textColor: "text-white",
      borderColor: "border-[var(--nmj-red)]",
      iconColor: "text-white",
    },
    {
      id: 6,
      title: "Keamanan & Keselamatan",
      description:
        "Implementasi sistem keamanan dan keselamatan kerja yang komprehensif untuk melindungi pekerja dan aset proyek.",
      icon: Shield,
      bgColor: "bg-[var(--nmj-morning)]",
      textColor: "text-[var(--nmj-red)]",
      borderColor: "border-gray-100",
      iconColor: "text-[var(--nmj-red)]",
    },
    {
      id: 7,
      title: "Instalasi Listrik",
      description:
        "Layanan instalasi dan pemeliharaan sistem kelistrikan untuk bangunan komersial, industri, dan residensial.",
      icon: Zap,
      bgColor: "bg-[var(--nmj-red)]",
      textColor: "text-white",
      borderColor: "border-[var(--nmj-red)]",
      iconColor: "text-white",
    },
    {
      id: 8,
      title: "Perumahan & Real Estate",
      description:
        "Pengembangan perumahan dan proyek real estate dengan desain modern dan kualitas konstruksi terbaik.",
      icon: Home,
      bgColor: "bg-[var(--nmj-morning)]",
      textColor: "text-[var(--nmj-red)]",
      borderColor: "border-gray-100",
      iconColor: "text-[var(--nmj-red)]",
    },
    {
      id: 9,
      title: "Manajemen Pabrik",
      description:
        "Layanan manajemen dan pemeliharaan fasilitas pabrik dengan sistem yang efisien dan berkelanjutan.",
      icon: Factory,
      bgColor: "bg-[var(--nmj-red)]",
      textColor: "text-white",
      borderColor: "border-[var(--nmj-red)]",
      iconColor: "text-white",
    },
  ];

  const totalSlides = Math.ceil(services.length / cardsPerView);
  const visibleServices = services.slice(
    currentIndex * cardsPerView,
    currentIndex * cardsPerView + cardsPerView
  );

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <section
      className="w-full bg-[var(--nmj-college)] py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:px-10 flex flex-col items-center"
      data-aos="fade-left"
    >
      <div className="w-full max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-4 sm:mb-6 md:mb-8">
          <div className="text-xs sm:text-sm text-white font-semibold tracking-widest uppercase">
            LAYANAN
          </div>
          <div className="flex gap-1 sm:gap-2">
            <button
              onClick={prevSlide}
              className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center border border-gray-300 bg-white text-slate-800 hover:bg-gray-100 transition text-xs sm:text-sm disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={totalSlides <= 1}
            >
              <ChevronLeft className="w-3 h-3 sm:w-5 sm:h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center border border-gray-300 bg-white text-slate-800 hover:bg-gray-100 transition text-xs sm:text-sm disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={totalSlides <= 1}
            >
              <ChevronRight className="w-3 h-3 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 sm:mb-8 md:mb-10 leading-tight text-center">
          Apa yang Kami Lakukan di Bidang Konstruksi
        </h2>

        {/* Services Carousel */}
        <div className="relative overflow-hidden">
          <div className="flex gap-3 sm:gap-4 md:gap-6 lg:gap-8 justify-center items-stretch transition-transform duration-500 ease-in-out">
            {visibleServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={service.id}
                  className={`w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1.33rem)] ${service.bgColor} shadow-md p-3 sm:p-4 md:p-6 lg:p-8 flex flex-col justify-between h-full items-start relative border ${service.borderColor} min-h-[280px] sm:min-h-[320px] md:min-h-[360px] lg:min-h-[400px]`}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  {/* Dekorasi sudut kanan atas */}
                  <div
                    className="absolute top-0 right-0 w-4 h-1.5 sm:w-6 sm:h-2 md:w-8 md:h-3 bg-white"
                    style={{ zIndex: 2 }}
                  ></div>
                  <div
                    className={`absolute top-1.5 sm:top-2 md:top-3 right-0 w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 ${service.bgColor.replace(
                      "bg-",
                      ""
                    )}`}
                    style={{ zIndex: 2 }}
                  ></div>
                  <div className="w-full">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 flex items-center justify-center mb-2 sm:mb-3 md:mb-4">
                      <IconComponent
                        className={`w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 ${service.iconColor}`}
                      />
                    </div>
                    <h3
                      className={`text-base sm:text-lg md:text-xl font-extrabold ${service.textColor} mb-2 leading-tight`}
                    >
                      {service.title}
                    </h3>
                    <p
                      className={`${service.textColor} text-xs sm:text-sm mb-3 sm:mb-4 flex-1 leading-relaxed`}
                    >
                      {service.description}
                    </p>
                  </div>
                  <button
                    className={`text-xs font-extrabold ${
                      service.textColor
                    } border-b-2 ${
                      service.textColor === "text-white"
                        ? "border-white hover:text-[var(--nmj-red)] hover:border-[var(--nmj-red)]"
                        : "border-[var(--nmj-red)] hover:text-white hover:border-white"
                    } transition uppercase mt-auto`}
                  >
                    Selengkapnya
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Slide Indicators */}
        {totalSlides > 1 && (
          <div className="flex justify-center mt-4 sm:mt-6 md:mt-8 gap-1.5 sm:gap-2">
            {Array.from({ length: totalSlides }, (_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-3 md:h-3 transition-colors ${
                  index === currentIndex
                    ? "bg-[var(--nmj-red)]"
                    : "bg-white/50 hover:bg-white/75"
                }`}
              />
            ))}
          </div>
        )}

        {/* Mobile Swipe Hint */}
        <div className="text-center mt-4 sm:hidden">
          <p className="text-white/70 text-xs">
            Geser untuk melihat layanan lainnya
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
