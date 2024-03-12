import { useState } from "react"
import "src/index.css"
import Hero from "components/main/Hero/Hero"
import Navbar from "components/main/Navbar"

import StarBackground from "components/main/StarBackground"
import Button_canvas from "components/main/Button_canvas"
import Planets from "components/main/Planets/Planets"


import Technologies from "components/main/Technologies"

const Home = () =>{
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  const [isStarBackgroundVisible, setIsStarBackgroundVisible] = useState(true);
  const toggleStarBackground = () => {
    setIsStarBackgroundVisible(!isStarBackgroundVisible);
  };

  const userAgent = navigator.userAgent;
  const isSafari =
    userAgent.includes("Safari") && !userAgent.includes("Chrome");
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

{/* /////////////////////////////////////////////////////////////////////////////////////////////////*/}
      {/* {!isNonMobileSafari && isStarBackgroundVisible && <StarBackground />} */}
      {!isNonMobileSafari && isStarBackgroundVisible && !(/iPad|iPod|Android/i.test(window.navigator.userAgent)) && <StarBackground />}
      <Button_canvas toggleStarBackground={toggleStarBackground} />
{/* //////////////////////////////////////////////////////////////////////////////////////////////// */}
  
    </>
  );
}

export default Home;

