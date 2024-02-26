"use client";
import React from "react"

import { EvervaultCard } from "./EvervaultCard"
import { MarsCard } from './Mars_card'
import { New } from './New'


function CardHover() {
  return (
    <>
      <div className="
      grid 
      grid-cols-1 
      sm:grid-cols-2 
      md:grid-cols-2 
      lg:grid-cols-3  
      gap-4 
      mt-[150px] 
      mb-[150px] 
      max-w-[1920px] 
      mx-auto
      ">
        <div className="p-4">
          <div className="mt-[50px] mb-[50px] border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative h-[30rem]">
            
           
            <MarsCard text="Alex" />

            <h2 className="dark:text-white text-black mt-4 text-sm font-light">
              Hover over this card to reveal an awesome effect. Running out of
              copy here.
            </h2>
            <a
              href="#"
              className="text-sm border font-light dark:border-white/[0.2] border-black/[0.2] rounded-full mt-4 text-black dark:text-white px-2 py-0.5"
            >
              More about link
            </a>
          </div>
        </div>
        <div className="p-4">
          <div className="mt-[50px] mb-[50px] border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative h-[30rem]">
           

            <EvervaultCard text="New project" />

            <h2 className="dark:text-white text-black mt-4 text-sm font-light">
              Hover over this card to reveal an awesome effect. Running out of
              copy here.
            </h2>
            <a
              href="#"
              className="text-sm border font-light dark:border-white/[0.2] border-black/[0.2] rounded-full mt-4 text-black dark:text-white px-2 py-0.5"
            >
              More about link
            </a>
          </div>
        </div>
        <div className="p-4">
          <div className="mt-[50px] mb-[50px] border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative h-[30rem]">
          

            <New text="New project" />

            <h2 className="dark:text-white text-black mt-4 text-sm font-light">
              Hover over this card to reveal an awesome effect. Running out of
              copy here.
            </h2>
            <a
              href="#"
              className="text-sm border font-light dark:border-white/[0.2] border-black/[0.2] rounded-full mt-4 text-black dark:text-white px-2 py-0.5"
            >
              More about link
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardHover;
