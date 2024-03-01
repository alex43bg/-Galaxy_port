import React from "react";
import Marquee from "react-fast-marquee";
function Run_text() {
  return (
    <>
      <Marquee speed={15} pauseOnHover direction="right">
        <section className="max-w-[1900px] mt-[50px]">
          <div className="flex items-center text-[#334155] text-4xl whitespace-nowrap">
            <div>
              <span className="text-[#29D8FF]">React • </span>
              React • React • React • React • React • React • React • React • 🎁
              React • React • React • React • React
            </div>
            <a
              href="https://www.codewars.com/users/Alex43bg"
              target="_blank"
              className="ml-7 mt-[6px]"
            >
              <img
                src="./assets/images/codewars.png"
                alt="Codewars_image"
                className="w-[25px] h-[25px] rounded-[8px]"
              />
            </a>
						<a
              href="https://github.com/alex43bg"
              target="_blank"
              className="ml-7 mt-[6px]"
            >
              <img
                src="./assets/images/gitwhite.png"
                alt="Codewars_image"
                className="w-[25px] h-[25px] rounded-[8px]"
              />
            </a>
          </div>
        </section>
      </Marquee>
    </>
  );
}

export default Run_text;
