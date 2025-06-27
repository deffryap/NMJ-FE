import React from "react";
import { Facebook, Instagram, Linkedin, Twitter, ArrowUp } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-[var(--nmj-red)] text-white pt-12 pb-0">
      {/* Dekorasi kotak kanan atas */}
      <div className="absolute top-0 right-0 flex flex-col gap-2 z-10">
        <div className="w-6 h-6 bg-[var(--nmj-college)]" />
        <div className="w-3 h-3 bg-white ml-6" />
      </div>
      <div
        className="w-full px-4 sm:px-6 md:px-6 lg:px-8 flex flex-col md:flex-row gap-10 md:gap-0 justify-between"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        {/* Kiri: Logo & Deskripsi */}
        <div className="flex-1 min-w-[220px] flex flex-col gap-4 mb-8 md:mb-0">
          <div className="flex items-center gap-2 mb-2">
            <img src="/icon-logo.png" alt="NMJ Logo" className="h-12 w-auto" />
          </div>
          <div className="text-white text-sm mb-2">
            Solusi konstruksi dengan berbagai layanan untuk industri dan
            infrastruktur Indonesia.
          </div>
          <div className="flex gap-3 mt-2">
            <a
              href="#"
              aria-label="Twitter"
              className="hover:text-white transition-colors"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="hover:text-white transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="hover:text-white transition-colors"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="hover:text-white transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
        {/* Tengah: Menu */}
        <div className="flex-[2] grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8 mb-8 md:mb-0">
          {/* Company */}
          <div>
            <div className="font-bold text-base mb-3 text-white">
              Perusahaan
            </div>
            <ul className="space-y-2 text-white text-sm">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  Tentang Kami
                </a>
              </li>
              <li>
                <a
                  href="#values"
                  className="hover:text-white transition-colors"
                >
                  Nilai Kami
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="hover:text-white transition-colors"
                >
                  Testimoni
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="hover:text-white transition-colors"
                >
                  Proyek
                </a>
              </li>
              <li>
                <a
                  href="#careers"
                  className="hover:text-white transition-colors"
                >
                  Karir
                </a>
              </li>
            </ul>
          </div>
          {/* Contact */}
          <div>
            <div className="font-bold text-base mb-3 text-white">Kontak</div>
            <ul className="space-y-2 text-white text-sm">
              <li>
                <a
                  href="tel:+622112345678"
                  className="hover:text-white transition-colors"
                >
                  Telepon
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@nmj.co.id"
                  className="hover:text-white transition-colors"
                >
                  Email
                </a>
              </li>
              <li>
                <a
                  href="#location"
                  className="hover:text-white transition-colors"
                >
                  Lokasi Kantor
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/628123456789"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="#support"
                  className="hover:text-white transition-colors"
                >
                  Layanan Pelanggan
                </a>
              </li>
            </ul>
          </div>
          {/* Services */}
          <div>
            <div className="font-bold text-base mb-3 text-white">Layanan</div>
            <ul className="space-y-2 text-white text-sm">
              <li>
                <a
                  href="#services"
                  className="hover:text-white transition-colors"
                >
                  Konstruksi Bangunan
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-white transition-colors"
                >
                  Manajemen Proyek
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-white transition-colors"
                >
                  Pengembangan Infrastruktur
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-white transition-colors"
                >
                  Renovasi
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-white transition-colors"
                >
                  Pekerjaan Sipil
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-white transition-colors"
                >
                  Manajemen Pabrik
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Bottom Bar */}
      <div
        className="mt-10 border-t border-white/10 bg-white/95 text-blue-950 text-xs flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 md:px-6 lg:px-8 py-3 gap-2 md:gap-0 relative z-20"
      >
        <div className="mb-2 md:mb-0">
          Copyright © {new Date().getFullYear()} PT Naek Maju Jaya. Hak cipta
          dilindungi undang-undang.
        </div>
        <div className="flex gap-4 items-center">
          <a href="#" className="hover:underline">
            Privasi
          </a>
          <span>·</span>
          <a href="#" className="hover:underline">
            Syarat Layanan
          </a>
          <span>·</span>
          <a href="#" className="hover:underline">
            Peta Situs
          </a>
        </div>
        {/* Scroll to top */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="absolute right-6 bottom-3 bg-white text-[var(--nmj-red)] w-8 h-8 flex items-center justify-center shadow-lg hover:bg-gray-100 transition cursor-pointer"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;