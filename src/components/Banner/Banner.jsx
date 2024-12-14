import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import BANNER_BG from "../../assets/banner-bg.png";
import HEADING from "../../assets/heading.png";
import BANNER_IMAGE from "../../assets/banner-image.png";
import { FaArrowRight } from "react-icons/fa";

export default function Banner() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div
      id="home"
      className="-mt-[110px] bg-cover bg-center min-h-screen"
      style={{ backgroundImage: `url(${BANNER_BG})` }}
    >
      <div className="max-w-7xl container mx-auto px-5 md:px-0 pt-56 pb-[100px]">
        <div className="flex flex-col items-center justify-center h-full space-y-4">
          {/* Heading Image */}
          <img
            data-aos="fade-down"
            src={HEADING}
            alt="Heading"
            className="w-full"
            draggable="false"
          />

          {/* Banner Image */}
          <img
            data-aos="zoom-in"
            src={BANNER_IMAGE}
            alt="Banner"
            className="mx-auto md:max-w-[600px] md:w-[600px] ml-5 md:ml-auto"
            draggable="false"
          />

          {/* Description */}
          <p
            data-aos="fade-up"
            className="font-halodick text-2xl font-semibold text-white text-center max-w-[900px] outline-effect"
          >
            Every token helps make a difference for animal shelters worldwide.
            Join our mission to support animals and create a vibrant,
            community-driven ecosystem powered by cryptocurrency.
          </p>

          {/* Learn More Button */}
          <button
            data-aos="fade-up"
            className="px-5 py-3 bg-white rounded-lg shadow-inner shadow-[#f12144a6] border-2 border-[#F12143] text-[#F12143] font-bold flex items-center gap-2"
            onClick={() =>
              document
                .getElementById("about")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            LEARN MORE <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}
