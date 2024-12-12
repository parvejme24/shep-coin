import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import FRAME from "../../assets/roadmap/frame.png";
import PAW from "../../assets/roadmap/paw.png";
import TITLE from "../../assets/roadmap/title.png";
import P1 from "../../assets/roadmap/p1.png";
import P2 from "../../assets/roadmap/p2.png";
import P3 from "../../assets/roadmap/p3.png";
import P4 from "../../assets/roadmap/p4.png";
import DOG from "../../assets/roadmap/dog.png";
import BOTTOM_FRAME from "../../assets/roadmap/bottom-frame.png";

export default function RoadMap() {
  const data = [
    {
      id: 1,
      image: P1,
      title: "Partnership & Development",
      features: [
        "Forge partnerships with animal shelters",
        "Establish social media presence",
        "Forming of community-led team",
      ],
    },
    {
      id: 2,
      image: P2,
      title: "Community & Pre-Sale",
      features: [
        "Launch the SHEP gaming ecosystem, Pawful World",
        "Host pre-sale event to distribute SHEP tokens",
        "Initiate Airdrop campaigns",
        "Launch staking programs",
      ],
    },
    {
      id: 3,
      image: P3,
      title: "Expansion & Gameplay",
      features: [
        "Expand animal shelter collaborations globally",
        "Organise community challenges and reward events",
      ],
    },
    {
      id: 4,
      image: P4,
      title: "Long-Term Growth",
      features: [
        "Scale SHEP globally by onboarding more partners and shelters",
        "Enhance gameplay with new features and community-driven updates",
        "Build long-lasting partnerships in crypto and animal welfare sectors",
      ],
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <div
      id="roadmap"
      className="relative bg-[#19809D] bg-no-repeat bg-center bg-cover pt-10 pb-[400px] border-t-8 border-white"
      style={{ backgroundImage: `url(${FRAME})` }}
    >
      <div className="max-w-7xl container mx-auto px-10 lg:px-0">
        <div className="flex flex-col items-center relative">
          <img src={PAW} alt="" draggable="false" />
          <img
            src={TITLE}
            alt=""
            className="absolute bottom-5"
            draggable="false"
            data-aos="fade-up"
          />
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {data.map((item, index) => (
            <div
              key={item.id}
              className={`${
                index === 1 ? "lg:mt-[200px] md:mt-[50px] mt-0" : ""
              } ${index === 3 ? "lg:mt-[400px] md:mt-[100px] mt-0" : ""}`}
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              <img
                src={item.image}
                alt=""
                draggable="false"
                data-aos="zoom-in"
              />
              <div data-aos="fade-up" data-aos-delay={index * 300}>
                <h3 className="outline-effect text-2xl mt-5 font-halodick text-white tracking-widest">
                  {item.title}
                </h3>
                <ul className="mt-3 list-disc text-white font-mono text-lg space-y-2">
                  {item.features.map((oneFeature, i) => (
                    <li key={i}>{oneFeature}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute -bottom-3 w-[100%]">
        <div className="flex items-center relative">
          <img
            src={DOG}
            alt=""
            className="w-[250px] md:w-[400px] absolute left-0 -bottom-6"
            draggable="false"
            data-aos="fade-right"
            data-aos-duration="1500"
          />
          <img
            src={BOTTOM_FRAME}
            alt=""
            className="w-full h-[180px] md:h-[300px]"
            draggable="false"
          />
        </div>
      </div>
    </div>
  );
}
