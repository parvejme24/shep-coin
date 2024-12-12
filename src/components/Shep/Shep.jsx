import React, { useEffect } from "react";
import SHEPIMAGE from "../../assets/shep/shep.png";
import smoothscroll from "smoothscroll-polyfill";

export default function Shep() {
  useEffect(() => {
    smoothscroll.polyfill();
  }, []);

  return (
    <div className="-mt-10 -ml-10">
      <img
        src={SHEPIMAGE}
        className="w-full md:h-[150px] rounded-lg shadow-xl"
        alt="Shep"
        draggable="false"
      />
    </div>
  );
}
