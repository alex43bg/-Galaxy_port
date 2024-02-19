import React from "react";

const test = () => {
  return (
    <div
      className="
		animate-custom-fade-in
		flex 
		max-w-[1700px]
		mt-[150px]
		md:mt-[250px]
		mx-auto 
		px-4
		"
    >
      <h1
        className="
		text-2xl 
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

      <div>
        <img
          src="./assets/images/th.png"
          className="mt-20 mx-auto z-[-2]"
          alt="Technologies"
        />
      </div>
    </div>
  );
};

export default test;
