import React from "react";

function Accordion() {
  const [open, setOpen] = React.useState(1);
  const data = [
    {
      q: "Apa saja layanan utama yang ditawarkan PT NMJ?",
      a: "PT NMJ menawarkan layanan konstruksi gedung, manajemen proyek, pengembangan infrastruktur, serta solusi konstruksi lainnya untuk kebutuhan komersial, residensial, dan industri.",
    },
    {
      q: "Bagaimana cara menghubungi PT NMJ untuk konsultasi proyek?",
      a: "Anda dapat menghubungi kami melalui nomor telepon yang tertera di website atau mengisi formulir kontak untuk mendapatkan konsultasi gratis terkait kebutuhan proyek Anda.",
    },
    {
      q: "Apakah PT NMJ berpengalaman dalam proyek skala besar?",
      a: "Ya, PT NMJ telah berpengalaman mengerjakan berbagai proyek konstruksi berskala besar di seluruh Indonesia, baik untuk sektor swasta maupun pemerintah.",
    },
    {
      q: "Bagaimana PT NMJ menjamin kualitas dan keamanan proyek?",
      a: "Kami menerapkan standar mutu tinggi, menggunakan material berkualitas, serta mengutamakan keselamatan kerja di setiap tahapan proyek untuk memastikan hasil terbaik dan keamanan semua pihak.",
    },
  ];
  return (
    <div>
      {data.map((item, i) => (
        <div key={i} className="border-b last:border-b-0">
          <button
            className="w-full text-left py-3 sm:py-4 font-semibold text-black flex justify-between items-center hover:bg-gray-50 transition-colors"
            onClick={() => setOpen(open === i ? null : i)}
          >
            <span className="text-black text-sm sm:text-base pr-2 sm:pr-4 leading-relaxed">
              {item.q}
            </span>
            <span
              className={`transition-transform flex-shrink-0 ${
                open === i ? "rotate-180" : ""
              }`}
            >
              <svg
                width="16"
                height="16"
                className="sm:w-[18px] sm:h-[18px]"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M6 9l3 3 3-3" />
              </svg>
            </span>
          </button>
          {item.a && open === i && (
            <div className="pb-3 sm:pb-4 text-black text-xs sm:text-sm leading-relaxed px-0 sm:px-2">
              {item.a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

const FAQSection = () => {
  return (
    <section className="w-full flex flex-col lg:flex-row items-stretch bg-[var(--nmj-college)]">
      {/* LEFT: FAQ */}
      <div className="flex-1 max-w-xl flex flex-col bg-[var(--nmj-college)] px-4 sm:px-6 md:px-6 lg:px-8 py-8 sm:py-10 md:py-12 lg:py-14 justify-between relative z-10 border-r border-[var(--nmj-morning)]">
        <div className="flex flex-col justify-center text-white w-full lg:w-1/2 h-full min-h-0 px-0 sm:px-2 md:px-2 lg:px-4 xl:px-6 py-0 sm:py-2 md:py-4 lg:py-6">
          <div className="text-[var(--nmj-red)] text-xs sm:text-sm font-semibold mb-2 sm:mb-3">
            FAQ
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6 md:mb-8 leading-tight">
            Pertanyaan
            <br />
            Dari Klien
          </h2>
          <button className="bg-[var(--nmj-red)] text-white px-4 sm:px-6 py-2 sm:py-3 font-semibold shadow hover:bg-[var(--nmj-red)] transition mb-6 sm:mb-8 md:mb-10 text-sm sm:text-base">
            Tanya Sekarang
          </button>
        </div>
      </div>

      {/* RIGHT: FAQ Content */}
      <div className="flex-[1.5] flex flex-col bg-[var(--nmj-morning)] px-0 py-0">
        <div className="bg-[var(--nmj-morning)] rounded-none shadow-none px-4 sm:px-6 md:px-6 lg:px-8 xl:px-12 pt-8 sm:pt-10 md:pt-12 lg:pt-14 pb-2 border-b border-gray-100 h-full flex flex-col justify-start">
          <div className="flex flex-col gap-3 sm:gap-4">
            <Accordion />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
