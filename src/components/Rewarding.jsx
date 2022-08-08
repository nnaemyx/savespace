import React from "react";
import financialImg from "../assests/financial.png";
import passportImg from "../assests/passport.png";

function Rewarding() {
  return (
    <div className="w-full h-screen bg-white lg:mt-[-60px]  mt-[60px]  py-16 px-4">
      <div className="lg:max-w-[1000px] w-full h-screen mx-auto flex justify-between lg:gap-[10rem]   flex-col lg:flex-row">
        <div className="lg:w-[600px]">
          <h1 className="lg:text-[40px] font-bold text-[25px]">Stay Focused on Your Financial Goals</h1>
          <p className="lg:text-[18px] text-[14px] ">
            Improve your financial goals with custom goals that keep you going.
            Save for a home, gadgets, car, education, conquer debt and be on
            your way to financial indepence.
          </p>

            <div className="flex mt-6">
                <img src={passportImg} alt="passport" className="lg:w-[100px] lg:h-[100px]   w-24 h-24" />
                <h1 className="ml-[25px]">
                    “SaveSpace helped me reduce my spending habit. I needed money for my
                    house rent so I started saving with SaveSpace, I was able to save
                    with discipline.”
                </h1>
                        
            </div>
            <p className="font-bold ml-[120px] lg:mt-[-20px] mt-4">Ade Lola - Student </p>       
        </div>

        <div>
          <img src={financialImg} alt="financial" className="w-96 lg:mt-0 mt-6" />
        </div>
      </div>
    </div>
  );
}

export default Rewarding;
