import React from "react";
import HEADING from "../../assets/tokenomics/heading.png";
import DOG from "../../assets/tokenomics/dog.png";
import SHEP from "../../assets/tokenomics/shep.png";
import BG from "../../assets/tokenomics/tokenomic-bg.png";
import S1 from "../../assets/tokenomics/s1.png";
import S2 from "../../assets/tokenomics/s2.png";
import CIRCLE from "../../assets/tokenomics/circle.png";

export default function TokenOmics() {
  return (
    <div
      className="py-10 bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${BG})` }}
    >
      <div className="container mx-auto">
        <div className="flex flex-col items-center relative">
          <img src={DOG} alt="" draggable="false" />
          <img
            src={HEADING}
            alt=""
            className="absolute bottom-0"
            draggable="false"
          />
        </div>

        <div className="mt-10 relative w-full max-w-[600px] mx-auto">
          <p
            className="text-lg p-5 bg-no-repeat bg-center bg-cover font-halodick tracking-[0.02em] w-full max-w-[600px] mx-auto"
            style={{ backgroundImage: `url(${S1})` }}
          >
            The animal shelter fund will be managed based on community votes to
            ensure transparency and alignment with SHEP’s mission. Team tokens
            will be locked for one year and cannot be sold.
          </p>
          <img src={S2} alt="" className="absolute top-5 left-5 -z-10" />
        </div>

        <div>
          <img src={CIRCLE} alt="" className="mx-auto" draggable="false" />
        </div>
      </div>
    </div>
  );
}
