// import { useState } from 'react'
import "../src/index.css";
import StarBackground from "../src/components/main/StarBackground";
import Navbar from "./components/main/Navbar";
import Hero from "./components/main/Hero";
// import Footer from "./components/main/Footer";
// import Encryption from './components/main/Encryption'
// import Skills from './components/main/Skills'
// import Test from './components/main/Test';
import Technologies from './components/main/Technologies';

function App() {
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const userAgent = navigator.userAgent;

  const isSafari = userAgent.includes('Safari') && !userAgent.includes('Chrome');

  const isMobile = /Mobi/.test(userAgent);
  const isNonMobileSafari = isSafari && !isMobile;
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  return (
    <>
      {!isNonMobileSafari && <StarBackground />}
      <Navbar />
      <Hero />
      <Technologies />
      <Technologies />
      {/* <Skills /> */}
      {/* <Encryption /> */}
      {/* <Footer /> */}
    </>
  );
}

export default App;
