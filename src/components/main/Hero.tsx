import React from "react";
import { motion } from "framer-motion";
import HeroContent from "../sub/HeroContent";

const Hero = () => {
  return (
    <motion.div
      className="
      relative 
      flex 
      flex-col 
      h-full 
      w-full"
      id="about-me"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <video
        autoPlay
        muted
        loop
        className="
        rotate-180 
        absolute 
        top-[-245px] 
        640:top-[-277px] 
        668:top-[-277px] 
        768:top-[-235px]
        1060:top-[-240px]
        1080:top-[-250px]
        1100:top-[-275px]
        1200:top-[-340px] 
        h-full 
        w-full 
        left-0 
        z-[-2] 
        object-cover "
      >
        <source src="assets/images/blackhole.webm" type="video/webm" />
      </video>
      <HeroContent />
    </motion.div>
  );
};

export default Hero;
