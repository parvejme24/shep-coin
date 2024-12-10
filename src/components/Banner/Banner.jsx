import React from "react";
import BANNER_BG from "../../assets/banner-bg.png";
import HEADING from "../../assets/heading.png";
import BANNER_IMAGE from "../../assets/banner-image.png";
import { FaArrowRight } from "react-icons/fa";

export default function Banner() {
  return (
    <div
      id="home"
      className="overflow-hidden -mt-[110px] min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${BANNER_BG})` }}
    >
      <div className="max-w-7xl container mx-auto px-5 md:px-0 pt-36 pb-[100px]">
        <div className="flex flex-col items-center justify-center h-full space-y-4">
          <img
            src={HEADING}
            alt="Heading"
            className="w-full"
            draggable="false"
          />
          <img
            src={BANNER_IMAGE}
            alt="Banner"
            className="mx-auto max-w-[600px] w-[600px]"
            draggable="false"
          />
          <p className="font-halodick text-white text-center max-w-[600px]">
            Every token helps make a difference for animal shelters worldwide.
            Join our mission to support animals and create a vibrant,
            community-driven ecosystem powered by cryptocurrency.
          </p>
          <button className="px-5 py-3 bg-white rounded-lg shadow-inner shadow-[#f12144a6] border-2 border-[#F12143] text-[#F12143] font-bold flex items-center gap-2">
            LEARN MORE <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}
