import React from 'react'
import RightBtn from './RightBtn';
import InfoCircle from './InfoCircle';

export const Descline = () => {
  return (
    <div className="flex justify-between items-center my-4">
        <p className="text-[#3D3D3D] font-semibold text-[14px]">4 Items included in this combo</p>
          <div className="flex mr-10 text-indigo-500">
            <span><InfoCircle/></span>
            <a href="#">
                More Info
            </a>
            <span><RightBtn/></span>
          </div>
    </div>
  )
}
