import React from "react";

export const Smallbox = ({months}) => {
  return (
    <div className={`border-2 w-[40px] h-[40px] text-xs flex flex-col text-center mr-1 rounded-md ${months === '9' ? 'border-indigo-200 text-[#5A4BDA] bg-[#F1EFFF]':'border-gray-400 text-[#7B7F86]'}`}>
      <p>{months}</p>
      <p>mons</p>
    </div>
  );
};
