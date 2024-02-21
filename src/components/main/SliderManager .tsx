import React, { useState, useEffect } from 'react';
import Slider from './Slider'; // Припустимо, що Slider компонент розміщений у файлі Slider.js

const SliderManager = ({ slides, interval = 60000 }) => {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            showNextSlide();
        }, interval);

        return () => {
            clearTimeout(timer);
        };
    }, [currentSlideIndex]);

    const showNextSlide = () => {
        setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const showPrevSlide = () => {
        setCurrentSlideIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    };

    return (
        <div className="slider-manager">
            <Slider slides={slides} />
            <button id="prev" onClick={showPrevSlide}>{"<"}</button>
            <button id="next" onClick={showNextSlide}>{">"}</button>
        </div>
    );
};

export default SliderManager;
