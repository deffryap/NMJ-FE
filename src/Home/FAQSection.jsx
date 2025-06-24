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
            className="w-full text-left py-4 font-semibold text-black flex justify-between items-center"
            onClick={() => setOpen(open === i ? null : i)}
          >
            <span className="text-black">{item.q}</span>
            <span
              className={`transition-transform ${
                open === i ? "rotate-180" : ""
              }`}
            >
              <svg
                width="18"
                height="18"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M6 9l3 3 3-3" />
              </svg>
            </span>
          </button>
          {item.a && open === i && (
            <div className="pb-4 text-black text-sm">{item.a}</div>
          )}
        </div>
      ))}
    </div>
  );
}

const FAQSection = () => {
  return (
    <section className="w-full py-0 px-24 flex flex-col lg:flex-row items-stretch justify-center">
      {/* LEFT: FAQ */}
      <div className="flex-1 max-w-xl flex flex-col bg-[var(--nmj-college)] px-8 py-14 justify-between relative z-10 border-r border-[var(--nmj-morning)]">
        <div>
          <div className="text-[var(--nmj-red)] text-xs font-semibold mb-3 ">
            FAQ
          </div>
          <h2 className="text-3xl font-bold text-white mb-8 leading-tight">
            Pertanyaan
            <br />
            Dari Klien
          </h2>
          <button className="bg-[var(--nmj-red)] text-white px-6 py-2 font-semibold shadow hover:bg-[var(--nmj-red)] transition mb-10">
            Tanya Sekarang
          </button>
        </div>
      </div>
      {/* RIGHT: Accordion */}
      <div className="flex-[1.5] flex flex-col bg-[var(--nmj-morning)] px-0 py-0">
        <div className="bg-[var(--nmj-morning)] rounded-none shadow-none px-12 pt-14 pb-2 border-b border-gray-100 h-full flex flex-col justify-start">
          <Accordion />
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
