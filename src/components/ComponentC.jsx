import React from "react";
import EastIcon from "@mui/icons-material/East";
import JWL from "../assets/Ass/JWL.png";
import JWR from "../assets/Ass/JWR.png";

function ComponentC() {
  return (
    <>
      <div className="font-sans flex justify-center py-20 items-center bg-[#d6d6c2]">
        <div className="flex flex-col lg:flex-row items-center justify-around gap-12 lg:gap-0 px-6 lg:px-20">
          <div className="flex relative pr-24 lg:pr-3 mr-20 sm:p-0">
            <div class="w-64 h-96 absolute left-[55%] z-0 bottom-[15%] border overflow-hidden rounded-full">
              <img
                src={JWR}
                alt="Egg Content"
                className="w-full h-full object-cover"
              />
            </div>
            <div class="w-64 h-96 border-8 border-white overflow-hidden z-10 bg-blue-500 rounded-full">
              <img
                src={JWL}
                alt="Egg Content"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col gap-5 px-4 sm:px-10 lg:px-14 w-full lg:w-[50%]">
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-4 font-serif text-center lg:text-left">
              Jewelry that fits everyone
            </h1>
            <p className="text-base sm:text-lg font-serif text-center lg:text-left">
              Dreaming of a piece that's uniquely yours? Our custom jewelry
              service allows you to bring your vision to life. Work closely with
              our expert artisans to design a piece that reflects your personal
              style and story.
            </p>
            <p className="text-base sm:text-lg font-serif text-center lg:text-left">
              Each piece is crafted with precision and care to ensure it’s as
              unique as the person wearing it.
            </p>
            <button className="flex items-center self-center lg:self-start px-4 py-2 rounded border hover:bg-[#fefbec] transition-colors duration-300 ease-in-out ">
              <span className="pr-2">
                <EastIcon />
              </span>
              <span className="flex-1 font-semibold text-lg sm:text-xl">
                Explore Collection
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ComponentC;
