import React from "react";
import heroBack from "../assets/hero-background.jpg";

const Hero = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4">
      <div className="max-h-[500px] relative">
        <div className="absolute w-full h-full text-white max-h-[500px] bg-black/30 rounded-xl flex flex-col justify-center">
          <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            The <span className="text-orange-500"> Best </span>
          </h1>
          <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            <span className="text-orange-500"> Foods </span> Delivered
          </h1>
        </div>
        <img
          src={heroBack}
          alt="hero-back"
          className="max-h-[500px] object-cover rounded-xl w-full"
        />
      </div>
    </div>
  );
};

export default Hero;
