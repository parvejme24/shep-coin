import React from "react";
import HEADING from "../../assets/powful-world.png";
import H1BG from "../../assets/pawfulworld/h1-bg.png";
import H2BG from "../../assets/pawfulworld/h2-bg.png";
import H3BG from "../../assets/pawfulworld/h3-bg.png";
import H4BG from "../../assets/pawfulworld/h4-bg.png";
import PAW from "../../assets/pawfulworld/paw.png";
import BG from "../../assets/pawfulworld/bg.png";
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
    <div
      className="bg-[#1788A8] py-20 border-t-8 border-white bg-no-repeat bg-center bg-cover"
      style={{ backgroundImage: `url(${BG})` }}
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        {/* Header Image */}
        <div className="relative flex justify-center">
          <img
            src={PAW}
            alt=""
            className="mx-auto w-[150px]"
            draggable="false"
          />
          <img
            src={HEADING}
            alt="Pawful World"
            className="mx-auto w-full max-w-[400px] absolute bottom-3"
            draggable="false"
          />
        </div>

        {/* Description */}
        <p className="tracking-[0.13em] font-halodick font-light text-white mt-5 max-w-[800px] mx-auto text-center text-sm md:text-base lg:text-lg">
          At SHEP, we’re combining fun gameplay with real-world impact. Join us
          on a puppy-filled adventure where your actions in-game directly
          contribute to animal welfare. Here’s what you can expect:
        </p>

        {/* Features Grid */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-16">
          {data.map((item) => (
            <div key={item.id}>
              {/* Title Section */}
              <div className="relative flex items-center justify-center">
                <h3 className="absolute uppercase font-halodick text-white font-semibold tracking-[0.18em] text-center text-base lg:text-xl">
                  {item.title}
                </h3>
                <img
                  src={item.titleBG}
                  alt=""
                  className="h-[60px] w-full"
                  draggable="false"
                />
                <img
                  src={LOGO_IMG}
                  alt="Logo"
                  className="w-10 lg:w-14 absolute -top-4 -left-4 lg:-top-6 lg:-left-6"
                  draggable="false"
                />
              </div>

              {/* Features List */}
              <ol className="mt-4 font-halodick tracking-[0.08em] space-y-2 list-decimal pl-6 text-white text-sm md:text-base">
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
