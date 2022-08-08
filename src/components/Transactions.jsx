import React from "react";
import transactionImg from "../assests/transaction.png";

function Transactions() {
  return (
    <div className="w-full h-screen bg-white lg:mt-[80px]  mt-[40px]  py-16 px-4">
      <div className="lg:max-w-[1000px] w-full h-screen mx-auto flex justify-between lg:gap-[10rem] flex-col lg:flex-row">
        <div className="">
          <h1 className="lg:text-[40px] text-[25px] font-bold">
            SaveSpace, Your all in one savings application.
          </h1>
            <ul className="mt-4">
                <li className="mb-4">
                    <span>&#8226;</span>SaveSpace allows you to track your transactions quick and easily.
                </li>
                <li className="mb-4">
                    <span>&#8226;</span>SaveSpace products and services are complete and varies in all
                    segments according to users needs.
                </li>
                <li className="mb-4">
                    <span>&#8226;</span>User friendly and easy navigation savings and investment mobile
                    app.
                </li>
                  </ul>
                     <button className="rounded-md text-[white]  pl-10 border-solid  bg-[#0247FE]  pr-10 pt-2 mt-6 pb-2 lg:mb-0 mb-6 text-[16px]">
              Try for Free
            </button>
        </div>

        <div>
          <img src={transactionImg} alt="" className="w-[570px]" />
        </div>
      </div>
    </div>
  );
}

export default Transactions;
