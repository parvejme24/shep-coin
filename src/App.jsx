import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Banner from "./components/Banner/Banner";
import FAQ from "./components/FAQ/FAQ";
// import RoadMap from "./components/RoadMap/RoadMap";
// import GamePlay from "./components/GamePlay/GamePlay";
// import TokenOmics from "./components/TokenOmics/TokenOmics";
import WhoAreWe from "./components/WhoAreWe/WhoAreWe";
import PawfulWorld from "./components/PawfulWorld/PawfulWorld";
import Shep from "./components/Shep/Shep";

export default function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Shep />
      <WhoAreWe />
      {/* <TokenOmics /> */}
      {/* <GamePlay /> */}
      <PawfulWorld />
      {/* <RoadMap /> */}
      <FAQ />
      <Footer />
    </div>
  );
}
