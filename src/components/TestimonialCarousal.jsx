import React, { useState } from "react";
import EastIcon from "@mui/icons-material/East";
import F from "../assets/Ass/F.jpeg";

const TestimonialCarousal = ({ pic, setPic }) => {
  const testimonials = [
    {
      name: "John Doe",
      text: "This service is amazing! It has completely exceeded my expectations industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type.",
      image: { F },
    },
    {
      name: "Jane Smith",
      text: "I love how user-friendly and industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type efficient everything is. Highly recommend!",
    },
    {
      name: "Alice Johnson",
      text: "A truly transformative experience. industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type Exceptio",
    },
    {
      name: "Mark Brown",
      text: "This is by far the best decision industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type I’ve made for my business. Thank you!",
    },
    {
      name: "Sophia Lee",
      text: "Incredible service! The team went above industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type and beyond to help me succeed.",
    },
  ];

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
