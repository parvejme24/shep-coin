import React from "react";
import {
  FaTelegramPlane,
  FaTiktok,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
  FaDiscord,
} from "react-icons/fa";

import FL_BG from "../../assets/footer/fl-bg.png";
import FD_BG from "../../assets/footer/fd-bg.png";
import FOOTER_IMG from "../../assets/footer/footer-image.png";
import LOGO_IMG from "../../assets/footer/logo-img.png";
import LOGO_TXT from "../../assets/footer/logo-txt.png";

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
        <div className="max-w-7xl px-5 lg:px-0 container mx-auto pt-20 pb-10 md:py-[200px] relative">
          {/* Logo and Social Links Section */}
          <div className="md:grid md:grid-cols-3 flex flex-wrap justify-center items-center gap-5 md:gap-10">
            {/* Logo */}
            <div className="mb-6 md:mb-0 flex items-center">
              <img src={LOGO_IMG} alt="" className="w-16" />
              <img src={LOGO_TXT} alt="" className="w-14" />
            </div>

            {/* Social Media Links */}
            <div className="w-full flex justify-center md:w-auto ml-5 md:mx-0">
              <ul className="flex space-x-4 text-xl">
                <li>
                  <a
                    href="https://t.me/Shepchain"
                    target="_blank"
                    className="border border-white text-white p-1 rounded-full inline-block"
                    aria-label="Telegram"
                  >
                    <FaTelegramPlane />
                  </a>
                </li>
                <li>
                  <a
                    href="https://x.com/shepchain"
                    target="_blank"
                    className="border border-white text-white p-1 rounded-full inline-block"
                    aria-label="Twitter"
                  >
                    <FaTwitter />
                  </a>
                </li>
                <li>
                  <a
                    href="https://discord.com/invite/9gsBaMGBv2"
                    target="_blank"
                    className="border border-white text-white p-1 rounded-full inline-block"
                    aria-label="WhatsApp"
                  >
                    <FaDiscord />
                  </a>
                </li>
              </ul>
            </div>

            <div className="">
              <img
                src={FOOTER_IMG}
                alt=""
                className="w-[50%] sm:w-[40%] md:w-[35%] lg:w-[35%] mx-auto md:absolute bottom-28 right-0"
                draggable="false"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
