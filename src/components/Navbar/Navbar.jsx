import React, { useContext, useState } from "react";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleDelete = () => {
    console.log("Delete button clicked!");
  };

  return (
    <div className="bg-[#fefbec] px-4 w-full z-50 top-0 shadow-md">
      <div className="max-w-7xl mx-auto py-4 border-b-2 border-[#c9c9c9] px-5 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <h1 className="font-semibold text-xl">UiXSHUVO</h1>
          <div className="w-[2px] h-8 bg-[#c9c9c9] transform ml-2 rotate-12"></div>
        </Link>
        <div className="md:hidden">
          <IconButton
            aria-label="menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <CloseIcon fontSize="large" />
            ) : (
              <MenuIcon fontSize="large" />
            )}
          </IconButton>
        </div>
        <nav
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:block absolute md:static top-16 left-0 bg-[#fefbec] w-full md:w-auto md:flex flex-col md:flex-row items-center md:gap-7 font-serif font-semibold text-xl z-40`}
        >
          <ul className="flex flex-col md:flex-row justify-center items-center gap-5 md:gap-7 p-4 md:p-0">
            <li>
              <Link to="/" onClick={() => setIsMenuOpen(false)}>
                Collection
              </Link>
            </li>
            <li>
              <Link to="/" onClick={() => setIsMenuOpen(false)}>
                About
              </Link>
            </li>
            <li>
              <Link to="/" onClick={() => setIsMenuOpen(false)}>
                New
              </Link>
            </li>
            <li>
              <Link to="/" onClick={() => setIsMenuOpen(false)}>
                Testimonial
              </Link>
            </li>
          </ul>
        </nav>
        <div className="hidden md:flex items-center gap-5">
          <Link to="/">
            <div className="flex items-center">
              <div className="w-[2px] h-8 bg-[#c9c9c9] transform ml-2 rotate-12"></div>
              <IconButton aria-label="delete" onClick={handleDelete}>
                <SearchIcon fontSize="medium" />
              </IconButton>
              <div className="w-[2px] h-8 bg-[#c9c9c9] transform rotate-12"></div>
            </div>
          </Link>
          <Link to="/cart" className="relative w-10">
            <ShoppingCart />
            <div className="bg-red-500 w-5 h-5 absolute -top-2 right-1 flex items-center justify-center rounded-full text-white text-sm">
              0
            </div>
          </Link>
        </div>
      </div>
      {isMenuOpen && (
        <div className="flex flex-col items-center mt-4 gap-4 md:hidden">
          <Link to="/" onClick={() => setIsMenuOpen(false)}>
            <div className="flex items-center">
              <div className="w-[2px] h-8 bg-[#c9c9c9] transform ml-2 rotate-12"></div>
              <IconButton aria-label="delete" onClick={handleDelete}>
                <SearchIcon fontSize="medium" />
              </IconButton>
              <div className="w-[2px] h-8 bg-[#c9c9c9] transform rotate-12"></div>
            </div>
          </Link>
          <Link
            to="/cart"
            className="relative w-10"
            onClick={() => setIsMenuOpen(false)}
          >
            <ShoppingCart />
            <div className="bg-red-500 w-5 h-5 absolute -top-2 right-1 flex items-center justify-center rounded-full text-white text-sm">
              0
            </div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
