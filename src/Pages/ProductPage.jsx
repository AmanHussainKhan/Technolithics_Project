import React from "react";
import { Link } from "react-router-dom";

function ProductPage() {
  return (
    <div className="bg-[#d6d6c2] w-screen h-screen py-10 flex items-center justify-center">
      <div className="border border-black w-fit rounded-xl">
        <h1 className="text-center text-4xl py-10 px-5 text-[#545439] font-serif font-medium">
          {" "}
          Website is under development process. . .
        </h1>
          <Link to='/'>
        <h1 className="text-center text-xl py-1 px-5 underline text-[#14488c] font-serif font-medium">
        Homepage
        </h1>
          </Link>
      </div>
    </div>
  );
}

export default ProductPage;
