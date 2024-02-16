import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "../../utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="
      flex 
      flex-row 
      items-center 
      justify-center 
      px-5 
      sm:px-10 
      md:px-10  
      lg:px-20 
      mt-40 
      w-full"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box  w-[350px] md:w-[600px] py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[#F0EAD6] text-[14px]">
            Frontend Developer Portfolio
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="text-4xl sm:text-5xl md:text-6xl flex flex-col gap-6 mt-6  font-bold text-white max-w-[600px]"
        >
          <span>
            Providing
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              the best{" "}
            </span>
            project exprience
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          "I am a frontend developer with a passion for creating impressive and
          intuitively understandable interfaces. My task is to turn complexity
          into simplicity, creating aesthetic and functional web applications
          that everyone can use comfortably."
        </motion.p>
        <motion.a
          variants={slideInFromLeft(1)}
          className="text-[#FDF5E6] py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          Learn More!
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center z-[-2]"
      >
        <div style={{ position: "relative" }}>
          <motion.img
            src="./assets/images/min3-min.png"
            alt="work icons"
            height={440}
            width={440}
            style={{
              top: 65,
              left: 115,

              filter: "blur(100px)",
              position: "relative",
              zIndex: "-2",
            }}
          />
          <motion.img
            src="./assets/images/min3-min.png"
            alt="work icons"
            height={440}
            width={440}
            style={{
              position: "absolute",
              top: 50,
              bottom: 0,
              left: 100,

              width: "100%",
              height: "100%", // Нижня половина зображення
              zIndex: "-2", // Щоб зображення було поверх розмиття
            }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
