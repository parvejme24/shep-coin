import React from "react";
import HEADING from "../../assets/whoWeAre/whoWeAre-title.png";
import BG from "../../assets/whoWeAre/whoWeAreBG.png";
import SHEP from "../../assets/whoWeAre/shep.png";

export default function WhoAreWe() {
  return (
    <div
      className="-mt-14 bg-[#3199BB] bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url(${BG})` }}
    >
      <div className="max-w-7xl container mx-auto px-5 lg:px-0 py-20 grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
        <img src={HEADING} alt="" />

        <p
          className="p-6 bg-no-repeat bg-cover h-[200px] font-mono text-md font-semibold"
          style={{ backgroundImage: `url(${SHEP})` }}
        >
          We are committed to supporting animal shelters globally, with a focus
          on Southeast Asia. Through our SHEP token, we aim to make a real-world
          impact by providing funding and resources to shelters, while also
          creating an engaging ecosystem for the community.
        </p>
      </div>
    </div>
  );
}
