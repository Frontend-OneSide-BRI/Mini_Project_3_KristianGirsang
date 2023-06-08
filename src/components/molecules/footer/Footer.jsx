import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";


const Footer = () => {
  return (
    <footer className="bg-[#020c1b] py-10">
      <ContentWrapper className={`flex-col relative md:flex-row`}>
        <ul className="flex text-white items-center justify-center gap-4 md:gap-8 mb-5 md:mb-8">
          <li className="transition-all duration-300 cursor-pointer text-xs md:text-base hover:text-pink">
            Terms Of Use
          </li>
          <li className="transition-all duration-300 cursor-pointer text-xs md:text-base hover:text-pink">
            Privacy-Policy
          </li>
          <li className="transition-all duration-300 cursor-pointer text-xs md:text-base hover:text-pink">
            About
          </li>
          <li className="transition-all duration-300 cursor-pointer text-xs md:text-base hover:text-pink">
            Blog
          </li>
          <li className="transition-all duration-300 cursor-pointer text-xs md:text-base hover:text-pink">
            FAQ
          </li>
        </ul>

        <div className="flex items-center justify-center gap-2">
          <span className="w-12 h-12 rounded-full bg-white flex items-center justify-center cursor-pointer transition-all duration-300 hover:shadow-pink hover:text-pink">
            <FaFacebookF />
          </span>
          <span className="w-12 h-12 rounded-full bg-white flex items-center justify-center cursor-pointer transition-all duration-300 hover:shadow-pink hover:text-pink">
            <FaInstagram />
          </span>
          <span className="w-12 h-12 rounded-full bg-white flex items-center justify-center cursor-pointer transition-all duration-300 hover:shadow-pink hover:text-pink">
            <FaTwitter />
          </span>
          <span className="w-12 h-12 rounded-full bg-white flex items-center justify-center cursor-pointer transition-all duration-300 hover:shadow-pink hover:text-pink">
            <FaLinkedin />
          </span>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
