import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";
import Navbar from "./navbar"

const Footer = () => {
  return (
    
    <div className="max-w-full mx-auto mt-3 py-10 px-3 grid lg:grid-cols-3 gap-8 text-gray-300">
    
      <div className="mx-auto sm:mx-0">
        <h1 className="w-full text-3xl mx-auto sm:ml-14 font-bold text-[#00df9a]">rentus</h1>
        <div className="flex justify-center  space-x-6 md:w-[75%] my-6">
          <FaFacebookSquare size={30} />
          <FaInstagram size={30} />
          <FaTwitterSquare size={30} />
          <FaGithubSquare size={30} />
          <FaDribbbleSquare size={30} />
        </div>
      </div>
      <div className="lg:col-span-2 justify-center  flex ml-[8rem] sm:ml-[16rem] font-semibold sm:justify-between mt-6  pr-10 ">
        <ul className="flex sm:sm:space-x-8 justify-center space-x-4 text-black">
          <li className="py-2 text-sm ">About us</li>
          <li className="py-2 text-sm">Terms and Conditions</li>
          <li className="py-2 text-sm">Commerce</li>
          <li className="py-2 text-sm">Support</li>
          <li className="py-2 text-sm">Copyright policy</li>

        </ul>
      </div>
    </div>
    
  );
};

export default Footer;
