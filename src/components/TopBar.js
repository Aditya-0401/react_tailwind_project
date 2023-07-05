import React from "react";
import { Backbtn } from "./Backbtn";

export const TopBar = () => {
  return (
    <>
      <div>
        {/* font-family abhi nhi di h */}
        <nav className="flex fixed top-0 right-0 w-[1190px] bg-[#fff] h-20 border-2 items-end">
          <div className="flex ml-[120px] items-center">
          <span className="">
            <Backbtn/>
          </span>
          <button className="text-xl font-bold leading-8">
            Back
          </button>
          </div>
        </nav>

        <h1 className="mt-[100px] ml-[23rem] text-black font-bold leading-[48px] text-3xl">
          Order Summary
        </h1>
      </div>
    </>
  );
};
