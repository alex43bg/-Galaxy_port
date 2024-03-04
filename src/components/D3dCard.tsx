import React, { useRef, useEffect, useState } from "react";
import VanillaTilt from 'vanilla-tilt';

const D3dCard = () => {
  const containerRef = useRef(null);
  const [tiltInstance, setTiltInstance] = useState<any>(null); // зміни типу tiltInstance на any

  useEffect(() => {
    if (containerRef.current) {
      const instance = VanillaTilt.init(containerRef.current, {
        max: 25,
        speed: 400,
        glare: true,
        'max-glare': 0.5,
      });

      setTiltInstance(instance);
    }

    // Зупинка ефекту VanillaTilt при розмонтовуванні компонента
    return () => {
      if (tiltInstance) {
        tiltInstance.destroy();
      }
    };
  }, [tiltInstance]);

  return (
    <div className='w-full h-full'>
      <div ref={containerRef} className="container">
        <div className="imgbox">
          <img src="assets/images/ED.png" alt="" className="imgC"></img>
        </div>
        <span className="circle"></span>
        <span className="Earthtext">Earth</span>
        <div className="title">
          Cool planet
        </div>
        <div className="buySection">
          <h2 className='price'>
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
