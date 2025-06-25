import React from "react";

const ValuesSection = () => {
  return (
    <section className="w-full bg-[var(--nmj-morning)] py-8 sm:py-12 md:py-16 flex flex-col lg:flex-row items-stretch relative">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 flex flex-col lg:flex-row items-stretch">
        {/* LEFT: Values Content */}
        <div className="flex flex-col justify-center text-gray-900 w-full lg:w-1/2 h-full min-h-0 px-0 xl:px-10 py-6 sm:py-8 md:py-10 lg:py-12">
          <div
            className="text-xs sm:text-sm tracking-widest text-gray-900 mb-2"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            VALUES
          </div>
          <h2
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 md:mb-8 leading-tight text-center lg:text-left text-gray-900"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            We Believe in
            <br />
            This Quality
          </h2>
          <div className="flex flex-col gap-4 sm:gap-5 md:gap-7">
            <div
              className="flex items-start gap-2 sm:gap-3 md:gap-4"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <span className="mt-1 w-2 h-2 sm:w-3 sm:h-3 bg-[var(--nmj-red)] rotate-45 inline-block flex-shrink-0" />
              <div>
                <div className="font-bold text-sm sm:text-base mb-1 text-gray-900">
                  Integrity
                </div>
                <div className="text-gray-900 text-xs sm:text-sm leading-relaxed">
                  We uphold the highest ethical standards in all our
                  construction projects, fostering trust and transparency with
                  our clients and partners.
                </div>
              </div>
            </div>
            <div
              className="flex items-start gap-2 sm:gap-3 md:gap-4"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <span className="mt-1 w-2 h-2 sm:w-3 sm:h-3 bg-[var(--nmj-red)] rotate-45 inline-block flex-shrink-0" />
              <div>
                <div className="font-bold text-sm sm:text-base mb-1 text-gray-900">
                  Innovation
                </div>
                <div className="text-gray-900 text-xs sm:text-sm leading-relaxed">
                  We embrace new technologies and creative solutions to deliver
                  superior results for our clients and communities.
                </div>
              </div>
            </div>
            <div
              className="flex items-start gap-2 sm:gap-3 md:gap-4"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <span className="mt-1 w-2 h-2 sm:w-3 sm:h-3 bg-[var(--nmj-red)] rotate-45 inline-block flex-shrink-0" />
              <div>
                <div className="font-bold text-sm sm:text-base mb-1 text-gray-900">
                  Quality
                </div>
                <div className="text-gray-900 text-xs sm:text-sm leading-relaxed">
                  We are committed to delivering the highest quality in every
                  aspect of our work, ensuring lasting value for our clients.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: Image & Stats */}
        <div
          className="w-full lg:w-1/2 relative"
          data-aos="fade-left"
          data-aos-delay="600"
        >
          <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-full">
            <div className="w-full h-full bg-[var(--nmj-college)] relative overflow-hidden">
              <img
                src="/gambar.png"
                alt="Construction Values"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute top-4 left-4 w-6 h-6 sm:w-8 sm:h-8 bg-white"></div>
            <div className="absolute bottom-4 right-4 w-4 h-4 sm:w-6 sm:h-6 bg-[var(--nmj-red)]"></div>
          </div>
          {/* Stats overlay */}
          <div className="absolute bottom-4 text-white sm:bottom-6 md:bottom-8 left-4 sm:left-6 md:left-8 bg-red-500 backdrop-blur-sm p-3 sm:p-4 md:p-6  shadow-lg">
            <div className="text-center lg:text-left">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-1 sm:mb-2">
                15
              </div>
              <div className="text-xs sm:text-sm md:text-base font-light leading-tight">
                Years of Construction
                <br />
                Industry Experience
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
