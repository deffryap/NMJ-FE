import React from "react";

const ValuesSection = () => {
  return (
    <section
      className="w-full flex justify-center mt-30 items-stretch bg-[var(--nmj-college)] p-0 m-0 relative"
      style={{ position: "relative" }}
      data-aos="fade-left"
    >
      <div className="w-full max-w-9xl mx-auto h-[400px] sm:h-[450px] lg:h-[500px] min-h-0 relative lg:ml-[500px]">
        {/* Blue background full width except for left margin */}

        {/* Content: Values and Image */}
        <div className="relative   pt-10 inset-0 left-0 bg-white w-full h-full z-0 flex flex-col lg:flex-row ">
          {/* Values Content */}
          <div className="flex flex-col justify-center text-gray-900 w-full lg:w-1/2 h-full min-h-0 px-6 sm:px-8 lg:px-10 py-8 sm:py-10 lg:py-12">
            <div className="text-xs tracking-widest text-gray-900 mb-2">
              NILAI
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 leading-tight text-center lg:text-left text-gray-900">
              Kami Percaya pada
              <br />
              Kualitas Ini
            </h2>
            <div className="flex flex-col gap-5 sm:gap-7">
              <div className="flex items-start gap-3 sm:gap-4">
                <span className="mt-1 w-2 h-2 sm:w-3 sm:h-3 bg-[var(--nmj-red)] rotate-45 inline-block flex-shrink-0" />
                <div>
                  <div className="font-bold text-sm sm:text-base mb-1 text-gray-900">
                    Integritas
                  </div>
                  <div className="text-gray-900 text-xs sm:text-sm leading-relaxed">
                    Kami menjunjung tinggi standar etika tertinggi dalam setiap
                    proyek konstruksi, membangun kepercayaan dan transparansi
                    dengan klien dan mitra.
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3 sm:gap-4">
                <span className="mt-1 w-2 h-2 sm:w-3 sm:h-3 bg-[var(--nmj-red)] rotate-45 inline-block flex-shrink-0" />
                <div>
                  <div className="font-bold text-sm sm:text-base mb-1 text-gray-900">
                    Inovasi
                  </div>
                  <div className="text-gray-900 text-xs sm:text-sm leading-relaxed">
                    Kami terus mencari dan menerapkan solusi konstruksi inovatif
                    untuk mendorong efisiensi, keberlanjutan, dan kemajuan
                    infrastruktur.
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3 sm:gap-4">
                <span className="mt-1 w-2 h-2 sm:w-3 sm:h-3 bg-[var(--nmj-red)] rotate-45 inline-block flex-shrink-0" />
                <div>
                  <div className="font-bold text-sm sm:text-base mb-1 text-gray-900">
                    Keamanan
                  </div>
                  <div className="text-gray-900 text-xs sm:text-sm leading-relaxed">
                    Kami berkomitmen menjaga keselamatan pekerja, klien, dan
                    lingkungan di setiap lokasi proyek.
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Image, sits on top of blue bg with geometric layers, and overflows out of the section */}
          <div className="h-full flex items-stretch justify-center relative overflow-visible lg:block">
            <div className="relative w-[60%] h-[90%] mb-8 flex items-end">
              <img
                src="/gambar.png"
                alt="Construction Site"
                className="w-full h-full object-cover relative z-20"
                style={{
                  transform: "translate(30%, -8%)",
                  boxShadow: "0 8px 32px 0 rgba(0,0,0,0.18)",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      {/* Red Experience Box absolutely at bottom left, outside blue box */}
      <div
        className="absolute left-4 sm:left-8 lg:left-0 bottom-0 bg-[var(--nmj-red)] text-white px-6 sm:px-8 lg:px-10 py-6 sm:py-8"
        style={{
          minWidth: "280px",
          minHeight: "100px",
          zIndex: 30,
          marginLeft: "220px",
        }}
      >
        {/* Decorative squares */}
        <div
          className="absolute top-0 right-12 sm:right-16 w-6 h-2 sm:w-8 sm:h-3 bg-white"
          style={{ zIndex: 2 }}
        ></div>
        <div
          className="absolute top-2 sm:top-3 right-6 sm:right-8 w-3 h-3 sm:w-4 sm:h-4 bg-[var(--nmj-red)]"
          style={{ zIndex: 2 }}
        ></div>
        <div className="text-4xl sm:text-5xl font-extrabold mb-2">15</div>
        <div className="text-sm sm:text-base font-light leading-tight">
          Tahun Pengalaman
          <br />
          di Industri Konstruksi
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
