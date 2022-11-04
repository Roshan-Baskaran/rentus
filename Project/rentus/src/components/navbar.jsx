import { useState } from "react";
import {  logo} from "../assets";
import { Link } from "react-router-dom";
import { AiOutlineSearch, AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    
    <nav className="flex  items-center justify-between  navbar md:h-20 sm:h-28 h-28">
      <div className=" block ml-4">
        <img src={logo} alt="logo" className="h-[3rem]" />
        <div className="flex relative top-4 w-40 mb-7 ml-1  bg-white rounded-full md:hidden sm:flex items-center px-2 w-{400px}  lg:w-[400] ">
          <AiOutlineSearch size={36} />
          <input
            className="bg-transparent p-1 w-full focus:outline-none placeholder:italic"
            type="text"
            placeholder="Search"
          />
        </div>
      </div>
      <div className="hidden bg-white rounded-full md:flex items-center px-2 w-{400px}  lg:w-[400] ">
        <AiOutlineSearch size={36} />
        <input
          className="bg-transparent p-1 w-full focus:outline-none placeholder:italic"
          type="text"
          placeholder="Search the Product here....."
        />
      </div>
      <div className="flex flex-row space-x-1.5 relative right-11">
        <button
          
          className="bg-violet-400 text-white px-4 hidden  relative right-11  py-2 sm:flex rounded-full  hover:bg-violet-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>
          cart
        </button>
        <button
          
          className=" bg-black  text-white px-4 hidden relative right-10  py-2 sm:flex rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          Signin
        </button>
        <div onClick={handleNav} className="sm:hidden  ">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={30} />}
        </div>
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[30%] h-full md:hidden border-r-black-600  bg-gray-600 ease-in-out duration-500 "
              : "fixed left-[-100%]"
          }
        >
          <ul className="uppercase p-4 flex flex-col">
            <li className="p-4  border-b border-black-600">Home </li>
            <li className="p-4 border-b border-black-600">Your orders</li>
            <li className="p-4 border-b border-black-600"> Your Payements</li>
            <li className="p-4 border-b border-black-600">about us</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default navbar;
