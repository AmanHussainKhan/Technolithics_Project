import React, { useState } from "react";
import EastIcon from "@mui/icons-material/East";
import { testimonials } from "../assets/data/TestimonialData";

const TestimonialCarousal = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  return (
    <div className="p-6 w-full sm:w-3/4 md:w-2/3 lg:w-full mx-auto px-10">
      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center font-serif">
        Testimonials
      </h2>
      <div className="mb-6">
        <p className="text-base sm:text-lg italic text-center">
          "{testimonials[currentIndex].text}"
        </p>
        <p className="mt-2 text-right font-semibold">
          - {testimonials[currentIndex].name}
        </p>
      </div>
      <div className="flex justify-center items-center mb-6 space-x-2">
        {testimonials.map((_, index) => (
          <div
            key={index}
            className={`h-1 w-8 ${
              currentIndex === index ? "bg-slate-600" : "bg-gray-300"
            } transition-all duration-300`}
          ></div>
        ))}
      </div>
      <div className="flex justify-center">
        <button
          className="flex w-fit items-center px-4 py-2 rounded mb-10"
          onClick={handleNext}
        >
          <span className="pr-2">
            <EastIcon />
          </span>
          <span className="flex-1 font-semibold text-xl"></span>
        </button>
      </div>
    </div>
  );
};

export default TestimonialCarousal;
