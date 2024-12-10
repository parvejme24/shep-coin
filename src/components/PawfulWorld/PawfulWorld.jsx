import React from "react";
import HEADING from "../../assets/powful-world.png";
import H1BG from "../../assets/pawfulworld/h1-bg.png";
import H2BG from "../../assets/pawfulworld/h2-bg.png";
import H3BG from "../../assets/pawfulworld/h3-bg.png";
import H4BG from "../../assets/pawfulworld/h4-bg.png";

import LOGO_IMG from "../../assets/footer/logo-img.png";

export default function PawfulWorld() {
  const data = [
    {
      id: 1,
      title: "Create your own Pawful world",
      titleBG: H1BG,
      features: [
        "Navigate through obstacles.",
        "Complete tasks and unlock rewards in a thrilling puppy adventure.",
      ],
    },
    {
      id: 2,
      title: "Adopt and Customize",
      titleBG: H2BG,
      features: [
        "Adopt a virtual puppy.",
        "Customize it with unique accessories.",
        "Interact with it daily.",
        "Enjoy its unique personality and needs.",
        "Make it truly yours!",
      ],
    },
    {
      id: 3,
      title: "Daily Task & Challenges",
      titleBG: H3BG,
      features: [
        "Take on daily care tasks like feeding, walking, and playing fetch.",
        "Earn rewards for completing tasks.",
        "Compete with others on leaderboards.",
        "Showcase your dedication!",
      ],
    },
    {
      id: 4,
      title: "Community Engagement",
      titleBG: H4BG,
      features: [
        "Participate in community-driven events.",
        "Collaborate to achieve group goals and unlock rewards.",
        "Complete challenges to win tokens.",
        "Interact with other users to grow the SHEP community.",
      ],
    },
  ];

  return (
    <div className="bg-[#1788A8] py-[150px]">
      <div className="max-w-7xl container mx-auto px-5 lg:px-0">
        <img src={HEADING} alt="" className="mx-auto" draggable="false" />
        <p className="tracking-[0.13em] font-halodick font-light text-white mt-5 max-w-[800px] mx-auto text-center">
          At SHEP, we’re combining fun gameplay with real-world impact. Join us
          on a puppy-filled adventure where your actions in-game directly
          contribute to animal welfare. Here’s what you can expect:
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-14">
          {data.map((item) => (
            <div key={item.id}>
              <h3
                className="relative px-6 py-4 lg:text-xl h-20 bg-contain uppercase font-halodick text-white font-semibold bg-no-repeat tracking-[0.18em] flex items-center"
                style={{ backgroundImage: `url(${item.titleBG})` }}
              >
                {item.title}
                <img
                  src={LOGO_IMG}
                  alt=""
                  className="w-14 absolute -top-6 -left-6"
                  draggable="false"
                />
              </h3>
              <ol className="mt-4 font-halodick tracking-[0.08em] space-y-2 list-decimal ml-6 text-white ">
                {item.features.map((listItem, index) => (
                  <li key={index}>{listItem}</li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
