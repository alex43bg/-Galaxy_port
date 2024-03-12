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
      <div className="mx-auto max-w-[1900px] overflow-hidden">
        <div className="flex  w-[200%] run_text_f">
          <h1
            className="
          text-[#334155]
            text-2xl 
            opacity-90
            whitespace-nowrap
            w-[100%]
            "
          >
            <span className="text-[#29D8FF]">React•</span>
            React•React•React•React•React•React•React•React•React•React•React•React•
          </h1>
          <h1
            className="
          text-[#334155]
            text-2xl 
            opacity-90
            whitespace-nowrap
            w-[100%]
            "
          >
            React•React•<span className="text-[#29D8FF]">React•</span>
            React•React•React•React•React•React•React•React•React•React•React•React•React•React
          </h1>
        </div>

        <div className="flex w-[200%] run_text_b">
          <h1
            className="
          text-[#334155]
            text-5xl 
            relative 
            opacity-90
            whitespace-nowrap
            "
          >
            Next.js•
            <span className="text-[#FFFFFF]">Next.js</span>Next.js•Next.js•Next.js•Next.js•Next.js•Next.js•Next.js•Next.js•
          </h1>
          <h1
            className="
          text-[#334155]
            text-5xl 
            relative 
            opacity-90
            whitespace-nowrap
            "
          >
            Next.js•Next.js•Next.js•
            <span className="text-[#FFFFFF]">Next.js</span>Next.js•Next.js• Next.js•Next.js•Next.js• Next.js•Next.js•Next.js• Next.js•Next.js•Next.js• Next.js•Next.js•Next.js• Next.js•Next.js•Next.js•
          </h1>
        </div>
      </div>
    </>
  );
};

export default Text_animations;
