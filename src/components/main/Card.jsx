// import React from 'react';
import "./Card.css"; // Імпортуйте стилі

function Card() {
  return (
    <>
      <div className="flex justify-center items-center mt-60 mb-60">
        <div className="card">
          <div className="wrapper">
            <img
              src="https://ggayane.github.io/css-experiments/cards/dark_rider-cover.jpg"
              className="cover-image"
            />
          </div>
          <img
            src="https://ggayane.github.io/css-experiments/cards/dark_rider-title.png"
            className="title"
          />
          <img
            src="https://ggayane.github.io/css-experiments/cards/dark_rider-character.webp"
            className="character"
          />
        </div>
      </div>
    </>
  );
}

export default Card;
