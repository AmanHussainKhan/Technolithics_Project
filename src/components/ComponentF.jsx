import React from "react";
import EastIcon from "@mui/icons-material/East";
import M from "../assets/Ass/M.png";
import { Link } from "react-router-dom";

function ComponentF() {
  return (
    <div>
      <div>
        <div className="font-sans flex justify-center py-20 items-center bg-[#d6d6c2]">
          <div className="flex flex-col sm:flex-row">
            <div className="flex flex-col gap-5 px-4 sm:px-10 lg:px-14 w-full lg:w-1/3">
              <h1 className="text-3xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-4 font-serif text-center lg:text-left whitespace-nowrap z-30">
                Jewelry is like{" "}
                <span className="block">the perfect spice we have.</span>
              </h1>
              <p className="text-base sm:text-lg font-serif text-center lg:text-left">
                Dreaming of a piece that's uniquely yours? Our custom jewelry
                service allows you to bring your vision to life. Work closely
                with our expert artisans to design a piece that reflects your
                personal style and story.
              </p>
              <div className="flex justify-center items-center sm:justify-normal sm:items-start mb-5 sm:mb-0">
                <Link to="/productpage">
                  <button className="flex w-fit items-center px-4 py-2 rounded mb-10 border hover:bg-[#fefbec] transition-colors duration-300 ease-in-out ">
                    <span className="pr-2">
                      <EastIcon />
                    </span>
                    <span className="flex-1 font-semibold text-xl">
                      Explore Collections Here
                    </span>
                  </button>
                </Link>
              </div>
            </div>
            <div className="flex relative justify-center items-center lg:w-1/3">
              <div className="w-72 h-[28rem] absolute border border-black overflow-hidden rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
              <div className="w-64 h-96 border-8 border-white overflow-hidden z-10 bg-blue-500 rounded-full">
                <img
                  src={M}
                  alt="Egg Content"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="flex flex-col mt-10 sm:mt-0 items-center justify-center gap-5 px-4 sm:px-10 lg:px-14 w-full lg:w-1/3">
              <p className="text-base sm:text-lg font-serif text-center lg:text-left">
                Lorem piece that's uniquely yours? Our custom jewelry service
                allows you to bring your vision to life. Work closely w expert
                artisans to design a piece that reflects your perso
              </p>
              <p className="text-base sm:text-lg font-serif text-center lg:text-left">
                Aman uniquely yours? Our custom jewelry service allows you to
                bring your vision to life. Work closely with our expert artisans
                to design a piece that reflects your perso
              </p>
              <p className="text-base sm:text-lg font-serif text-center lg:text-left">
                Piece that's uniquely yours? Our custom jewelry service allows
                you to bring your vision to life. Work closely with our expert
                artisans to design a piece that reflects your perso
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ComponentF;
