import React, { useState } from "react";
import Button from "../../ui/Button";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="max-w-7xl mx-auto w-full h-16 lg:h-21 flex justify-between items-center px-4 sm:px-4 md:px-4 py-6 sm:py-6 md:py-6 lg:px-14">
      {/* Logo */}
      <div className="flex items-center gap-2 w-[141px] lg:w-[158.63px]">
        <img
          src="../assets/logos/logo-smart-tech.svg"
          alt="Smart-Tech Logo"
          className="block dark:hidden"
        />
        <img
          src="../assets/logos/logo-smart-tech-dark.svg"
          alt="Smart-Tech Logo"
          className="hidden dark:block"
        />
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="flex flex-col items-center absolute top-0 left-0 w-full h-[852px] bg-white dark:bg-black z-[999]">
          <div className="flex w-full justify-between items-center h-16 px-4 py-6">
            <img
              src="../assets/logos/logo-smart-tech.svg"
              alt="Smart-Tech Logo"
              className="block dark:hidden"
            />
            <img
              src="../assets/logos/logo-smart-tech-dark.svg"
              alt="Smart-Tech Logo"
              className="hidden dark:block"
            />
            <button onClick={() => setMenuOpen(false)} className="md:hidden">
              <img
                src="../assets/icons/Close.svg"
                alt="Close Menu Icon"
                className="block dark:hidden"
              />
              <img
                src="../assets/icons/Close-dark.svg"
                alt="Close Menu Icon"
                className="hidden dark:block"
              />
            </button>
          </div>
          <div className="flex flex-col w-full items-start px-4">
            <a href="#about" className="text-sm font-medium leading-7 py-2" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#services" className="text-sm font-medium leading-7 py-2" onClick={() => setMenuOpen(false)}>Services</a>
            <a href="#portfolio" className="text-sm font-medium leading-7 py-2" onClick={() => setMenuOpen(false)}>Portfolios</a>
            <a href="#projects" className="text-sm font-medium leading-7 py-2" onClick={() => setMenuOpen(false)}>Projects</a>
            <a href="#testimonials" className="text-sm font-medium leading-7 py-2" onClick={() => setMenuOpen(false)}>Testimonials</a>
            <a href="#faq" className="text-sm font-medium leading-7 py-2" onClick={() => setMenuOpen(false)}>FAQ</a>
            <a href="#contact" className="rounded-full w-full h-11 bg-[#FF623E] text-white font-bold text-sm text-center leading-7 mt-4 py-2">
              Let's Talk
            </a>
          </div>
        </nav>
      )}

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center space-x-3">
        <a href="#about" className="text-base font-semibold leading-7.5 px-4 py-2 hover:text-[#FF623E] transition-colors">About</a>
        <a href="#services" className="text-base font-semibold leading-7.5 px-4 py-2 hover:text-[#FF623E] transition-colors">Services</a>
        <a href="#projects" className="text-base font-semibold leading-7.5 px-4 py-2 hover:text-[#FF623E] transition-colors">Projects</a>
        <a href="#testimonials" className="text-base font-semibold leading-7.5 px-4 py-2 hover:text-[#FF623E] transition-colors">Testimonials</a>
        <a href="#faq" className="text-base font-semibold leading-7.5 px-4 py-2 hover:text-[#FF623E] transition-colors">FAQ</a>
      </nav>

      {/* Let's Talk Button - Desktop */}
      <div className="hidden lg:flex">
        <a href="#contact" className="rounded-full w-[197px] h-11 bg-[#FF623E] text-white font-bold text-sm text-center leading-7 p-2 hover:bg-opacity-90 transition">
          Let's Talk
        </a>
      </div>

      {/* Toggle Button - Mobile */}
      <button onClick={() => setMenuOpen(true)} className="lg:hidden">
        <img
          src="../assets/icons/button-toggle.svg"
          alt="Toggle Menu Icon"
          className="block dark:hidden"
        />
        <img
          src="../assets/icons/button-toggle-dark.svg"
          alt="Toggle Menu Icon"
          className="hidden dark:block"
        />
      </button>
    </header>
  );
};

export default Header;