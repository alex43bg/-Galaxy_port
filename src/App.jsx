import { useState } from 'react'
import "../src/index.css"
import Hero from "./components/main/Hero"
import Navbar from "./components/main/Navbar"

// import Encryption from './components/main/Encryption'
// import Skills from './components/main/Skills'
// import Test from './components/main/Test';
import StarBackground from "../src/components/main/StarBackground"
import Button_canvas from './components/main/Button_canvas'
import EvervaultCardDemo from "./components/main/CardHover/CardHover"
import Pin from './components/main/Pin/Pin'
// import Slider from "./components/main/Slider"

import Technologies from "./components/main/Technologies"

// import ThreeDCardDemo from "./components/main/Card-3dTest"

function App() {
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const [isStarBackgroundVisible, setIsStarBackgroundVisible] = useState(true);
  const toggleStarBackground = () => {
    setIsStarBackgroundVisible(!isStarBackgroundVisible);
  };
 
  const userAgent = navigator.userAgent;
  const isSafari = userAgent.includes('Safari') && !userAgent.includes('Chrome');
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
     
      {/* <Slider /> */}
      <Pin />
      <EvervaultCardDemo />
      <Button_canvas toggleStarBackground={toggleStarBackground} />
      
      {/* <Skills /> */}
      {/* <Encryption /> */}
      {/* <Footer /> */}
    </>
  );
}

export default App;
