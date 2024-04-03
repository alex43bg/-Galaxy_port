//@ts-ignore
import React from "react";
//@ts-ignore
import th_png from 'src/public/th.png';


/////////////////////////////////////////////////////////////////////////////////////////////////
const Technologies = () => {
  return (
    <>
      <h1
        className="
		mt-[20px]
		text-2xl 
    p-1
		lg:text-4xl 
		font-bold 
		text-center
		text-transparent 
    bg-clip-text 
    bg-gradient-to-r 
    from-purple-500 
    to-cyan-500
		"
      >
        {/* Application development with such technologies */}
      </h1>
      <div
        className="
      Technologies_WRAPPER
      flex 
      px-5
      sm:px-10
      md:px-10  
      lg:px-20 
      mt-20
      animate-nice-scroll-img
      "
      >
        <div
          className="
          animate-nice-scroll-img
          w-full
          h-full 
          flex 
          justify-center 
          items-center 
          z-[-2]
          
          "
        >
          <img src={th_png} alt="Technologies" className="w-[500px] h-[px] sm:w-auto sm:h-auto md:h-[500px]"/>
        </div>
      </div>
    </>
  );
};

export default Technologies;
