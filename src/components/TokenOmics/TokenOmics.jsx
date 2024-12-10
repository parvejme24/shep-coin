import React from "react";
import HEADING from "../../assets/tokenomics/heading.png";
import DOG from "../../assets/tokenomics/dog.png";
import CIRCLE from "../../assets/tokenomics/circle.png";
import G from "../../assets/tokenomics/g.png";
import FRAME from "../../assets/roadmap/frame.png";

export default function TokenOmics() {
  return (
    <div
      id="tokenomics"
      className="bg-[#026D90] border-t-8 border-white pb-20"
      style={{ backgroundImage: `url(${FRAME})` }}
    >
      <div className="max-w-7xl px-5 container mx-auto">
        <div className="relative flex justify-center">
          <img
            src={DOG}
            alt="Dog Illustration"
            className="mx-auto"
            draggable="false"
          />
          <img
            src={HEADING}
            alt="Heading"
            className="absolute bottom-0"
            draggable="false"
          />
        </div>

        <img
          src={G}
          alt="G Illustration"
          className="mx-auto mt-5"
          draggable="false"
        />

        <div className="mt-20 max-w-[800px] mx-auto relative font-halodick text-white tracking-wide">
          <img
            src={CIRCLE}
            alt="Circle Illustration"
            className="mx-auto py-16 md:py-32 w-[140px] md:w-1/2"
          />

          {/* Text Positioning */}
          <div className="absolute top-2 sm:top-16 left-1/2 transform -translate-x-1/2 text-center px-4">
            <p className="text-xs sm:text-base md:text-lg">
              Marketing & Partnerships: <br /> 5% (5 billion)
            </p>
          </div>

          <div className="absolute top-16 sm:top-1/3 left-5 text-center px-4">
            <p className="text-xs sm:text-base md:text-lg">
              Staking Rewards: <br /> 15% (15 billion)
            </p>
          </div>

          <div className="absolute top-20 sm:top-1/3 right-5 text-center px-4">
            <p className="text-xs sm:text-base md:text-lg">
              Airdrop: <br /> 20% (20 billion)
            </p>
          </div>

          <div className="absolute top-36 sm:top-1/2 left-5 text-center px-4">
            <p className="text-xs sm:text-base md:text-lg">
              Pre-Sale: <br /> 30% (30 billion)
            </p>
          </div>

          <div className="absolute top-52 sm:top-3/4 right-5 text-center px-4">
            <p className="text-xs sm:text-base md:text-lg">
              Shelter Fund: <br /> 30% (30 billion) Community voted
            </p>
          </div>
        </div>

        <p className="text-center font-halodick text-white mt-14 md:mt-10 px-4">
          Team: 5% (5 billion) - Locked for 1 year post-launch!
        </p>
      </div>
    </div>
  );
}
