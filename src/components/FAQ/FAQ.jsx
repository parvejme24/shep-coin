import React, { useState, useEffect } from "react";
import FAQIMAGE from "../../assets/faq/faq.png";
import FAQ_BG from "../../assets/faq/faq-bg.png";
import FAQ_A_BG from "../../assets/faq/a-bg.png";
import FAQ_Q_BG from "../../assets/faq/q-bg.png";
import AOS from "aos";
import "aos/dist/aos.css";

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      id: 1,
      question: "What is SHEP Token?",
      answer:
        "SHEP is a cryptocurrency built on the Cronos blockchain, focused on supporting animal shelters worldwide through community involvement and entertainment.",
    },
    {
      id: 2,
      question: "How does SHEP support animal shelters?",
      answer:
        "A portion of the token supply (20%) is allocated to a Shelter Fund, which is managed by the community through voting.",
    },
    {
      id: 3,
      question: "How can I acquire SHEP tokens?",
      answer:
        "You can obtain SHEP tokens through the pre-sale, airdrops, or trade on decentralised exchanges.",
    },
    {
      id: 4,
      question: "What makes SHEP unique?",
      answer:
        "SHEP combines animal welfare advocacy with a cryptocurrency model, creating a fun, interactive platform for users to engage with and support shelters.",
    },
    {
      id: 5,
      question: "How is the team allocation handled?",
      answer:
        "5% of tokens are reserved for the team, with a one-year lock period to ensure long-term commitment.",
    },
  ];

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div
      id="faq"
      className="pt-20 pb-[300px] bg-[#1788A8] bg-cover bg-center border-t-8 border-white mt-4"
      style={{ backgroundImage: `url(${FAQ_BG})` }}
    >
      <div className="max-w-7xl px-5 lg:px-0 container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left Section */}
        <div className="mx-auto lg:mx-0 w-full flex justify-center">
          <img
            src={FAQIMAGE}
            alt="FAQ"
            draggable="false"
            className="max-w-[350px] sm:max-w-[400px] md:max-w-[450px] lg:max-w-[500px] px-5 lg:px-0"
            data-aos="fade-right"
          />
        </div>

        {/* Right Section */}
        <div className="mx-auto lg:mx-0 w-full">
          {faqData.map((faq, index) => (
            <div key={faq.id} data-aos="fade-up" className="mb-6">
              {/* Question Section */}
              <button
                onClick={() => toggleFAQ(index)}
                className="uppercase font-halodick text-white w-full text-left font-semibold text-lg py-5 px-8 transition duration-300 flex items-center gap-3"
                style={{
                  backgroundImage: `url(${FAQ_Q_BG})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
                data-aos="flip-up"
              >
                <div className="w-1 h-1 bg-white rounded-full"></div>
                <p className="tracking-[0.14em]">{faq.question}</p>
              </button>

              {/* Answer Section */}
              {activeIndex === index && (
                <div
                  className=" max-h-[200px] sm:max-h-[300px] md:max-h-[400px] ml-2"
                  style={{
                    backgroundImage: `url(${FAQ_A_BG})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                  data-aos="fade-up"
                >
                  <p className="text-gray-700 p-5 font-mono font-semibold text-sm sm:text-base md:text-lg">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
