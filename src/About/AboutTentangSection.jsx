import React from "react";

const AboutTentangSection = () => (
  <section className="w-full bg-[var(--nmj-morning)] py-16 px-0 border-b border-[var(--nmj-college)]">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div data-aos="fade-up" data-aos-delay="100">
        <div className="mb-2 text-xs tracking-widest font-bold text-[var(--nmj-red)] uppercase">
          Tentang
        </div>
        <h3 className="text-3xl md:text-4xl font-medium mb-4 text-[var(--nmj-college)]">
          Apa yang Kami Lakukan di Dunia Konstruksi
        </h3>
        <p className="text-[var(--nmj-college)]/90 text-lg mb-2">
          Kami bangga diakui sebagai perusahaan konstruksi terdepan, berkomitmen
          pada inovasi dan layanan terbaik untuk setiap klien. Dengan tim ahli
          dan dedikasi pada keberlanjutan, kami siap memenuhi kebutuhan industri
          konstruksi modern.
        </p>
      </div>
      <div
        className="flex justify-center md:justify-end"
        data-aos="fade-left"
        data-aos-delay="300"
      >
        <img
          src="/logo.png"
          alt="Ilustrasi NMJ"
          className="w-64 h-64 object-contain"
        />
      </div>
    </div>
  </section>
);

export default AboutTentangSection;
