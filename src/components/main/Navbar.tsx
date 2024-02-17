import React from "react";

const Navbar = () => {
  return (
    <div
      className="
    WRAPPER
    w-full 
    h-[65px] 
    fixed 
    top-0 
    shadow-lg 
    shadow-[#2A0E61]/50 
    bg-[#03001417] 
    backdrop-blur-md 
    z-50 
    px-10
    flex 
    justify-between 
    items-center"
    >
      <div className="flex-grow flex justify-center items-center">
        <a
          href="#"
          className="
        NAME
        font-bold 
        absolute 
        sm:left-20
        md:left-10 
        lg:px-10
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
        justify-between"
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
  );
};

export default Navbar;
