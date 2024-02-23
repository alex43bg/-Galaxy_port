import { useState } from 'react'
import "../src/index.css"
import Hero from "./components/main/Hero"
import Navbar from "./components/main/Navbar"
// import Footer from "./components/main/Footer";
// import Encryption from './components/main/Encryption'
// import Skills from './components/main/Skills'
// import Test from './components/main/Test';
import Card from "./components/main/Card"
import Slider from "./components/main/Slider"
import Technologies from "./components/main/Technologies"
import StarBackground from "../src/components/main/StarBackground";
import Button_canvas from './components/main/Button_canvas'

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
      {/* {!isNonMobileSafari && <StarBackground />} */}
      <Navbar />
      <Hero />
      <Technologies />
      <Slider />
      <Card />
      <Button_canvas toggleStarBackground={toggleStarBackground} />
      {!isNonMobileSafari && isStarBackgroundVisible && <StarBackground />}
      {/* <Skills /> */}
      {/* <Encryption /> */}
      {/* <Footer /> */}
    </>
  );
}

export default App;
