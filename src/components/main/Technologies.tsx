import React from "react";

const Technologies = () => {
  return (
    <>
      <h1
        className="
		mt-[200px]
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
        Application development with such technologies
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
      "
      >
        <div
          className="
          animate-custom-fade-in
          w-full 
          h-full 
          flex 
          justify-center 
          items-center 
          z-[-2]"
        >
          <img src="./assets/images/th.png" alt="Technologies" />
        </div>
      </div>
    </>
  );
};

export default Technologies;
