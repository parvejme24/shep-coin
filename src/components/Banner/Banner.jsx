// import React from "react";
// import BANNER_BG from "../../assets/banner-bg.png";
// import HEADING from "../../assets/heading.png";
// import BANNER_IMAGE from "../../assets/banner-image.png";
// import { FaArrowRight } from "react-icons/fa";

// export default function Banner() {
//   return (
//     <div
//       className="-mt-[110px] min-h-screen pb-28 bg-cover bg-center"
//       style={{ backgroundImage: `url(${BANNER_BG})` }}
//     >
//       <div className="max-w-7xl container mx-auto px-5 md:px-0 pt-36">
//         <div className="flex flex-col items-center justify-center h-full space-y-4">
//           <img
//             src={HEADING}
//             draggable="false"
//             alt="Heading"
//             className="w-auto max-w-full"
//           />
//           <img
//             src={BANNER_IMAGE}
//             alt="Banner"
//             className="mx-auto max-w-[450px] w-[450px]"
//             draggable="false"
//           />
//           <p className="tracking-[0.13em] font-halodick text-white text-center max-w-[600px] w-[600px]">
//             Every token helps make a difference for animal shelters worldwide.
//             Join our mission to support animals and create a vibrant,
//             community-driven ecosystem powered by cryptocurrency.
//           </p>
//           <button className="px-5 py-3 bg-white rounded-lg shadow-inner shadow-[#f12144a6] border-2 border-[#F12143] text-[#F12143] font-bold flex items-center gap-2">
//             LEARN MORE <FaArrowRight />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }


import React from "react";
import BANNER_BG from "../../assets/banner-bg.png";
import HEADING from "../../assets/heading.png";
import BANNER_IMAGE from "../../assets/banner-image.png";
import { FaArrowRight } from "react-icons/fa";

export default function Banner() {
  return (
    <div
      className="relative h-screen bg-cover bg-center flex items-center justify-center pb-36"
      style={{ backgroundImage: `url(${BANNER_BG})` }}
    >
      <div className="max-w-7xl container mx-auto px-5 md:px-10">
        <div className="flex flex-col items-center text-center space-y-6">
          {/* Heading Image */}
          <img
            src={HEADING}
            draggable="false"
            alt="Heading"
            className="w-auto max-w-full mt-36"
          />

          {/* Banner Image */}
          <img
            src={BANNER_IMAGE}
            alt="Banner"
            className="mx-auto max-w-[350px] md:max-w-[450px] w-full"
            draggable="false"
          />

          {/* Text Content */}
          <p className="tracking-[0.13em] font-halodick text-white px-4 max-w-[600px]">
            Every token helps make a difference for animal shelters worldwide.
            Join our mission to support animals and create a vibrant,
            community-driven ecosystem powered by cryptocurrency.
          </p>

          {/* CTA Button */}
          <button className="px-6 py-3 bg-white rounded-lg shadow-inner shadow-[#f12144a6] border-2 border-[#F12143] text-[#F12143] font-bold flex items-center gap-2 hover:bg-[#F12143] hover:text-white transition-all duration-300">
            LEARN MORE <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}
