"use client";
import React from "react";

import { Sun } from "./Sun";
import { Earth } from "./Earth";
import { Moon } from "./Moon";

function Planets() {
  return (
    <>
      <div
        className="
      grid 
      grid-cols-1 
      sm:grid-cols-2 
      md:grid-cols-1
      lg:grid-cols-2 
      2xl:grid-cols-3
      gap-4 
      mt-[150px] 
      mb-[150px] 
      max-w-[1920px] 
      mx-auto
      "
      >
        <div className="p-4">
          <div
            className="
          mt-[50px] 
          mb-[50px] 
          border 
          border-black/[0.2] 
          dark:border-white/[0.2] 
          flex 
          flex-col 
          items-start 
          max-w-sm 
          mx-auto 
          p-4 
          relative 
          h-[30rem]
          
          "
          >
            <Earth text="React projects" />

            <h2 className="text-white mt-1 text-sm font-light mb-2">
              Hover over this card to reveal an awesome effect. Running out of
              copy here.
            </h2>
            <a
              href="#"
              className="  
              animate-fade-in-right
              w-auto
              text-[#FDF5E6] 
              py-2
              px-4
              button-primary 
              text-center 
              cursor-pointer 
              rounded-lg 
              "
            >
              More about link
            </a>
          </div>
        </div>
        <div className="p-4">
          <div className="mt-[50px] mb-[50px] border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative h-[30rem]">
            <Sun text="3D projects" />

            <h2
              className="
          text-white 
            mt-1
            h-[25px]
            text-sm 
            font-light 
            mb-5 
            truncate
            max-w-[300px]   
            sm:max-w-[290px] 
            lg:max-w-[340px] 
            mx-auto
            "
            >
              <div className="run_text_infinite">
                Programming is not just about language, algorithms, and code.
                It's the art of turning ideas into reality, creating convenient
                tools to solve complex problems, and constantly learning and
                improving. When you program, you embody your dreams in a virtual
                world where limitations depend only on your imagination..
              </div>
        
            </h2>
            <a
              href="#"
              className="
              animate-fade-in-right
              w-auto
              text-[#FDF5E6] 
              py-2
              px-4
              button-primary 
              text-center 
              cursor-pointer 
              rounded-lg"
            >
              More about link
            </a>
          </div>
        </div>
        <div className="p-4">
          <div className="mt-[50px] mb-[50px] border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative h-[30rem]">
            <Moon text="Cool design projects" />

            <h2 className="text-white mt-1 text-sm font-light mb-4">
              Hover over this card to reveal an awesome effect. Running out of
              copy here.
            </h2>
            <a
              href="#"
              className=" 
              animate-fade-in-right
              w-auto
              text-[#FDF5E6] 
              py-2
              px-4
              button-primary 
              text-center 
              cursor-pointer 
              rounded-lg
              "
            >
              More about link
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Planets;
