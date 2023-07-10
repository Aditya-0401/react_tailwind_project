import React, { useState } from "react";
import TabContentOne from "./TabContentOne";
import TabContentTwo from "./TabContentTwo";
import TabContentThree from "./TabContentThree";
import TabContentFour from "./TabContentFour";


export const Recommended = () => {
  
  const [currentIndex,setCurrentIndex] = useState(1);

  function handleClick(e){
    const tabIndex = e.target.id;
    const index = tabIndex.split('-')[1];
    setCurrentIndex(index);
  }

  return (
    <div className="w-[550px] border-2 rounded-lg mt-4 ml-[90px] bg-[#FFFFFF]">
      <p className="font-bold text-[20px] leading-8 ml-3 p-1 text-[#3D3D3D]">
        PW Recommended Combos
      </p>

      <div className="flex border mt-4 w-[515px] mx-auto text-[#5A4BDA] h-[40px]">
        <button id="tab-1" onClick = {handleClick} className={`tab-item px-4 w-[25%]  border  font-semibold text-sm ${currentIndex==1 ? 'border-indigo-200 bg-[#F1EFFF] text-[#5A4BDA]' : 'border-indigo-100 text-[#757575] bg-[#FFF]' }`}>
          Champion
        </button>
        <button id="tab-2" onClick = {handleClick} className={`tab-item px-4 w-[25%]  border  font-semibold text-sm ${currentIndex==2 ? 'border-indigo-200 bg-[#F1EFFF] text-[#5A4BDA]' : 'border-indigo-100 text-[#757575] bg-[#FFF]' }`}>
          Topper
        </button>
        <button id="tab-3" onClick = {handleClick} className={`tab-item px-4 w-[25%]  border  font-semibold text-sm ${currentIndex==3 ? 'border-indigo-200 bg-[#F1EFFF] text-[#5A4BDA]' : 'border-indigo-100 text-[#757575] bg-[#FFF]' }`}>
          Sprint
        </button>
        <button id="tab-4" onClick = {handleClick} className={`tab-item px-4 w-[25%]  border  font-semibold text-sm ${currentIndex==4 ? 'border-indigo-200 bg-[#F1EFFF] text-[#5A4BDA]' : 'border-indigo-100 text-[#757575] bg-[#FFF]' }`}>
          Basic
        </button>
      </div>

      {currentIndex == 1 && <TabContentOne/>}
      {currentIndex == 2 && <TabContentTwo/>}
      {currentIndex == 3 && <TabContentThree/>}
      {currentIndex == 4 && <TabContentFour/>}
      

    </div>
  );
};
