import React from "react";
import Logoimage2 from "../assests/logo2.png";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="max-w-[1240px] bg-[#0247FE] mx-auto w-full py-16 px-4 grid lg:grid-cols-3  lg:mt-[-120px] mt-[180px] gap-8 text-white">
      <div>
        <img
          src={Logoimage2}
          alt="logo"
          className="lg:w-[64px] lg:h-[69px] w-[54px] h-[59px] ml-4 mt-[-30px]  lg:mt-[-30px] lg:ml-10"
        />
        <p className="py-4">
         SaveSpace is the world largest and most secure digital savings service.
        </p>
        <div className="flex md:w-[75%] justify-between my-6">
          <FaDribbbleSquare size={30} />
          <FaFacebookSquare size={30} />
          <FaGithubSquare size={30} />
          <FaInstagram size={30} />
          <FaTwitterSquare size={30} />
        </div>
      </div>
      <div className="lg:col-span-2  mt-6 flex justify-between">
        <div>
          <h6 className="font-bold text-white  ">Company</h6>
          <ul>
            <li className="py-2 text-sm">Career</li>
            <li className="py-2 text-sm">SaveSpace Blog</li>
            <li className="py-2 text-sm">Press</li>
            <li className="py-2 text-sm">Our story</li>
            <li className="py-2 text-sm">Contact</li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold text-white">Product</h6>
          <ul>
            <li className="py-2 text-sm">Features</li>
            <li className="py-2 text-sm">What's New?</li>
            <li className="py-2 text-sm">Coming</li>
            <li className="py-2 text-sm">Savespace guide</li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold text-white ">Resources</h6>
          <ul>
            <li className="py-2 text-sm">Forum</li>
            <li className="py-2 text-sm">SaveSpace community</li>
            <li className="py-2 text-sm">Events</li>
            <li className="py-2 text-sm">Acessbility</li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold text-white ">About</h6>
          <ul>
            <li className="py-2 text-sm">Support</li>
            <li className="py-2 text-sm">Terms of Use</li>
            <li className="py-2 text-sm">Privacy Policy</li>
            <li className="py-2 text-sm">FAQ</li>
          </ul>
        </div>
      </div>

      <p className="text-center justify-center ml-2  text-gray-100">
        Copyright ©
      </p>
    </div>
  );
};

export default Footer;
