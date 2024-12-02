import React from "react";
import EastIcon from "@mui/icons-material/East";
import TL from "../assets/Ass/TL.png";
import TM from "../assets/Ass/TM.png";
import TR from "../assets/Ass/TR.png";

function ComponentA() {
  return (
    <>
      <div className="font-sans items-center flex flex-col lg:flex-row justify-center min-h-screen bg-[#d6d6c2]">
        <div className="flex flex-col lg:w-1/3 w-full gap-6 px-4 lg:px-14">
          <div className="flex mt-6 lg:mt-10 flex-col gap-5">
            <h1 className="text-5xl md:text-5xl lg:text-6xl font-bold mb-4 font-serif">
              Happiness <span className="block md:inline-flex">of Women</span>
            </h1>
          </div>
          <div className="mx-4 lg:mx-14 my-10 w-full max-w-[350px] lg:w-64 h-96 border overflow-hidden border-black rounded-[0%_64%_28%_61%/_25%_33%_0%_42%]">
            <img
              src={TL}
              alt="Egg Content"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col lg:w-1/3 w-full gap-6 md:items-center justify-center px-20 lg:px-14">
          <div className="relative w-full lg:w-64 sm:w-80 h-80 sm:h-[500px] mx-4 lg:mx-14 my-10 rounded-[0%_64%_28%_61%/_25%_33%_0%_42%]">
            <div className="absolute -left-8 -bottom-4 w-80 h-[500px] z-30 overflow-hidden rounded-[0%_64%_28%_61%/_25%_33%_0%_42%]">
              <img
                src={TM}
                alt="Egg Content"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute w-80 h-[500px] border-2 left-1 border-black rounded-[0%_64%_28%_61%/_25%_33%_0%_42%]"></div>
          </div>
          <div>
            <button className="flex w-fit items-center px-4 py-2 border hover:bg- rounded mb-10">
              <span className="pr-2">
                <EastIcon />
              </span>
              <span className="flex-1 font-semibold text-xl">
                Explore Collection
              </span>
            </button>
          </div>
        </div>
        <div className="flex flex-col lg:w-1/3 w-full gap-6 px-4 lg:px-14">
          <div className="mx-4 lg:mx-14 my-10 w-full max-w-[350px] lg:w-64 h-96 border overflow-hidden border-black rounded-[0%_64%_28%_61%/_25%_33%_0%_42%]">
            <img
              src={TR}
              alt="Egg Content"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex mt-10 flex-col gap-5">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 font-serif">
              Trendy <span className="block">Jewelry Collections</span>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default ComponentA;
