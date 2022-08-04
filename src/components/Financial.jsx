import React from "react";
import phone from "../assests/phone.png";

function Financial() {
  return (
    <div className="w-full h-screen bg-white lg:mt-[-180px]  mt-[10px]  py-16 px-4">
        <div className="lg:max-w-[1000px] w-full h-screen mx-auto flex justify-between lg:gap-[10rem]   flex-col-reverse lg:flex-row">
            <div className=" lg:ml-[-10px] ml-[50px] ">
                <img src={phone} alt="" className="w-[200px] lg:w-[400px] lg:h-[550px]  h-[400px]" />
            </div>

            <div className="  lg:w-[870px]  ">
                <h1 className="lg:text-[40px] text-[22px] font-bold">Rewarding Your Every Step Of Financial journey</h1>
                <p>
                    We have your back! You can count on us too. We want to give you the
                    freedom of opening a save and secure savings and investment account
                    with ₦0.
                </p>
            </div>
        </div>
    </div>
  );
}

export default Financial;
