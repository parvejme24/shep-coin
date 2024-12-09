import React, { useState } from "react";
import FAQ_BG from "../../assets/faq/faq-bg.png";
import FAQ_A_BG from "../../assets/faq/a-bg.png";
import FAQ_Q_BG from "../../assets/faq/q-bg.png";

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      id: 1,
      question: "What is SHEP token?",
      answer:
        "SHEP is a cryptocurrency built on the Solana blockchain, focused on supporting animal shelters worldwide through community involvement and entertainment.",
    },
    {
      id: 2,
      question: "How does SHEP token support animal shelters?",
      answer:
        "Through transactions and community activities, a portion of the SHEP token’s proceeds is donated to animal shelters globally.",
    },
    {
      id: 3,
      question: "Is SHEP token secure?",
      answer:
        "Yes, SHEP leverages the Solana blockchain for security, speed, and efficiency, ensuring safe transactions.",
    },
    {
      id: 4,
      question: "How can I buy SHEP tokens?",
      answer:
        "You can purchase SHEP tokens on supported cryptocurrency exchanges or through its official website.",
    },
    {
      id: 5,
      question: "What makes SHEP unique?",
      answer:
        "SHEP is not just a cryptocurrency; it’s a community-driven initiative aimed at creating social impact by helping animal shelters worldwide.",
    },
    {
      id: 6,
      question: "Can I stake SHEP tokens?",
      answer:
        "Yes, staking options for SHEP tokens are available on select platforms, allowing users to earn rewards.",
    },
  ];

  return (
    <div
      className="py-20 bg-[#1788A8] bg-cover bg-center"
      style={{ backgroundImage: `url(${FAQ_BG})` }}
    >
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left Section */}
        <div className="mx-auto lg:mx-0">
          <h2 className="text-white text-4xl font-bold">
            Frequently Asked Questions
          </h2>
          <p className="text-white mt-4">
            Find answers to the most commonly asked questions about SHEP token.
          </p>
        </div>

        {/* Right Section */}
        <div className="mx-auto lg:mx-0">
          {faqData.map((faq, index) => (
            <div key={faq.id} className="mb-6">
              {/* Question Section */}
              <button
                onClick={() => toggleFAQ(index)}
                className="uppercase font-halodick text-white w-full text-left font-semibold text-lg py-5 px-8 transition duration-300 flex items-center gap-3"
                style={{
                  backgroundImage: `url(${FAQ_Q_BG})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "",
                }}
              >
                <div className="w-1 h-1 bg-white rounded-full"></div> {faq.question}
              </button>

              {/* Answer Section */}
              {activeIndex === index && (
                <p
                  className="-mt-4 max-w-[600px] text-gray-700 p-5 font-comicsans"
                  style={{
                    backgroundImage: `url(${FAQ_A_BG})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                >
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
