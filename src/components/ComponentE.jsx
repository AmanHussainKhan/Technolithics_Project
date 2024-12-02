import React, { useState } from "react";
import TestimonialCarousal from "./TestimonialCarousal";
import F from "../assets/Ass/F.jpeg";

const ComponentE = () => {
  const [pic, setPic] = useState([]);
  return (
    <div className="bg-[#fefbec] border-t-2 sm:pb-20">
      <div className="mx-auto max-w-2xl px-4 sm:pt-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 text-center font-serif pt-10 sm:pt-0">
          Some Best Words From
          <span className="block">Our Clients</span>
        </h2>
        <div className="font-sans flex flex-col lg:flex-row justify-center items-center lg:gap-8 gap-6 mt-10">
          <div className="relative">
            <div className="relative z-10 w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden bg-lightblue border border-black mx-auto">
              <img
                src={F}
                alt="Circle Content"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute z-0 w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full border border-black top-[3%] left-[6%]"></div>
          </div>
          <div className="w-full lg:w-1/2 px-4">
            <TestimonialCarousal pic={pic} setPic={setPic} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComponentE;
