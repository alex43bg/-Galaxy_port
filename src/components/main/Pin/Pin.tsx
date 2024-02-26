"use client";
import React from "react"
import { PinContainer } from "./PinContainer"

function Pin() {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-[150px] mb-[150px] max-w-[1920px] mx-auto">
        <div className="h-[40rem] w-full flex items-center justify-center ">
          <PinContainer
            title="Click on point)"
            href="https://ui.aceternity.com/components/3d-pin"
          >
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
              <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                Aceternity UI
              </h3>
              <div className="text-base !m-0 !p-0 font-normal">
                <span className="text-slate-500 ">
                  Customizable Tailwind CSS and Framer Motion Components.
                </span>
              </div>
              <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
            </div>
          </PinContainer>
        </div>
        <div className="h-[40rem] w-full flex items-center justify-center ">
          <PinContainer
            title="Click on point)"
            href="https://ui.aceternity.com/components/3d-pin"
          >
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
              <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                Aceternity UI
              </h3>
              <div className="text-base !m-0 !p-0 font-normal">
                <span className="text-slate-500 ">
                  Customizable Tailwind CSS and Framer Motion Components.
                </span>
              </div>
              <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
            </div>
          </PinContainer>
        </div>
        <div className="h-[40rem] w-full flex items-center justify-center ">
          <PinContainer
            title="Click on point)"
            href="https://ui.aceternity.com/components/3d-pin"
          >
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
              <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                Aceternity UI
              </h3>
              <div className="text-base !m-0 !p-0 font-normal">
                <span className="text-slate-500 ">
                  Customizable Tailwind CSS and Framer Motion Components.
                </span>
              </div>
              <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
            </div>
          </PinContainer>
        </div>
      </div>
    </>
  );
}

export default Pin;
