import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full flex items-center justify-between bg-[var(--nmj-college)] h-16 md:h-20 fixed top-0 left-0 z-50 transition-all duration-300 ${
        scrolled ? "shadow-lg border-b border-gray-200" : ""
      }`}
    >
      <div className="flex items-center px-4 md:px-6 h-full flex-shrink-0">
        <img
          src="/icon-logo.png"
          alt="Logo"
          className="h-8 md:h-10 w-auto object-contain"
        />
      </div>
      {/* Desktop Nav */}
      <ul className="hidden md:flex items-center gap-4 text-base md:text-lg text-white pr-2">
        <li className="text-white font-extrabold cursor-pointer">Beranda</li>
        <li className="mx-2 text-white text-xl">·</li>
        <li className="hover:text-white cursor-pointer">Tentang</li>
        <li className="mx-2 text-white text-xl">·</li>
        <li className="hover:text-white cursor-pointer">Layanan</li>
        <li className="mx-2 text-white text-xl">·</li>
        <li className="hover:text-white cursor-pointer">Proyek</li>
        <li className="mx-2 text-white text-xl">·</li>
        <li className="hover:text-white cursor-pointer">Kontak</li>
      </ul>
      <div className="hidden md:flex bg-[var(--nmj-red)] px-6 items-center h-full">
        <button className="text-white font-bold text-base">
          Minta Penawaran
        </button>
      </div>
      {/* Hamburger Button */}
      <button
        className="md:hidden flex items-center px-4 focus:outline-none ml-auto"
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label="Toggle menu"
      >
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-md shadow-md flex flex-col md:hidden animate-fade-in z-50 border-b">
          <ul className="flex flex-col items-start gap-1 text-base px-4 py-3">
            <li className="font-extrabold text-[var(--nmj-red)] py-2 w-full cursor-pointer">
              Beranda
            </li>
            <li className="py-2 w-full cursor-pointer text-blue-950 hover:text-[var(--nmj-red)]">
              Tentang
            </li>
            <li className="py-2 w-full cursor-pointer text-blue-950 hover:text-[var(--nmj-red)]">
              Layanan
            </li>
            <li className="py-2 w-full cursor-pointer text-blue-950 hover:text-[var(--nmj-red)]">
              Proyek
            </li>
            <li className="py-2 w-full cursor-pointer text-blue-950 hover:text-[var(--nmj-red)]">
              Kontak
            </li>
          </ul>
          <div className="bg-[var(--nmj-red)] w-full px-4 py-3 flex items-center">
            <button className="text-white font-bold text-base w-full text-center py-2">
              Minta Penawaran
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
