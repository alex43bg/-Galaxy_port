import React, { useState, useEffect } from "react";
import HeroContent from "../sub/HeroContent";

const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full" id="about-me">
      <video
        autoPlay
        muted
        loop
        className="
        animate-custom-fade-in
        z-[-2]
        rotate-180 
        absolute 
        top-[-700px] 
        640:top-[-700px] 
        668:top-[-700px] 
        768:top-[-235px]
        1060:top-[-240px]
        1080:top-[-235px]
        1100:top-[-275px]
        1200:top-[-340px] 
        h-full 
        w-full 
        left-0  
        object-cover"
      >
        <source src="assets/images/blackhole.webm" type="video/webm" />
      </video>
      <HeroContent />
    </div>
  );
};

export default Hero;
