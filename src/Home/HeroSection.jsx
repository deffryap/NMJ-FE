import React, { useState, useEffect } from "react";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: "/gambar.png",
      title: "Penghubung Menuju",
      subtitle: "Keunggulan Konstruksi",
      description:
        "Kami adalah penghubung utama menuju keunggulan di sektor konstruksi, mendorong kemajuan dan membangun infrastruktur berkelanjutan untuk masa depan.",
    },
    {
      id: 2,
      image: "/gambar2.webp",
      title: "Solusi Konstruksi",
      subtitle: "Terpercaya & Berkualitas",
      description:
        "Memberikan solusi konstruksi terbaik dengan standar kualitas tinggi dan keamanan yang terjamin untuk setiap proyek.",
    },
    {
      id: 3,
      image: "/gambar3.webp",
      title: "Inovasi & Teknologi",
      subtitle: "Membangun Masa Depan",
      description:
        "Menggunakan teknologi terkini dan inovasi dalam setiap proyek konstruksi untuk menciptakan infrastruktur masa depan.",
    },
  ];

  // Auto slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative w-full h-[60vh] md:h-screen overflow-hidden bg-[var(--nmj-college)]">
      {/* Background Images */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center h-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="flex-1 z-20 py-6 sm:py-8 flex flex-col items-start text-left">
          <h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-3 sm:mb-4 md:mb-6 drop-shadow-lg text-left"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {slides[currentSlide].title} <br /> {slides[currentSlide].subtitle}
          </h1>
          <p
            className="text-sm sm:text-base md:text-lg text-white mb-4 sm:mb-6 md:mb-8 max-w-lg drop-shadow-lg text-left"
            data-aos="fade-right"
            data-aos-delay="400"
          >
            {slides[currentSlide].description}
          </p>
          <button
            className="bg-[var(--nmj-red)] text-white px-3 sm:px-4 md:px-6 py-2 sm:py-3 font-semibold mb-4 sm:mb-6 md:mb-8 shadow hover:bg-[var(--nmj-red)] transition self-start text-xs sm:text-sm md:text-base"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            Jelajahi Lebih Lanjut
          </button>

          {/* Slider Bullets */}
          <div className="flex flex-col items-start gap-2 mt-2">
            <div className="flex gap-2 sm:gap-3">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 flex items-center justify-center border text-white text-xs sm:text-sm transition-all duration-300 ${
                    index === currentSlide
                      ? "border-white bg-black/40"
                      : "border-gray-200 bg-black/20 hover:bg-black/30"
                  }`}
                >
                  {String(index + 1).padStart(2, "0")}
                </button>
              ))}
            </div>
            <div className="flex gap-2 mt-2">
              <button
                onClick={prevSlide}
                className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors"
              >
                <svg
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors"
              >
                <svg
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
          <div
            className="h-full bg-[var(--nmj-red)] transition-all duration-5000 ease-linear"
            style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
