import React from "react";
import {
  FaTelegramPlane,
  FaTiktok,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

import FL_BG from "../../assets/footer/fl-bg.png";
import FD_BG from "../../assets/footer/fd-bg.png";
import FOOTER_IMG from "../../assets/footer/footer-image.png";

export default function Footer() {
  return (
    <div
      className="bg-cover bg-center text-white h-auto -mt-[100px] pt-1"
      style={{ backgroundImage: `url(${FL_BG})` }}
    >
      <div
        className="bg-cover bg-center text-white h-auto mt-1"
        style={{ backgroundImage: `url(${FD_BG})` }}
      >
        <div className="max-w-7xl container mx-auto px-4 py-10">
          {/* Logo and Social Links Section */}
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Logo */}
            <div className="mb-6 md:mb-0">
              <h2 className="text-3xl font-bold">LOGO</h2>
            </div>

            {/* Social Media Links */}
            <ul className="flex space-x-4 text-xl">
              <li>
                <a
                  href="#"
                  className="border border-white text-white p-1 rounded-full inline-block"
                  aria-label="Telegram"
                >
                  <FaTelegramPlane />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="border border-white text-white p-1 rounded-full inline-block"
                  aria-label="TikTok"
                >
                  <FaTiktok />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="border border-white text-white p-1 rounded-full inline-block"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="border border-white text-white p-1 rounded-full inline-block"
                  aria-label="Twitter"
                >
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="border border-white text-white p-1 rounded-full inline-block"
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp />
                </a>
              </li>
            </ul>

            <div className="">
              <img src={FOOTER_IMG} alt="" className="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
