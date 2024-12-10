import React from "react";
import SHEPIMAGE from "../../assets/shep/shep.png";

export default function Shep() {
  return (
    <div className="-mt-10 -ml-10">
      <img src={SHEPIMAGE} className="w-full md:h-[150px]" alt="" draggable="false"  />
    </div>
  );
}
