import React from "react";

const D3dCard = () => {
  return (
    <div className="container max-w-[1700px] mx-auto">
      <div className="wrapper mx-auto w-[400px] h-[400px] overflow-hidden">
        <div className="imgbox absolute">
          <video
            autoPlay
            muted
            loop
            disablePictureInPicture
            className="w-full h-full rounded-full mx-auto scale-[0.5]"
          >
            <source src="assets/images/ERS.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};

export default D3dCard;
