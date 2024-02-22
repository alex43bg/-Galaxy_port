import React from "react";

const Navbar = () => {
  return (
    <div className='mx-auto'>
      <div
      className="
    WRAPPER
    mx-auto
    fixed
    top-0
    left-0
    right-0
    mx-auto
    h-[65px] 
    shadow-lg 
    shadow-[#2A0E61]/50 
    bg-[#03001417] 
    backdrop-blur-md 
    z-50 
    flex 
    justify-between 
    items-center
    max-w-[1920px]
    "
    >
      <div className="flex-grow flex justify-center items-center mx-auto">
        <a
          href="#"
          className="
        NAME
        mx-auto
        font-bold 
        absolute 
        sm:left-10
        md:left-10 
        lg:px-10
        xl:px-10
        2xl:px-20
        hidden 
        sm:block 
        text-gray-300 
        text-transparent 
        bg-clip-text 
        bg-gradient-to-r 
        from-purple-500 
        to-cyan-300"
        >
          Alexander Bilik
        </a>
        <div
          className="
        NAV_MENU
        w-[300px] 
        md:w-[450px] 
        flex 
        justify-between
        "
        >
          <div
            className="
          flex 
          items-center 
          justify-between 
          w-full 
          h-auto 
          border 
          border-[#7042f861] 
          bg-[#0300145e] 
          mr-[15px] 
          px-[20px] 
          py-[10px] 
          rounded-full 
          text-gray-200"
          >
            <a href="#skills" className="cursor-pointer">
              Skills
            </a>

            <a href="#projects" className="cursor-pointer">
              Projects
            </a>
          </div>
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default Navbar;
