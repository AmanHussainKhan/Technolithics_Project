import React from "react";
import Min1 from "../assets/Ass/Min1.png";
import Min2 from "../assets/Ass/Min2.png";
import Min3 from "../assets/Ass/Min3.png";

function ComponentB() {
  return (
    <>
      <div className="flex flex-col px-28 py-10 lg:flex-row lg:gap-8 items-center justify-evenly">
        <div className="font-sans justify-between flex flex-col lg:flex-row items-center lg:gap-8 gap-6 mt-10">
          <div className="pr-28 lg:px-5">
            <div className="relative">
              <div className="absolute w-24 h-24 sm:w-28 sm:h-28 lg:w-36 lg:h-36 border-[8px]  border-white left-[60%] rounded-full overflow-hidden z-10">
                <img
                  src={Min3}
                  alt="Circle Content"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute left-[120%] w-24 h-24 sm:w-28 sm:h-28 lg:w-36 lg:h-36 border-[8px]  border-white rounded-full overflow-hidden z-20">
                <img
                  src={Min1}
                  alt="Circle Content"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-36 lg:h-36 border-[8px]  border-white rounded-full overflow-hidden z-30">
                <img
                  src={Min2}
                  alt="Circle Content"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 px-4 text-center lg:text-left">
            <p className="text-sm sm:text-base lg:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
              possimus pariatur animi obcaecati!
            </p>
          </div>
        </div>
        <div className="flex gap-5 pt-10 lg:pt-0 lg:mr-5">
          <div className="w-[2px] h-24 bg-[#c9c9c9] rotate-12"></div>
          <div className=" p-4 text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold">
              1.2K+
            </h1>
            <p className="font-medium font-serif pt-2 text-sm sm:text-base">
              Partner Support
            </p>
          </div>
          <div className="w-[2px] h-24 bg-[#c9c9c9] rotate-12"></div>
          <div className=" p-4 text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold">
              2.0K+
            </h1>
            <p className="font-medium font-serif pt-2 text-sm sm:text-base">
              Active Products
            </p>
          </div>
          <div className="w-[2px] h-24 bg-[#c9c9c9] rotate-12"></div>
        </div>
      </div>
    </>
  );
}

export default ComponentB;
