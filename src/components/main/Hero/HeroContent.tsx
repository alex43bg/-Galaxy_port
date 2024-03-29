//@ts-ignore
import React from "react";
import { SparklesIcon } from "@heroicons/react/24/solid";

//@ts-ignore
import min3_min1_webp from "src/public/min3-min1.webp"
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
const HeroContent = () => {
  
  return (
      <div
      className="
      HERO_WRAPPER
      flex 
      flex-row 
      items-center 
      justify-center 
      px-5
      sm:px-10
      mt-[120px]
      md:mt-40
      md:px-10  
      lg:px-20 
      lg:mt-44
      w-full
      "
    >
      <div
        className="
      grid 
      grid-cols-1 
      md:grid-cols-[2fr,1fr] 
      gap-10
      w-full 
      md:max-w-[1700px]
      "
      >
        <div className="flex flex-col gap-5 justify-center text-start">
          <div
            className="
            WELCOME_BOX
            animate-custom-fade-in
            w-[350px] 
            md:w-[400px] 
            lg:w-[600px] 
            py-[8px] 
            px-[7px] 
            border 
            border-[#7042f88b] 
            opacity-[0.9]"
          >
            <SparklesIcon
              className="
            BORDERED
            text-[#b49bff] 
            mr-[10px] 
            h-5
            w-5"
            />
            <h1
              className="
            Welcome-text 
            text-[#F0EAD6] 
            text-[14px]"
            >
              Frontend Developer Portfolio
            </h1>
          </div>

          <div
            className="
            animate-flip-in-hor-bottom
            text-4xl 
            sm:text-4xl 
            md:text-5xl 
            lg:text-6xl
            flex 
            flex-col 
            gap-6 
            mt-6  
            font-bold 
            text-white
            md:max-w-[500px]  
            lg:max-w-[600px] 
            max-w-[600px]
            "
          >
            <span>
              Providing
              <span
                className="
              text-transparent 
              bg-clip-text 
              bg-gradient-to-r 
              from-purple-500 
              to-cyan-500"
              >
                {" "}
                the best{" "}
              </span>
              project experience
            </span>
          </div>

          <p
            className="
            animate-fade-in-right
            text-lg 
            md:max-w-[400px]
            lg:max-w-[600px]
            text-gray-400 
            my-5 
            max-w-[600px]"
          >
            I am a frontend developer with a passion for creating impressive
            and intuitively understandable interfaces. My task is to turn
            complexity into simplicity, creating aesthetic and functional web
            applications that everyone can use comfortably.
          </p>
          <a
            className="
            animate-fade-in-right
            text-[#FDF5E6] 
            py-2 
            button-primary 
            text-center 
            cursor-pointer 
            rounded-lg 
            max-w-[200px]"
          >
            Learn More!
          </a>
        </div>

        <div
          className="
          animate-custom-fade-in
          w-full 
          h-full 
          flex 
          justify-center 
          items-center 
          z-[-2]
          "
        >
          <div style={{ position: "relative" }}>
            <img
              src={min3_min1_webp}
              alt="work icons"
              height={440}
              width={440}
            />
          </div>
        </div>
      </div>
    </div>
    
    
  );
};

export default HeroContent;
