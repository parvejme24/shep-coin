import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import HEADING from "../../assets/whoWeAre/whoWeAre-title.png";
import BG from "../../assets/whoWeAre/whoWeAreBG.png";
import SHEP from "../../assets/whoWeAre/shep.png";

export default function WhoAreWe() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div
      id="about"
      className="-mt-10 bg-[#3199BB] bg-no-repeat bg-cover bg-center py-36 lg:py-20"
      style={{ backgroundImage: `url(${BG})` }}
    >
      <div className="max-w-7xl container mx-auto px-5 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Heading Image with AOS Animation */}
        <img
          src={HEADING}
          alt="Who We Are"
          draggable="false"
          className="w-auto max-w-full mx-auto lg:mx-0"
          data-aos="fade-down"
        />

        {/* Description with Background and AOS Animation */}
        <div
          className="bg-no-repeat bg-cover bg-center p-6 text-black rounded-lg shadow-md max-w-[600px] mx-auto"
          style={{ backgroundImage: `url(${SHEP})` }}
          data-aos="fade-up"
        >
          <p className="font-mono text-sm md:text-base lg:text-lg font-semibold leading-relaxed">
            We are committed to supporting animal shelters globally, with a
            focus on Southeast Asia. Through our SHEP token, we aim to make a
            real-world impact by providing funding and resources to shelters,
            while also creating an engaging ecosystem for the community.
          </p>
        </div>
      </div>
    </div>
  );
}
