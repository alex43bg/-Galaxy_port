import React from "react";

const D3dCard = () => {
  return (
    <div className='w-full h-full'>
      <div className="container border">
      <div className="imgbox">
        <img src="assets/images/.png" alt="" className="imgC"></img>
      </div>
      <span className="object objblue"></span>
      <span className="bgtext">Bass</span>
      <div className="title">
        Lorem ipsum dolor
      </div>
      <div className="buySection">
        <h2>
          <span className='sp'>45.99</span> <sup className='sup'>$</sup>
        </h2>
        <div className='button'>
        <a
          className=""
        >
          Learn More!
        </a>
        </div>
        
      </div>
    </div>
    </div>
    
  );
};

export default D3dCard;
