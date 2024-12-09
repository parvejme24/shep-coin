import React from "react";
import HEADING from "../../assets/powful-world.png";

import H1BG from "../../assets/pawfulworld/h1-bg.png";
import H2BG from "../../assets/pawfulworld/h2-bg.png";
import H3BG from "../../assets/pawfulworld/h3-bg.png";
import H4BG from "../../assets/pawfulworld/h4-bg.png";

export default function PawfulWorld() {
  const data = [
    {
      id: 1,
      title: "Create your own Pawful world",
      titleBG: H1BG,
      features: [
        "Navigate through obstacles.",
        "complete tasks and unlock rewards in a thrilling puppy adventure.",
      ],
    },
    {
      id: 2,
      title: "adopt and customize",
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
      title: "Daily task & Challenges",
      titleBG: H3BG,
      features: [
        " Take on daily care tasks like feeding, walking, and playing fetch.",
        "Earn rewards for completing tasks.",
        "Compete with others on leaderboards.",
        "Showcase your dedication!",
      ],
    },
    {
      id: 4,
      title: "COMMUNITY ENGAGEMENT",
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
      <div className="container mx-auto">
        <img src={HEADING} alt="" className="mx-auto" />
        <p className="font-halodick font-light text-white mt-5 max-w-[800px] mx-auto text-center">
          At SHEP, we’re combining fun gameplay with real-world impact. Join us
          on a puppy-filled adventure where your actions in-game directly
          contribute to animal welfare. Here’s what you can expect:
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
          {data.map((item) => (
            <div key={item.id}>
              <h3 className="px-6 py-4 text-2xl uppercase font-semibold bg-no-repeat bg-cover" style={{ backgroundImage: `url(${item.titleBG})` }}>
                {item.title}
              </h3>
              <ol type="1">
                {item.features.map((listItem) => (
                  <li>{listItem}</li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
