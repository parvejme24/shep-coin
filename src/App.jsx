import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Banner from "./components/Banner/Banner";
import FAQ from "./components/FAQ/FAQ";
import RoadMap from "./components/RoadMap/RoadMap";
import TokenOmics from "./components/TokenOmics/TokenOmics";
import WhoAreWe from "./components/WhoAreWe/WhoAreWe";
import PawfulWorld from "./components/PawfulWorld/PawfulWorld";
import Shep from "./components/Shep/Shep";
import { Cube } from "react-preloaders";

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {!isLoaded ? (
        <div>
          <Cube />
        </div>
      ) : (
        <>
          <Navbar />
          <Banner />
          <Shep />
          <WhoAreWe />
          <TokenOmics />
          <PawfulWorld />
          <RoadMap />
          <FAQ />
          <Footer />
        </>
      )}
    </div>
  );
}
