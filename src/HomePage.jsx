import Navbar from "src/components/main/Navbar"
import { useState } from "react"
import "src/index.css"
import Hero from "src/components/main/Hero/Hero"

import Button_canvas from "src/components/main/Button_canvas"
import StarBackground from "src/components/main/StarBackground"
import Planets from "src/components/main/Planets/Planets"

import Technologies from "src/components/main/Technologies"


function HomePage() {
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const [isStarBackgroundVisible, setIsStarBackgroundVisible] = useState(true);
  const toggleStarBackground = () => {
    setIsStarBackgroundVisible(!isStarBackgroundVisible);
  };

  const userAgent = navigator.userAgent;
  const isSafari =  userAgent.includes("Safari") && !userAgent.includes("Chrome");
  const isMobile = /Mobi/.test(userAgent);
  const isNonMobileSafari = isSafari && !isMobile;

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  return (
    <>
    
      <Navbar />    
      <Hero />
      <Technologies />
      <Planets />
      {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {!isNonMobileSafari && isStarBackgroundVisible && !(/iPad|iPod|Android/i.test(window.navigator.userAgent)) && <StarBackground />}
      <Button_canvas toggleStarBackground={toggleStarBackground} />
       {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////// */}
    </>
  );
}

export default HomePage;
