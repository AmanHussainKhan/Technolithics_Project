import React from "react";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import EastIcon from "@mui/icons-material/East";

import Button from "@mui/material/Button";
import Gpic from "../assets/Ass/G.jpg";
import Last from "../assets/Ass/Last.png";

const ComponentG = () => {
  return (
    <div className="font-sans flex lg:items-center  min-h-screen bg-[#d6d6c2]">
      <div className="flex flex-col lg:flex-row md:py-20 items-center justify-around">
        <div className="flex flex-col ml-16 px-4 sm:px-10 lg:px-14  gap-5  w-full lg:w-1/2">
          <h1 className="text-5xl lg:text-6xl font-bold mb-4 font-serif">
            Pearls are always <span className="block">appropriate.</span>
          </h1>
          <h2 className="text-3xl font-medium font-serif">
            40% off on your first order
          </h2>
          <p className="text-lg font-serif">
            Dreaming of a piece that's uniquely yours? Our custom jewelry
            service allows you to bring your vision to life. Work closely with
            our expert artisans to design a piece that reflects your personal
            style and story.
          </p>
          <button className="flex w-fit items-center px-4 py-2 rounded mb-10 border hover:bg-[#fefbec] transition-colors duration-300 ease-in-out ">
            <span className="pr-2">
              <EastIcon />
            </span>
            <span className="flex-1 font-semibold text-xl">
              Explore Collection
            </span>
          </button>
        </div>
        <div className="relative">
          {/* Image container */}
          <div className="relative z-20 w-48 h-64 sm:w-56 sm:h-72 md:w-64 md:h-80 lg:w-72 lg:h-96 rounded-[50%_46%_49%_48%/_43%_48%_52%_57%] overflow-hidden bg-lightblue border border-black mx-auto">
            <img
              src={Last}
              alt="Egg Content"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Yellow background div */}
          <div className="absolute z-10 top-1 left-[7%] bg-black w-48 h-64 sm:w-56 sm:h-72 md:w-64 md:h-80 lg:w-72 lg:h-96 rounded-[50%_46%_49%_48%/_43%_48%_52%_57%] overflow-hidden border border-black mx-auto">
            {/* Empty Content */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComponentG;
