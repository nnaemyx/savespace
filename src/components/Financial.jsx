import React from "react";
import phone from "../assests/phone.png";
import useradd from "../assests/user-add.png";
import cardadd from "../assests/card-add.png";
import walletadd from "../assests/wallet-add.png";
import people from "../assests/people.png";

function Financial() {
  return (
    <div className="w-full h-screen bg-white lg:mt-[-180px]  mt-[350px]  py-16 px-4">
      <div className="lg:max-w-[1000px] w-full h-screen mx-auto flex justify-between lg:gap-[10rem]   flex-col-reverse lg:flex-row">
        <div className=" lg:ml-[-10px] ml-[50px] ">
          <img
            src={phone}
            alt=""
            className="w-[200px] lg:w-[400px] lg:h-[550px]  h-[400px]"
          />
        </div>

        <div className="  lg:w-[870px]  ">
          <h1 className="lg:text-[40px] text-[25px] font-bold">
            Rewarding Your Every Step Of Financial journey
          </h1>
          <p>
            We have your back! You can count on us too. We want to give you the
            freedom of opening a save and secure savings and investment account
            with ₦0.
          </p>
          <div className="flex gap-8 lg:mt-12">
            <div>
              <img src={useradd} alt="useradd" className="lg:w-10 w-14 lg:mt-0 mt-4" />
            </div>

            <div className="lg:mt-2 mt-4">
              <h1 className="text-[14px] lg:text-[18px]">Create a SaveSpace account to get started. It’s free!!! </h1>
            </div>
          </div>

          <div className="flex gap-8 mt-10">
            <div>
              <img src={cardadd} alt="useradd" className="lg:w-14  w-24 lg:mt-0 mt-1" />
            </div>

            <div className="mt-[-4px]">
              <h1 className="text-[14px] lg:text-[18px]">
                Link your bank account to your SaveSpace account. Don’t worry
                your details are safe with us.
              </h1>
            </div>
          </div>
            <div className="flex gap-8 mt-10">
                <div>
                    <img src={walletadd} alt="useradd" className="lg:w-16 w-28 lg:mt-0 mt-1" />
                </div>

                <div className="mt-[-4px]">
                    <h1 className="text-[14px] lg:text-[18px]">
                        Start saving!!! You don’t have to worry about late payments, you
                        can tell us to automatically save for you.
                    </h1>
                </div>
            </div>
            <div className="flex gap-8 mt-10">
              <div>
                <img src={people} alt="useradd" className="lg:w-20 w-36 lg:mt-0 mt-1" />
              </div>

              <div className="mt-[-4px]">
                <h1 className="text-[14px] lg:text-[18px]">
                  Participate in thrifts (ajo, esusu and adashe) with your family
                  and friends. Create a thrift plan and invite your friends to
                  join you.
                </h1>
              </div>
            </div>
            <button className="rounded-md text-[white]  pl-10 border-solid  bg-[#0247FE]  pr-10 pt-2 mt-6 pb-2 lg:mb-0 mb-6 text-[16px]">
              Try for Free
            </button>
        </div>
      </div>
    </div>
  );
}

export default Financial;
