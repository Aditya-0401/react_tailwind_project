import React from "react";
import TabContentOne from "./TabContentOne";

export const Recommended = () => {
  return (
    <div className="ml-[23rem] w-[550px] border-2 rounded-lg mt-4 h-[643px]">
      <p className="font-semibold text-[20px] leading-8 ml-3 p-1 text-[#3D3D3D]">
        PW Recommended Combos
      </p>

      <div className="flex border-2 mt-4 w-[515px] mx-auto text-[#5A4BDA]">
        <button className="border-2 px-4 w-[25%]  bg-indigo-200  border-indigo-200 text-[#757575] font-semibold text-sm">
          Champion
        </button>
        <button className="px-4 w-[25%]  border-2 border-indigo-200 text-[#757575] font-semibold text-sm">
          Topper
        </button>
        <button className="border-2 border-indigo-200 px-4 w-[25%] text-[#757575] font-semibold text-sm">
          Sprint
        </button>
        <button className="px-4 w-[25%] text-[#757575] font-semibold text-sm border-indigo-200 border-2">
          Basic
        </button>
      </div>

      <TabContentOne/>
    </div>
  );
};
