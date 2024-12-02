import React from "react";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const Footer = () => {
  return (
    <footer>
      <div className="bg-[#fefbec] px-4 w-full z-50 top-0 pt-24 shadow-gray-400">
        <div className="max-w-7xl mx-auto py-7 border-t-2 border-b-2 border-w border-[#c9c9c9] px-5 flex justify-between items-center">
          <Link to="/">
            <div className="flex">
              <h1 className="font-semibold text-xl">UiXSHUVO</h1>
              <div className="w-[2px] h-8 bg-[#c9c9c9] transform ml-2 rotate-12"></div>
            </div>
          </Link>
          <nav className="hidden md:block flex-grow"></nav>
          <div className="flex items-center gap-5">
            <Link to="/login">
              <div className="flex">
                <div className="w-[2px] h-8 bg-[#c9c9c9] transform ml-2 rotate-12"></div>
                <input
                  type="text"
                  className="border-none bg-[#fefbec] mx-3 pl-1"
                  placeholder="Enter Email"
                />
                <div className="w-[2px] h-8 bg-[#c9c9c9] transform rotate-12"></div>
                <Link to="/">
                  <button className="flex pl-3 mt-1 hover:text-[#464545]">
                    <p className="text-[#a3a2a2] hover:text-[#464545]">
                      News letter
                    </p>
                    <div className="ml-2 hover:text-[#464545]">
                      <ArrowRightAltIcon />
                    </div>
                  </button>
                </Link>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-[#fefbec] px-4 w-full z-50 top-0 pt-2 shadow-gray-400">
        <div className="max-w-7xl mx-auto py-7 border-b-2 border-w border-[#c9c9c9] px-5 flex justify-between items-center">
          <div className="flex">
            <h1 className="font-semibold">
              &#169;<span className="pl-1">Contraction website 2024</span>
            </h1>
          </div>
          <nav className="hidden md:block flex-grow">
            <ul className="flex justify-center items-center font-semibold text-xl gap-7">
              <Link to="/youtube">
                <li>
                  <IconButton>
                    <YouTubeIcon />
                  </IconButton>
                </li>
              </Link>
              <Link to="/instagram">
                <li>
                  <IconButton>
                    <InstagramIcon />
                  </IconButton>
                </li>
              </Link>
              <Link to="/twitter">
                <li>
                  <IconButton>
                    <TwitterIcon />
                  </IconButton>
                </li>
              </Link>
              <Link to="/facebook">
                <li>
                  <IconButton>
                    <FacebookIcon />
                  </IconButton>
                </li>
              </Link>
            </ul>
          </nav>
          <div className="flex items-center gap-5">
            <Link to="/privacypolicy">
              <h1>
                <span className="pl-1">Privacy Policy</span>
              </h1>
            </Link>
            <Link to="/termsofservices">
              <h1>
                <span className="pl-1">Terms of Services</span>
              </h1>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
