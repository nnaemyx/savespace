import React from "react";
import Hero1 from "../assests/hero.png";
import apple from "../assests/apple.png";
import android from "../assests/playstore.png";
import skew from "../assests/skew.png";

function Hero() {
  return (
    <div className="text-black w-full bg-white py-16 px-4">
      <div className="max-w-[800px]  w-full h-screen mx-auto grid lg:grid-cols-2 ">
        <div className="  lg:w-[700px] lg:ml-[-100px] mt-[-20px] lg:mt-[70px] ">
          <div>
            <img
              src={skew}
              alt=""
              className=" absolute lg:inline-block hidden  lg:ml-[310px] h-[30px] w-[75px] ml-[117px] mt-[-4px] lg:h-[70px] lg:w-[190px] lg:mt-[-6px] "
            />
            <h1 className="lg:text-[42px] text-[22px] font-bold lg:relative">
              You Don’t Save,<span className="lg:text-white">We Save!</span>
            </h1>
          </div>
          <h1 className="lg:text-[42px] text-[22px] font-bold">Your Money, Your Terms.</h1>
          <p className="lg:w-[500px]">
            Disrupting the traditional financial sector by offering better
            financial solutions, while staying true to the human values of
            trust, honesty, and fairness. Secure your future with our secure
            investments.
          </p>
          <button className="rounded-md text-[white] list-none pl-4 border-solid  bg-[#0247FE]  pr-4 pt-2 mt-4 pb-2 lg:mb-0 mb-6 text-[16px]">
            Create Free Account
          </button>

          <div className="gap lg:block flex">
            <button className="rounded-md text-[#0247FE] border-solid border border-[#0247FE] lg:pl-4 lg:pr-4 lg:pt-2 lg:pb-2 m-1  ml-[-1px] lg:mr-[-10px] pt-8 pl-4 pr-2 ">
              <div className="flex mt-[-25px] lg:mt-0">
                <span>
                  <img src={apple} alt="" className="mt-[-2px]" />
                </span>
                <h1 className="ml-1 text-[14px] lg:text-[16px]">Get On Apple</h1>
              </div>
            </button>
            <button className="rounded-md text-[#0247FE]  border-solid border border-[#0247FE] lg:pl-4 lg:pr-4 lg:pt-2 lg:pb-2 lg:m-6 m-1  pt-10 pl-4  ">
              <div className="flex mt-[-30px] lg:mt-0">
                <span>
                  <img src={android} alt="" className="mr-1"  />
                </span>
                <h1 className="mr-2  lg:text-[16px] text-[14px]">Get On Android</h1>
              </div>
            </button>
          </div>
        </div>

        <div>
          <img
            src={Hero1}
            alt="hero1"
            className="lg:w-[500px] lg:mx-[135px] lg:my-[-20px] mt-4"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
