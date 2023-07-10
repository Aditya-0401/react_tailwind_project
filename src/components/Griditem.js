import React from "react";
import { Tick } from './Tick';

export const Griditem = ({title,content}) => {
  return (
    <div className="mb-4">
      <div className="flex">
        <span className="text-green-600 mr-2 mb-2">
          <Tick />
        </span>
        <p className="text-[14px] font-bold">{title}</p>
      </div>
      <li className="ml-[31px] text-[#757575] mb-2">{content}</li>
      <hr/>
    </div>
  );
};
