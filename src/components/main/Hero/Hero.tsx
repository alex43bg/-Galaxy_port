//@ts-ignore
import React from "react";
import HeroContent from "./HeroContent";

const Hero = () => {
  return (
    <div
      className="
      mx-auto
      relative 
      flex 
      max-w-[1920px] 
      mb-[200px]
      
    "
     
    >
      <video
        autoPlay
        muted
        loop
        className="
        hidden
        lg:flex
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
        le ft-0  
        max-w-[1920px]
        "
      >
        <source src="assets/images/blackhole.mp4" type="video/mp4" />
      </video>
      <HeroContent />
    </div>
  );
};

export default Hero;
