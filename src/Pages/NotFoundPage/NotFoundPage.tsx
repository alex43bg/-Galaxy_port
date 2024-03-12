//@ts-ignore
import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <>
      <div className="container max-w-[1700px] mx-auto text-center text-5xl gap-2 ">
        <div className="wrapper mx-auto">
          <div className="text-red-500 p-[5px] mt-[300px]">NOT FOUND PAGE</div>
          <Link to="/" className="text-blue-500 p-[5px] mt-[100px] text-8xl">GO Home</Link>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;
