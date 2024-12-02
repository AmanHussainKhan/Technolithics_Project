import React from "react";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import EastIcon from "@mui/icons-material/East";

import Button from "@mui/material/Button";
import Gpic from "../assets/Ass/G.jpg";
import Last from "../assets/Ass/Last.png";

const ComponentG = () => {
  return (
    <div className="font-sans flex items-center min-h-screen bg-[#d6d6c2]">
      <div className="flex flex-col-reverse mx-20 lg:flex-row md:py-20 items-center justify-between sm:px-6 lg:px-8 gap-10">
        <div className="flex flex-col px-4 sm:px-6 lg:px-8 gap-5 w-full lg:w-1/2">
          <h1 className="text-4xl sm:text-5xl pt-10 sm:pt-0 lg:text-6xl font-bold mb-4 font-serif">
            Pearls are always <span className="block">appropriate.</span>
          </h1>
          <h2 className="text-2xl sm:text-3xl font-medium font-serif">
            40% off on your first order
          </h2>
          <p className="text-base sm:text-lg font-serif">
            Dreaming of a piece that's uniquely yours? Our custom jewelry
            service allows you to bring your vision to life. Work closely with
            our expert artisans to design a piece that reflects your personal
            style and story.
          </p>
          <button className="flex w-fit items-center px-4 py-2 rounded mb-10 border hover:bg-[#fefbec] transition-colors duration-300 ease-in-out">
            <span className="pr-2">
              <EastIcon />
            </span>
            <span className="flex-1 font-semibold text-xl">
              Explore Collection
            </span>
          </button>
        </div>
        <div className="relative mt-10 sm:mt-10">
          {/* Image container */}
          <div className="relative z-20 w-40 h-56 sm:w-48 sm:h-64 md:w-56 md:h-72 lg:w-72 lg:h-96 rounded-[50%_46%_49%_48%/_43%_48%_52%_57%] overflow-hidden bg-lightblue border border-black mx-auto">
            <img
              src={Last}
              alt="Egg Content"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Yellow background div */}
          <div className="absolute z-10 top-2 left-[10%] bg-black w-40 h-56 sm:w-48 sm:h-64 md:w-56 md:h-72 lg:w-72 lg:h-96 rounded-[50%_46%_49%_48%/_43%_48%_52%_57%] overflow-hidden border border-black mx-auto"></div>
        </div>
      </div>
    </div>
  );
};

export default ComponentG;
