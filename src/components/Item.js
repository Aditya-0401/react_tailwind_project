import React from "react";
import Img1 from "../images/img1.png";

// src/images/img1.png
// /Users/adityakhandelwal/Desktop/react_project/src/images/img1.png
export const Item = () => {
  return (
    <div className="ml-[23rem] w-[550px] border-2 flex flex-col rounded-lg">
      <p className="font-semibold text-2xl leading-8 ml-3 p-1 text-[#3D3D3D]">
        Items in cart
      </p>
      <div className="flex items-start gap-2 text-[#333333] mt-4 ml-3 mb-4">
        <img src={Img1} />
        <div className="flex flex-col p-3">
          <p className="text-sm font-semibold text-[#3D3D3D]">
            Dropper NEET Material 2022 Edition
          </p>
          <div className="flex">
            <p className="font-bold">₹699</p>
            <p className="ml-3 text-[#8D9091] text-[14px] text-medium leading-normal pt-[2px] line-through">
              899
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
