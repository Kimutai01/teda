import Image from "next/image";
import React, { useState, useEffect } from "react";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  // Adding slider timeout
  useEffect(() => {
    //smooth transition without duration between slides

    const timeout = setTimeout(() => {
      nextSlide();
    }, 5000);

    return () => {
      clearTimeout(timeout);
    };
  }, [current, length]);

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
  return (
    <div className="max-w-[1240] mx-auto">
      <div className="relative flex justify-center">
        {slides.map((slide, index) => {
          return (
            <div
              key={index}
              className={
                index === current
                  ? "opacity-[1] ease-in duration-100 h-full]"
                  : "opacity-0"
              }
            >
              {/* content in the slider */}
              <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 z-[1]">
                <h1 className="text-2xl font-bold text-center heading">
                  {slide.title}
                </h1>
                <p className="text-center text-white text-4xl">
                  {slide.description}
                </p>
              </div>

              <FaArrowCircleLeft
                size={50}
                onClick={prevSlide}
                className="absolute top-[48%] left-[30px] text-white/70 cursor-pointer select-none z-[2]"
              />
              {index === current && (
                <Image
                  src={slide.image}
                  alt="/"
                  width="1440"
                  height="600"
                  style={{ objectFit: "cover" }}
                  className="h-[700px]"
                />
              )}
              <FaArrowCircleRight
                size={50}
                onClick={nextSlide}
                className="absolute top-[48%] right-[30px] text-white/70 cursor-pointer select-none z-[2]"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
