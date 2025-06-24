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

  // Menutup menu mobile saat klik link
  const handleMenuClick = () => setMenuOpen(false);

  return (
    <nav
      className={`w-full flex items-center justify-between bg-white  h-16 md:h-20 fixed top-0 left-0 z-50 transition-all duration-300 ${
        scrolled ? "shadow-lg border-b border-gray-200" : ""
      }`}
    >
      <div className="flex items-center px-4 md:px-8 h-full flex-shrink-0">
        <img
          src="/logo.png"
          alt="Logo"
          className="h-8 md:h-10 w-auto object-contain"
        />
      </div>
      {/* Desktop Nav */}
      <ul className="hidden md:flex items-center gap-4 text-base md:text-lg text-gray-700 pr-2">
        <li className="text-black font-extrabold cursor-pointer">Home</li>
        <li className="mx-2 text-gray-400 text-xl">·</li>
        <li className="hover:text-black cursor-pointer">About</li>
        <li className="mx-2 text-gray-400 text-xl">·</li>
        <li className="hover:text-black cursor-pointer">Services</li>
        <li className="mx-2 text-gray-400 text-xl">·</li>
        <li className="hover:text-black cursor-pointer">Projects</li>
        <li className="mx-2 text-gray-400 text-xl">·</li>
        <li className="hover:text-black cursor-pointer">Contact</li>
      </ul>
      <div className="hidden md:flex bg-slate-800 px-6 items-center h-full">
        <button className="text-white font-bold text-base">
          Request A Quote
        </button>
      </div>
      {/* Hamburger Button */}
      <button
        className="md:hidden flex items-center px-4 focus:outline-none ml-auto"
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label="Toggle menu"
      >
        <svg
          className="w-8 h-8 text-slate-800"
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
          <ul className="flex flex-col items-start gap-1 text-base text-gray-700 px-4 py-3">
            <li
              className="text-black font-extrabold py-2 w-full cursor-pointer"
              onClick={handleMenuClick}
            >
              Home
            </li>
            <li
              className="hover:text-black cursor-pointer py-2 w-full"
              onClick={handleMenuClick}
            >
              About
            </li>
            <li
              className="hover:text-black cursor-pointer py-2 w-full"
              onClick={handleMenuClick}
            >
              Services
            </li>
            <li
              className="hover:text-black cursor-pointer py-2 w-full"
              onClick={handleMenuClick}
            >
              Projects
            </li>
            <li
              className="hover:text-black cursor-pointer py-2 w-full"
              onClick={handleMenuClick}
            >
              Contact
            </li>
          </ul>
          <div className="bg-slate-800 w-full px-4 py-3 flex items-center">
            <button className="text-white font-bold text-base w-full text-center py-2">
              Request A Quote
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
