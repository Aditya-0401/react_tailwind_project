import React from 'react'

export default function Card({imgOne,imgTwo,title,price}) {
  return (
    <div className="ml-3 w-[170px] border-2">
        <div className="flex w-[152px] h-[152px] bg-[#F8F8F8] items-center justify-center mx-auto mt-2">
          <img src={imgOne} />
        </div>
        <p className="ml-[7px]">{title}</p>
        <p className="text-[14px] ml-[7px] text-medium leading-normal pt-[2px]">₹{price}</p>
        <hr />
        <button className="flex mr-10 ml-[7px] text-[#5A4BDA] w-[150px] h-10 items-center">
          <img src={imgTwo} />
          <div className="ml-3">Add</div>
        </button>
      </div>
  )
}
