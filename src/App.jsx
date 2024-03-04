import { useState } from "react";
import "../src/index.css";
import Hero from "./components/main/Hero";
import Navbar from "./components/main/Navbar";

// import Encryption from './components/main/Encryption'
// import Skills from './components/main/Skills'
// import Test from './components/main/Test';
import StarBackground from "../src/components/main/StarBackground";
import Button_canvas from "./components/main/Button_canvas";
import Planets from "./components/main/CardHover/Planets";
// import Pin from './components/main/Pin/Pin'
// import Slider from "./components/main/Slider"

import Technologies from "./components/main/Technologies";
import D3dCard from './components/D3dCard'
// import Text_animations from "./components/main/Text_animations/Text_animations";
// import Run_text from './components/main/Run_text'


// import ThreeDCardDemo from "./components/main/Card-3dTest"
// import CssSlider from './components/cssSlider';

function App() {
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
      {/* <Text_animations /> */}
      <Technologies />
      <D3dCard />
      {/* <CssSlider /> */}
      {/* <Run_text /> */}
      {/* <Slider /> */}
      {/* <Pin /> */}
      <Planets />

      <Button_canvas toggleStarBackground={toggleStarBackground} />

      {/* <Skills /> */}
      {/* <Encryption /> */}
      {/* <Footer /> */}
    </>
  );
}

export default App;
