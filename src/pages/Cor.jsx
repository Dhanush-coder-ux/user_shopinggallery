import React, { useState, useEffect } from "react";
import { assets } from "../assets";
import { motion } from 'framer-motion';
import { fadein } from '../variants';
const Cor = () => {
  const images = [assets.img, assets.img3, assets.img2];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
   
    <div className="relative w-full mt-7">
      {/* Image Container */}
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex  space-x-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex ? "bg-[#0f100f]" : "bg-white"
            }`}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>

      {/* Previous Button */}
{/* Previous Button */}
<button
  onClick={prevSlide}
  className="absolute top-0 left-0 z-30 hidden sm:flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
>
  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-400 group-hover:bg-white/50">
    <svg className="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
    </svg>
  </span>
</button>

{/* Next Button */}
<button
  onClick={nextSlide}
  className="absolute top-0 right-0 z-30 hidden sm:flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
>
  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-400 group-hover:bg-white/50">
    <svg className="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
    </svg>
  </span>
</button>



    </div>
  );
};

export default Cor;
