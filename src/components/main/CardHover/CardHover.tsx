"use client";
import React from "react"

import { EvervaultCard, Icon } from "./EvervaultCard"

function Pin() {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3  gap-4 mb-[300px]">
        <div className="p-4">
          <div className="mt-[50px] mb-[50px] border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative h-[30rem]">
            <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

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
            <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

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
            <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

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
      </div>
    </>
  );
}

export default Pin;
