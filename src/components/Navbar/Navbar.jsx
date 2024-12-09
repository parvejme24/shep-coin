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
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-5 px-4 md:px-0">
        {/* Logo */}
        <img src={LOGO} alt="Logo" className="w-24" />

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 font-comicsans text-gray-800">
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
          className="md:hidden text-gray-800 text-2xl"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#5EC8EE] shadow-md absolute w-full -mt-5">
          <ul className="flex flex-col items-center gap-6 py-4 font-comicsans text-gray-800">
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
