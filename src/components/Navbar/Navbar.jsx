import React from "react";
import LOGO from "../../assets/logo.png";

export default function Navbar() {
  return (
    <div>
      <div className="container mx-auto flex justify-between items-center py-5">
        <img src={LOGO} alt="" />

        <ul className="flex items-center gap-8 font-comicsans">
          <li>
            <a href={"/"}>Home</a>
          </li>
          <li>
            <a href={"/"}>About Us</a>
          </li>
          <li>
            <a href={"/"}>Tokenomics</a>
          </li>
          <li>
            <a href={"/"}>FAQ</a>
          </li>
        </ul>

        <button className="px-4 py-2 font-halodick rounded-md bg-red-600 text-white">Apply for shelter assistance</button>
      </div>
    </div>
  );
}
