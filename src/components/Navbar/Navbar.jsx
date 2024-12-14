import React, { useState, useEffect } from "react";
import LOGO from "../../assets/logo.png";
import BTN_BG from "../../assets/nav/btn-bg.png";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`z-50 fixed top-0 left-0 w-full tracking-[0.14em] transition-colors duration-300 ${
        isScrolled ? "bg-[#044054]" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl container mx-auto flex justify-between items-center py-5 px-5 lg:px-0">
        {/* Logo */}
        <img src={LOGO} alt="Logo" className="w-36" draggable="false" />

        {/* Desktop Menu */}
        <ul className="outline-effect-nav hidden lg:flex items-center gap-8 font-halodick text-gray-100 font-light">
          <li>
            <a
              href="#home"
              className="hover:text-red-500 transition duration-300"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="hover:text-red-500 transition duration-300"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#tokenomics"
              className="hover:text-red-500 transition duration-300"
            >
              Tokenomics
            </a>
          </li>
          <li>
            <a
              href="#roadmap"
              className="hover:text-red-500 transition duration-300"
            >
              Roadmap
            </a>
          </li>
          <li>
            <a
              href="#faq"
              className="hover:text-red-500 transition duration-300"
            >
              FAQ
            </a>
          </li>
        </ul>

        {/* Apply Button */}
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSfYGn6ocM1p2dU2lMg1ibEPKof40-bIAgUqXabNJkhL1tFvDQ/viewform"
          target="_blank"
          rel="noopener noreferrer"
          className="w-[250px] h-[45px] bg-no-repeat bg-cover bg-center hidden lg:flex"
          style={{ backgroundImage: `url(${BTN_BG})` }}
        ></a>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden text-[#F12143] text-3xl"
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-[#5EC8EE] shadow-md absolute w-full py-5 top-[100%]">
          <ul className="outline-effect-nav flex flex-col items-center gap-3 py-4 font-halodick text-white">
            <li>
              <a
                href="#home"
                className="hover:text-red-500 transition duration-300"
                onClick={toggleMenu}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:text-red-500 transition duration-300"
                onClick={toggleMenu}
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#tokenomics"
                className="hover:text-red-500 transition duration-300"
                onClick={toggleMenu}
              >
                Tokenomics
              </a>
            </li>
            <li>
              <a
                href="#roadmap"
                className="hover:text-red-500 transition duration-300"
                onClick={toggleMenu}
              >
                Roadmap
              </a>
            </li>
            <li>
              <a
                href="#faq"
                className="hover:text-red-500 transition duration-300"
                onClick={toggleMenu}
              >
                FAQ
              </a>
            </li>
          </ul>

          {/* Mobile Apply Button */}
          <div className="flex justify-center">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfYGn6ocM1p2dU2lMg1ibEPKof40-bIAgUqXabNJkhL1tFvDQ/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[250px] h-[45px] bg-no-repeat bg-cover bg-center"
              style={{ backgroundImage: `url(${BTN_BG})` }}
            ></a>
          </div>
        </div>
      )}
    </nav>
  );
}
