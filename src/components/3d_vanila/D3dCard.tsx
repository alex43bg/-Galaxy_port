//@ts-ignore
import React, { useRef, useEffect, useState } from "react";
import VanillaTilt from "vanilla-tilt";
//@ts-ignore
import Styles from "./Style.module.css";

const D3dCard = () => {
  const containerRef = useRef(null);
  const [tiltInstance, setTiltInstance] = useState<any>(null); // зміни типу tiltInstance на any

  useEffect(() => {
    if (containerRef.current) {
      const instance = VanillaTilt.init(containerRef.current, {
        max: 20,
      });

      setTiltInstance(instance);
    }

    // Зупинка ефекту VanillaTilt при розмонтовуванні компонента
    return () => {
      if (tiltInstance) {
        tiltInstance.destroy();
      }
    };
  }, [tiltInstance]); // Додано tiltInstance у список залежностей useEffect

  return (
    <div className={Styles.w}>
      <div
        ref={containerRef}
        className={Styles.container}
      >
        <div
          className={Styles.imgbox}
          
        
        >
          <img
            src="assets/images/ED.png"
            alt="#"
            className={Styles.imgC}
          ></img>
        </div>
        <span
          className={Styles.circle}
        
        ></span>

        <span
          className={Styles.Earthtext}
        >
          Earth
        </span>
        <div className={Styles.title}>Cool planet</div>
        <div className={Styles.buySection}>
          <h2 className={Styles.price}>
            <span className={Styles.sp}>45.99</span> <sup className={Styles.sup}>$</sup>
          </h2>
          <div className={Styles.button}>
            <a className="">Learn More!</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default D3dCard;
