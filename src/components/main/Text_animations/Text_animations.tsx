import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React from "react";
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const Text_animations = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".text", {
      x: 100, // Змініть це значення для регулювання відстані, на яку текст буде рухатися по горизонталі
      scrollTrigger: {
        trigger: ".text",
        start: "top 1%", // Початок анімації при досягненні 80% висоти блоку .text
        end: "bottom 80%", // Закінчення анімації при досягненні 20% висоти блоку .text
        scrub: true, // Активує "скрабінг" для плавного прокручування
      },
    });
  }, []);

  return (
    <>
      <div className='mt-[200px]'>
        <h1
          className="
          text-[#334155]
            text-7xl 
            relative 
            opacity-90
            "
        >
          React•React•React•React•React•<span className='text-[#29D8FF]'>React•</span>React•React•React•React
        </h1>
      </div>
      <div className='mt-[30px]'>
        <h1
          className="
          text-[#334155]
            text-7xl 
            relative 
            opacity-90
            "
        >
          Next.js•Next.js•Next.js•<span className='text-[#FFFFFF]'>Next.js</span>Next.js•Next.js•Next.js•Next.js•Nextjs•Next.js•Next.js•<span className='text-[#FFFFFF]'>Next.js</span>Next.js•Next.js•Next.js•Next.js•Next.js•Next.js•Next.js•<span className='text-[#FFFFFF]'>Next.js</span>Next.js•Next.js•Next.js•Next.js...
        </h1>
      </div>
      <div className='mt-[30px]'>
        
        <h1
          className="
          text-[#334155]
            text-7xl 
            relative 
            opacity-90
            "
        >
          Three.js•Three.js•Three.js•Three.js•<span className='text-[#EF7630]'>Three.js</span>•Three.js•Three.js•
        </h1>
      </div>
    </>
  );
};

export default Text_animations;
