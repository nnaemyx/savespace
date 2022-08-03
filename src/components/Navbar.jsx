import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenuUnfold, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import Logoimage from "../assests/logo.png";

function Navbar() {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="bg-[#F6F9FF] lg:p-8 p-8 lg:h-24  w-full">
      <div className="flex justify-between lg:p-16 lg:mt-[-60px]">
        <img
          src={Logoimage}
          alt="logo"
          className="lg:w-[64px] lg:h-[69px] w-[54px] h-[59px] ml-4 mt-[-30px]  lg:mt-[-30px] lg:ml-10"
        />

        <div>
          <ul className=" gap-9 font-bold text-[16px] hidden md:flex">
            <Link to="/">
              <li className="hover:text-violet-600 active:text-violet-700 text-[#0247FE]">
                Home
              </li>
            </Link>

            <Link to="/">
              <li className="hover:text-violet-600 active:text-violet-700 ">
                Save
              </li>
            </Link>

            <Link to="/">
              <li className="hover:text-violet-600 active:text-violet-700 ">
                Business
              </li>
            </Link>

            <Link to="/">
              <li className="hover:text-violet-600 active:text-violet-700 ">
                Blog
              </li>
            </Link>

            <Link to="/">
              <li className="hover:text-violet-600 active:text-violet-700 ">
                Contact Us
              </li>
            </Link>
          </ul>
        </div>

        <div className="font-bold mt-[-8px] hidden md:flex">
          <button className="rounded-md text-[#0247FE] list-none border-solid border border-[#0247FE] pl-4 pr-4 pt-2 pb-2  text-[16px]">
            Log in
          </button>
          <button className="rounded-md text-[white] list-none pl-4 border-solid  bg-[#0247FE]  pr-4 pt-2 pb-2 ml-4 text-[16px]">
            Create Free Account
          </button>
        </div>
      </div>

      <div
        onClick={handleNav}
        className="block md:hidden ml-[250px] mt-[-36px]"
      >
        {nav ? (
          <AiOutlineClose size={25} style={{ color: "#0247FE" }} />
        ) : (
          <AiOutlineMenuUnfold size={25} style={{ color: "#0247FE" }} />
        )}
      </div>

      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] bg-[#F6F9FF] h-full border-r-gray-900 ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <img
          src={Logoimage}
          alt="logo"
          className="w-[54px] h-[59px] mt-[10px] ml-10"
        />

        <div>
          <ul className=" gap-9 font-bold text-[16px] p-4">
            <Link to="/">
              <li className="hover:text-violet-600 active:text-violet-700 text-[#0247FE]  p-4 border-b">
                Home
              </li>
            </Link>

            <Link to="/">
              <li className="hover:text-violet-600 active:text-violet-700  p-4 border-b ">
                Save
              </li>
            </Link>

            <Link to="/">
              <li className="hover:text-violet-600 active:text-violet-700  p-4 border-b ">
                Business
              </li>
            </Link>

            <Link to="/">
              <li className="hover:text-violet-600 active:text-violet-700 p-4 border-b">
                Blog
              </li>
            </Link>

            <Link to="/">
              <li className="hover:text-violet-600 active:text-violet-700  p-4 border-b ">
                Contact Us
              </li>
            </Link>
          </ul>
        </div>

        <div className="font-bold mt-[-8px] ">
          <button className="rounded-md text-[#0247FE] list-none border-solid border border-[#0247FE] pl-4 pr-4 pt-2 pb-2 ml-8 border-b  text-[14px]">
            Log in
          </button>
          <button className="rounded-md text-[white] list-none pl-4 border-solid  bg-[#0247FE]  pr-4 pt-2 pb-2 mt-4 ml-8 border-b text-[14px]">
            Create Free Account
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
