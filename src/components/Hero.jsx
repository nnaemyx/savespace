import React from "react";
import Hero1 from "../assests/hero.png";
import apple from '../assests/apple.png';
import android from '../assests/playstore.png'
import skew from '../assests/skew.png'

function Hero() {
  return (
    <div className="text-black w-full bg-white py-16 px-4">
      <div className="max-w-[800px]  w-full h-screen mx-auto grid lg:grid-cols-2 ">
        <div className="  lg:w-[700px] lg:ml-[-100px] lg:mt-[70px] ">
          <div>
            <img src={skew} alt="" className="absolute ml-[310px] h-[70px] w-[190px] mt-[-6px] " />
            <h1 className="lg:text-[42px] font-bold lg:relative">You Don’t Save,<span className="text-white">We Save!</span></h1>
          </div>
          <h1 className="lg:text-[42px] font-bold">Your Money, Your Terms.</h1>
          <p className="lg:w-[500px]">
            Disrupting the traditional financial sector by offering better
            financial solutions, while staying true to the human values of
            trust, honesty, and fairness. Secure your future with our secure
            investments.
          </p>
          <button className="rounded-md text-[white] list-none pl-4 border-solid  bg-[#0247FE]  pr-4 pt-2 mt-4 pb-2 text-[16px]">
            Create Free Account
          </button>

          <div className="gap">
            <button className="rounded-md text-[#0247FE] border-solid border border-[#0247FE] pl-4 pr-4 pt-2 pb-2 text-[16px]">
              <div className="flex">
                <span><img src={apple} alt="" /></span>
                <h1 className="ml-2">Get On Apple</h1>
              </div>
            </button>
            <button className="rounded-md text-[#0247FE]  border-solid border border-[#0247FE] pl-4 pr-4 pt-2 pb-2 m-6  text-[16px]">
              <div className="flex">
                <span><img src={android} alt="" /></span>
                <h1 className="ml-2">Get On Android</h1>
              </div>
            </button>
          </div>
        </div>

        <div>
          <img
            src={Hero1}
            alt="hero1"
            className="lg:w-[500px] lg:mx-[135px] lg:my-[-20px]"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
