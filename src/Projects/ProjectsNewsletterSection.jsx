import React from "react";
import { Building } from "lucide-react";

const ProjectsNewsletterSection = () => {
  return (
    <section className="bg-[var(--nmj-college)] w-full py-10 md:py-16 px-4 sm:px-6 md:px-8 lg:px-10 flex flex-col items-center">
      <div className="w-full max-w-6xl mx-auto flex flex-col items-center">
        <div className="bg-[var(--nmj-college)] rounded-none shadow-none px-4 sm:px-6 md:px-6 lg:px-8 xl:px-12 2xl:px-20 py-8 sm:py-10 md:py-12 lg:py-14 flex flex-col lg:flex-row items-start mx-auto w-full">
          {/* Left: Image */}
          <div className="flex-1 order-2 lg:order-1 relative mb-6 sm:mb-8 lg:mb-0">
            <div className="relative w-full max-w-md mx-auto lg:mx-0">
              <div className="w-full h-52 sm:h-56 md:h-64 lg:h-80 bg-[var(--nmj-morning)] shadow-lg relative overflow-hidden">
                <img
                  src="/gambar.png"
                  alt="Newsletter"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-2 sm:-top-3 md:-top-4 -left-2 sm:-left-3 md:-left-4 w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 bg-[var(--nmj-red)]"></div>
              <div className="absolute -bottom-2 sm:-bottom-3 md:-bottom-4 -right-2 sm:-right-3 md:-right-4 w-3 h-3 sm:w-5 sm:h-5 md:w-6 md:h-6 bg-[var(--nmj-morning)]"></div>
            </div>
          </div>

          {/* Right: Form & Logo Bar */}
          <div className="flex-1 w-full flex flex-col order-1 lg:order-2">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4 leading-tight">
              Siap membangun masa depan Anda bersama NMJ?
            </h3>
            <p className="text-white mb-4 sm:mb-6 text-sm sm:text-base">
              Daftar newsletter kami untuk update terbaru seputar layanan dan
              proyek NMJ.
            </p>
            <form className="flex flex-col text-white sm:flex-row gap-3 w-full">
              <input
                type="email"
                placeholder="Masukkan alamat email Anda ..."
                className="border-b border-gray-300 bg-transparent text-white px-0 py-2 sm:py-3 flex-1 focus:outline-none focus:border-[var(--nmj-red)] text-sm sm:text-base"
              />
              <button
                type="submit"
                className="bg-[var(--nmj-red)] text-white px-4 sm:px-6 md:px-7 py-2 sm:py-3 font-semibold hover:bg-[var(--nmj-red)] transition text-sm sm:text-base whitespace-nowrap"
              >
                Daftar
              </button>
            </form>
            {/* Logo bar di bawah subscribe */}
            <div className="flex flex-row gap-8 items-end mt-10 w-full justify-start">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="text-gray-400 text-xs flex flex-col items-center"
                >
                  <span className="w-10 h-10 bg-gray-200 rounded-full mb-2 flex items-center justify-center text-2xl">
                    <Building className="w-6 h-6 text-gray-400" />
                  </span>
                  <span className="text-white">Logoplsum</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsNewsletterSection;
