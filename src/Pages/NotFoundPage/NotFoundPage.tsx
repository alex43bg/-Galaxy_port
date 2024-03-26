//@ts-ignore
import React from "react";
import { Link } from "react-router-dom";
import "./NotFoundPage.css"


const NotFoundPage = () => {
  return (
    <>
      <div className="abs w-f h-f bg-t">
        <div className="bg-[url('src/public/f.webp')] bg-c bg-ce w-f h-f opacity">
        <div className="w">
          <div className="text-r p-5 text-5">NOT FOUND PAGE</div>
          <Link to="/" className="text-b p-5 text-8">
            GO Home
          </Link>
        </div>
      </div>
        </div>
       
    </>
  );
};

export default NotFoundPage;
