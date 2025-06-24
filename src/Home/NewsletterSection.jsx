import React from "react";
import { Building } from "lucide-react";

const NewsletterSection = () => {
  return (
    <section className="w-full py-0 flex flex-col items-stretch mt-20 justify-center bg-morning">
      <div className="bg-[var(--nmj-college)] rounded-none shadow-none px-30 py-14 flex flex-row items-start mx-auto w-full">
        {/* Left: Image */}
        <div className="flex-shrink-0 mr-10">
          <img
            src="/gambar.png"
            alt="FAQ Illustration"
            className="h-[400px] object-cover shadow-lg"
            style={{ objectPosition: "center" }}
          />
        </div>
        {/* Right: Form & Logo Bar */}
        <div className="flex-1 w-full flex flex-col">
          <h3 className="text-3xl font-bold text-white mb-4 leading-tight">
            Siap membangun masa depan Anda bersama NMJ?
          </h3>
          <p className="text-white mb-6">
            Daftar newsletter kami untuk update terbaru seputar layanan dan
            proyek NMJ.
          </p>
          <form className="flex flex-col text-white sm:flex-row gap-3 w-full">
            <input
              type="email"
              placeholder="Masukkan alamat email Anda ..."
              className="border-b border-gray-300 bg-transparent text-white px-0 py-2 flex-1 focus:outline-none focus:border-[var(--nmj-red)] text-base"
            />
            <button
              type="submit"
              className="bg-[var(--nmj-red)] text-white px-7 py-2 font-semibold hover:bg-[var(--nmj-red)] transition text-base"
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
    </section>
  );
};

export default NewsletterSection;
