import React, { useState } from "react";
import LOGO from "../../assets/logo.png";
import BTN_BG from "../../assets/nav/btn-bg.png";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="z-50 bg-transparent tracking-[0.14em]">
      <div className="max-w-7xl container mx-auto flex justify-between items-center py-5 px-5 md:px-0">
        {/* Logo */}
        <img src={LOGO} alt="Logo" className="w-24" draggable="false" />

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 font-halodick text-gray-100 font-light">
          <li>
            <a href="/" className="hover:text-red-500 transition duration-300">
              Home
            </a>
          </li>
          <li>
            <a href="/" className="hover:text-red-500 transition duration-300">
              About Us
            </a>
          </li>
          <li>
            <a href="/" className="hover:text-red-500 transition duration-300">
              Tokenomics
            </a>
          </li>
          <li>
            <a href="/" className="hover:text-red-500 transition duration-300">
              FAQ
            </a>
          </li>
        </ul>

        {/* Apply Button */}
        <button
          className="w-[250px] h-[45px] bg-no-repeat bg-cover bg-center hidden md:flex"
          style={{ backgroundImage: `url(${BTN_BG})` }}
        ></button>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-[#F12143] text-3xl"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#5EC8EE] shadow-md absolute w-full -mt-5 py-5">
          <ul className="flex flex-col items-center gap-3 py-4 font-halodick text-white">
            <li>
              <a
                href="/"
                className="hover:text-red-500 transition duration-300"
                onClick={toggleMenu}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/"
                className="hover:text-red-500 transition duration-300"
                onClick={toggleMenu}
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="/"
                className="hover:text-red-500 transition duration-300"
                onClick={toggleMenu}
              >
                Tokenomics
              </a>
            </li>
            <li>
              <a
                href="/"
                className="hover:text-red-500 transition duration-300"
                onClick={toggleMenu}
              >
                FAQ
              </a>
            </li>
          </ul>

          {/* Mobile Apply Button */}
          <div className="flex justify-center">
            <button
              className="w-[250px] h-[45px] bg-no-repeat bg-cover bg-center"
              style={{ backgroundImage: `url(${BTN_BG})` }}
            ></button>
          </div>
        </div>
      )}
    </nav>
  );
}
