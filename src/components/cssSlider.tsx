"use client";
//@ts-ignore
import React from "react";

const CssSlider = () => {
  const container = "container p-[10px] mx-auto mb-[200px]";

  const Wrapper = "SliderWrapper relative max-w-[1500px] mx-auto";

  const Slider =
    "Slider flex overflow-hidden snap-mandatory snap-x scroll-smooth";

  const ImgStyles =
    "flex-grow-1 flex-shrink-0 flex-basis-full snap-start pt-[100px]";

  const SliderNav =
    "slider-nav flex absolute gap-x-[4rem] bottom-[-3rem] left-[50%] translate-x-[-50%]";

  const NavStyles = "circle";

  return (
    <>
      <div className={container}>
        <div className={Wrapper}>
          <div className={Slider}>
            <img
              id="slide-1"
              src="./assets/images/2.png"
              className={ImgStyles}
            ></img>
            <img
              id="slide-2"
              src="./assets/images/3.png"
              className={ImgStyles}
            ></img>
            <img
              id="slide-3"
              src="./assets/images/4.png"
              className={ImgStyles}
            ></img>
          </div>
          <div className={SliderNav}>
            <a href="#slide-1" className={NavStyles}></a>
            <a href="#slide-2" className={NavStyles}></a>
            <a href="#slide-3" className={NavStyles}></a>
          </div>
        </div>
      </div>
    </>
  );
};

export default CssSlider;
