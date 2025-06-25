import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Budi Santoso",
    position: "Project Manager, PT Sukses Bersama",
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
    quote:
      "PT NAEK MAJU JAYA delivered our project on time with outstanding quality and professionalism. Their team was responsive and always ensured our satisfaction at every stage.",
  },
  {
    name: "Siti Aminah",
    position: "Director, PT Amanah Konstruksi",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    quote:
      "Pelayanan NMJ sangat memuaskan, hasil pekerjaan rapi dan sesuai harapan. Komunikasi dengan tim sangat mudah dan transparan.",
  },
  {
    name: "Andi Wijaya",
    position: "Owner, CV Wijaya Baru",
    photo: "https://randomuser.me/api/portraits/men/65.jpg",
    quote:
      "Saya sangat merekomendasikan NMJ untuk proyek konstruksi. Proses pengerjaan cepat dan hasilnya sangat berkualitas.",
  },
  {
    name: "Rina Marlina",
    position: "Procurement, PT Bangun Jaya",
    photo: "https://randomuser.me/api/portraits/women/68.jpg",
    quote:
      "Tim NMJ sangat profesional dan ramah. Semua kebutuhan proyek kami dipenuhi dengan baik.",
  },
  {
    name: "Dewi Lestari",
    position: "CEO, PT Lestari Abadi",
    photo: "https://randomuser.me/api/portraits/women/12.jpg",
    quote:
      "Hasil pekerjaan sangat memuaskan dan tepat waktu. Sangat direkomendasikan!",
  },
  {
    name: "Joko Prabowo",
    position: "Site Manager, PT Karya Mandiri",
    photo: "https://randomuser.me/api/portraits/men/23.jpg",
    quote:
      "NMJ selalu memberikan solusi terbaik untuk setiap tantangan di lapangan.",
  },
  {
    name: "Linda Sari",
    position: "Owner, CV Sari Jaya",
    photo: "https://randomuser.me/api/portraits/women/33.jpg",
    quote: "Pelayanan cepat, hasil rapi, dan harga bersaing. Sangat puas!",
  },
  {
    name: "Agus Salim",
    position: "Project Lead, PT Mega Konstruksi",
    photo: "https://randomuser.me/api/portraits/men/41.jpg",
    quote:
      "Tim NMJ sangat komunikatif dan bertanggung jawab. Proyek berjalan lancar.",
  },
  {
    name: "Maya Putri",
    position: "Direktur, PT Putri Bangun",
    photo: "https://randomuser.me/api/portraits/women/55.jpg",
    quote:
      "Sangat puas dengan hasil kerja NMJ. Proses transparan dan profesional.",
  },
  {
    name: "Rudi Hartono",
    position: "Owner, CV Hartono",
    photo: "https://randomuser.me/api/portraits/men/77.jpg",
    quote: "NMJ selalu memberikan hasil terbaik dan sesuai ekspektasi kami.",
  },
];

function TestimonialSlider({ testimonials }) {
  const [start, setStart] = useState(0);
  // Responsif: 1 di mobile, 2 di tablet, 3 di desktop
  const [cardsPerView, setCardsPerView] = useState(3);

  React.useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 640) setCardsPerView(1);
      else if (window.innerWidth < 1024) setCardsPerView(2);
      else setCardsPerView(3);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalWindows = Math.ceil(testimonials.length / cardsPerView);
  const canPrev = start > 0;
  const canNext = start < testimonials.length - cardsPerView;

  const prev = () => setStart((s) => Math.max(0, s - cardsPerView));
  const next = React.useCallback(
    () =>
      setStart((s) =>
        Math.min(testimonials.length - cardsPerView, s + cardsPerView)
      ),
    [testimonials.length, cardsPerView]
  );

  // Auto slide setiap 5 detik
  React.useEffect(() => {
    const timer = setInterval(() => {
      if (canNext) {
        next();
      } else {
        setStart(0);
      }
    }, 5000);
    return () => clearInterval(timer);
  }, [start, canNext, next]);

  return (
    <div className="w-full ">
      {/* Header Section */}
      <div className="text-center mb-12">
        <p className="text-white max-w-2xl mx-auto">
          Dengarkan pengalaman nyata dari klien yang telah merasakan layanan
          terbaik kami
        </p>
      </div>

      {/* Testimonial Cards Container */}
      <div className="relative px-4 md:px-8">
        <div className="overflow-hidden ">
          <div
            className="flex transition-transform duration-700 ease-in-out items-stretch"
            style={{
              transform: `translateX(-${(start * 100) / cardsPerView}%)`,
            }}
          >
            {testimonials.map((t, idx) => (
              <div
                key={t.name}
                className="flex-shrink-0 px-3 md:px-4 h-full"
                style={{ width: `${100 / cardsPerView}%` }}
                data-aos="fade-up"
                data-aos-delay={200 + idx * 100}
              >
                <div className="bg-[var(--nmj-morning)]  shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-8 relative group h-full flex flex-col">
                  {/* Decorative Element */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--nmj-red)] to-[var(--nmj-red)] rounded-t-2xl"></div>

                  {/* Profile Section */}
                  <div className="flex items-center mb-6">
                    <div className="relative">
                      <div className="w-16 h-16 rounded-full ring-4 ring-[var(--nmj-red)] overflow-hidden">
                        <img
                          src={t.photo}
                          alt={t.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-[var(--nmj-red)] rounded-full flex items-center justify-center">
                        <Quote className="w-3 h-3 text-white" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="font-bold text-[var(--nmj-college)] text-lg">
                        {t.name}
                      </h4>
                      <p className="text-[var(--nmj-red)] text-sm font-medium">
                        {t.position}
                      </p>
                    </div>
                  </div>

                  {/* Quote */}
                  <div className="relative">
                    <p className="text-[var(--nmj-college)] leading-relaxed text-base italic">
                      "{t.quote}"
                    </p>
                  </div>

                  {/* Rating Stars */}
                  <div className="flex mt-6 space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-[var(--nmj-red)] text-[var(--nmj-red)]"
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prev}
          disabled={!canPrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center text-slate-700 hover:bg-red-50 hover:border-red-200 hover:text-red-600 transition-all disabled:opacity-40 disabled:cursor-not-allowed z-10"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={next}
          disabled={!canNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center text-slate-700 hover:bg-red-50 hover:border-red-200 hover:text-red-600 transition-all disabled:opacity-40 disabled:cursor-not-allowed z-10"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-8 space-x-2">
        {Array.from({ length: totalWindows }).map((_, i) => (
          <button
            key={i}
            onClick={() => setStart(i * cardsPerView)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              Math.floor(start / cardsPerView) === i
                ? "bg-red-600 w-8"
                : "bg-gray-300 hover:bg-red-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

const TestimonialSection = () => {
  return (
    <section className="w-full bg-[var(--nmj-college)] py-8 sm:py-10 md:py-11 px-4 sm:px-6 md:px-8 lg:px-10 flex flex-col items-center">
      <div className="w-full max-w-6xl mx-auto flex flex-col items-center">
        <div className="mb-2 text-sm text-white font-semibold tracking-widest uppercase text-center">
          Testimoni
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-10 leading-tight text-center">
          Apa Kata Klien Kami
        </h2>
        <TestimonialSlider testimonials={testimonials} />
      </div>
    </section>
  );
};

export default TestimonialSection;
