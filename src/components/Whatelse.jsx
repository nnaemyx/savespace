import React from "react";
import whatelseImg from "../assests/whatelseimg.png";

function Whatelse() {
  return (
    <div className="w-full h-screen bg-white lg:mt-[-50px]  mt-[350px]  py-16 px-4">
      <div className="lg:max-w-[1000px] w-full h-screen mx-auto flex justify-between lg:gap-[10rem] flex-col-reverse  lg:flex-row">
        <div>
          <img src={whatelseImg} alt="" className="lg:mt-[-58px] mt-42" />
        </div>

        <div className="">
          <h1 className="lg:text-[40px] text-[25px] font-bold">
            What else can you do with SaveSpace?
          </h1>
          <ul className="mt-4">
            <li className="mb-4">
              <span>&#8226;</span>Are you scared of participating in ajo, esusu
              or adashe? SaveSpace allows you participate in thrift worry free.
            </li>
            <li className="mb-4">
              <span>&#8226;</span>Accept payments from all banks. Several
              features on the app ensure maximum guarantee and transparency.
            </li>
            <li className="mb-4">
              <span>&#8226;</span>SaveSpace allows you to invest your money in
              different industries, with mouth watering ROI.
            </li>
          </ul>
          <button className="rounded-md text-[white]  pl-10 border-solid  bg-[#0247FE]  pr-10 pt-2 mt-6 pb-2 lg:mb-0 mb-6 text-[16px]">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Whatelse;
