import React from "react";

const Hero = ({ heading, message, image }) => {
  return (
    <div
      className={`flex items-center justify-center h-screen mb-12 bg-fixed bg-cover bg-center bg-no-repeat ${image} `}
    >
      {/* Overlay */}
      <div className="absolute top-0 right-0 bottom-0 bg-black/70 z-[2]" />
      <div className=" flex items-center justify-center p-5 text-white z-[2] mt-[-10rem] top-[50%]">
        <h2 className="text-5xl font-bold">{heading}</h2>
        <p className="py-5 text-xl">{message}</p>
      </div>
    </div>
  );
};

export default Hero;
