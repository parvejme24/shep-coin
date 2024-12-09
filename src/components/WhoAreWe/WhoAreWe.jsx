import React from "react";
import WhoWeAreBG from "../../assets/whoWeAreBG.png";

export default function WhoAreWe() {
  return (
    <div
      className="bg-cover bg-center min-h-[200px] flex justify-center items-center"
      style={{ backgroundImage: `url(${WhoWeAreBG})` }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 items-center">
        <div>
          <h2 className="font-halodick">Who We Are</h2>
        </div>
        <div>
          <p>
            We are committed to supporting animal shelters globally, with a
            focus on Southeast Asia. Through our SHEP token, we aim to make a
            real-world impact by providing funding and resources to shelters,
            while also creating an engaging ecosystem for the community.
          </p>
        </div>
      </div>
    </div>
  );
}
