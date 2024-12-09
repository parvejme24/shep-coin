import React from "react";
import BANNER_BG from "../../assets/banner-bg.png";
import HEADING from "../../assets/heading.png";
import BANNER_IMAGE from "../../assets/banner-image.png";

export default function Banner() {
  return (
    <div
      className="-mt-[110px] min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${BANNER_BG})` }}
    >
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center h-full space-y-4">
          <img
            src={HEADING}
            alt="Heading"
            className="w-auto max-w-full absolute"
          />
          <img src={BANNER_IMAGE} alt="Banner" className="w-auto max-w-full" />
          <p className="font-halodick text-white">
            Every token helps make a difference for animal shelters worldwide.
            Join our mission to support animals and create a vibrant,
            community-driven ecosystem powered by cryptocurrency.
          </p>
          <button>LEARN MORE</button>
        </div>
      </div>
    </div>
  );
}
