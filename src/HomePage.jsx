import { useState } from "react";
import "src/index.css"
import Hero from "../src/components/main/Hero/Hero";
import Navbar from "components/main/Navbar"

import StarBackground from "components/main/StarBackground";
import Button_canvas from "components/main/Button_canvas";
import Planets from "../src/components/main/Planets/Planets";


import Technologies from "components/main/Technologies";


function HomePage() {
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const [isStarBackgroundVisible, setIsStarBackgroundVisible] = useState(true);
  const toggleStarBackground = () => {
    setIsStarBackgroundVisible(!isStarBackgroundVisible);
  };

  const userAgent = navigator.userAgent;
  const isSafari =
    userAgent.includes("Safari") && !userAgent.includes("Chrome");
  const isMobile = /Mobi/.test(userAgent);
  const isNonMobileSafari = isSafari && !isMobile;

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  return (
    <>
      {!isNonMobileSafari && isStarBackgroundVisible && <StarBackground />}

      <Navbar />
      <Hero />
     
      <Technologies />
     
     
     
      <Planets />

      <Button_canvas toggleStarBackground={toggleStarBackground} />

    </>
  );
}

export default HomePage;