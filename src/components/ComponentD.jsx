import React from "react";
import { Link } from "react-router-dom";
import EastIcon from "@mui/icons-material/East";
import JW1 from "../assets/Ass/JW1.jpg";
import JW2 from "../assets/Ass/JW2.png";

function ComponentD() {
  return (
    <>
      <div className="font-sans flex flex-col md:flex-row justify-center items-center min-h-screen bg-[#fefbec] overflow-x-hidden pb-10 sm:pb-0">
        <div className="flex flex-col items-start md:ml-16 gap-5 px-6 md:px-14 md:w-1/2">
          <h1 className="text-5xl pt-4 md:text-5xl lg:text-6xl font-bold mb-4 font-serif">
            Our Collections
          </h1>
          <div className="flex items-center">
            <h2 className="text-2xl md:text-3xl font-medium font-serif mr-4">
              Necklaces
            </h2>
            <div className="flex flex-grow h-[2px] bg-gray-800"></div>
          </div>
          <div>
            <ul className="text-lg font-serif gap-4 flex flex-col">
              <Link to="/jweleryitem">
                <li className="hover:text-gray-500">Braclets</li>
              </Link>
              <Link to="/jweleryitem">
                <li className="hover:text-gray-500">Rings</li>
              </Link>
              <Link to="/jweleryitem">
                <li className="hover:text-gray-500">Necklaces</li>
              </Link>
              <Link to="/jweleryitem">
                <li className="hover:text-gray-500">Earrings</li>
              </Link>
            </ul>
          </div>
          <button className="flex w-fit items-center px-4 py-2 rounded mb-10 border hover:bg-[#d6d6c2] transition-colors duration-300 ease-in-out ">
            <span className="pr-2">
              <EastIcon />
            </span>
            <span className="flex-1 font-semibold text-xl">
              Explore Collection
            </span>
          </button>
        </div>
        <div className="flex flex-wrap justify-center md:justify-start gap-6 md:gap-14 mx-6 md:mx-14 md:my-10 md:w-1/2">
          <div className="w-64 h-96 border overflow-hidden border-black rounded-[50%_0%_45%_0%/_34%_25%_40%_25%]">
            <img
              src={JW1}
              alt="Egg Content"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-64 h-96 border overflow-hidden border-black rounded-[50%_0%_45%_0%/_34%_25%_40%_25%]">
            <img
              src={JW2}
              alt="Egg Content"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default ComponentD;
