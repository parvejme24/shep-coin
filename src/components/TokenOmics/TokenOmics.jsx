import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import smoothscroll from "smoothscroll-polyfill";
import HEADING from "../../assets/tokenomics/heading.png";
import DOG from "../../assets/tokenomics/dog.png";
import CIRCLE from "../../assets/tokenomics/circle.png";
import G from "../../assets/tokenomics/g.png";
import FRAME from "../../assets/roadmap/frame.png";
import TOKENOMIC_ITEM from "../../assets/tokenomics/items.png";

export default function TokenOmics() {
  useEffect(() => {
    smoothscroll.polyfill();
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div
      id="tokenomics"
      className="bg-[#026D90] border-t-8 border-white pb-20"
      style={{ backgroundImage: `url(${FRAME})` }}
    >
      <div className="max-w-7xl px-5 container mx-auto">
        {/* Dog Illustration with AOS Animation */}
        <div
          className="relative flex justify-center"
          data-aos="fade-up"
          data-aos-delay="100"
        >
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

        {/* G Illustration with AOS Animation */}
        <img
          src={G}
          alt="G Illustration"
          className="mx-auto mt-5"
          draggable="false"
          data-aos="zoom-in"
          data-aos-delay="200"
        />

        {/* Token Distribution Chart with AOS Animation */}
        {/* <div
          className="mt-20 max-w-[800px] mx-auto relative font-halodick text-white tracking-wide"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <img
            src={CIRCLE}
            alt="Circle Illustration"
            className="mx-auto py-16 md:py-32 w-[140px] md:w-1/2"
            draggable="false"
          />

          <div className="absolute top-4 left-48 sm:top-16 md:left-96 lg:left-1/2 transform -translate-x-1/2 text-center px-4">
            <p className="text-[10px] sm:text-base md:text-lg outline-effect">
              Marketing & Partnerships: <br /> 5% (5 billion)
            </p>
          </div>

          <div className="absolute md:top-32 lg:top-28 top-14 -left-2 md:left-16 lg:left-24 text-center px-4 ">
            <p className="text-[10px] sm:text-base md:text-lg outline-effect">
              Staking Rewards: <br /> 15% (15 billion)
            </p>
          </div>

          <div className="absolute top-20 sm:top-1/3 -right-3 md:right-4 text-center px-4">
            <p className="text-[10px] sm:text-base md:text-lg outline-effect">
              Airdrop: <br /> 20% (20 billion)
            </p>
          </div>

          <div className="absolute top-36 sm:top-1/2 -left-2 md:left-5 text-center px-4">
            <p className="text-[10px] sm:text-base md:text-lg outline-effect">
              Pre-Sale: <br /> 30% (30 billion)
            </p>
          </div>

          <div className="absolute top-52 sm:top-3/4 right-5 text-center px-4">
            <p className="text-[10px] sm:text-base md:text-lg outline-effect">
              Shelter Fund: <br /> 30% (30 billion) Community voted
            </p>
          </div>
        </div> */}

        <div className="my-20 flex justify-center">
          <img src={TOKENOMIC_ITEM} alt="" draggable="false" />
        </div>

        {/* Team Section with AOS Animation */}
        <p className="text-center font-halodick text-white mt-14 md:mt-10 px-4 outline-effect">
          Team: 5% (5 billion) - Locked for 1 year post-launch!
        </p>
      </div>
    </div>
  );
}
