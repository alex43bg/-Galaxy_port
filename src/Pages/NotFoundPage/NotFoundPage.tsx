//@ts-ignore
import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <>
      <div className="absolute w-full h-full bg-transparent">
        <div className="bg-[url('src/public/f.webp')] bg-cover bg-center w-full h-full opacity-85">
        <div className="wrapper text-center bg-lime-400">
          <div className="text-red-500 p-[5px] text-5xl">NOT FOUND PAGE</div>
          <Link to="/" className="text-blue-500 p-[5px] text-8xl">
            GO Home
          </Link>
        </div>
      </div>
        </div>
       
    </>
  );
};

export default NotFoundPage;
