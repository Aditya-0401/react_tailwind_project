import React from 'react'

import { PaymentSummary } from "./PaymentSummary";

export const Discount = () => {
  return (
    <>
              <div className="flex justify-between items-center w-[374px] border border-[#EAECEF] rounded-lg mt-4 h-[80px] mx-[20px] bg-[#FFFFFF]">
                <div className="flex flex-col p-[15px]">
                <img src=""/>
                <p className="text-[#676B72] text-[14px] font-medium">Redeem 500 wallet points</p>
                <p className="text-[10px] font-bold">to save<span className="text-[#3F8E58]"> ₹200</span> more</p>
                </div>
                <button className="text-[#5A4BDA] font-bold p-[25px]">APPLY</button>
              </div>

              <div className="flex justify-between items-center w-[374px] border border-[#EAECEF] rounded-lg mt-2 h-[80px] mx-[20px] bg-[#FFFFFF] border-b-0">
                <div className="flex flex-col p-[15px]">
                <img src=""/>
                <p className="text-[#676B72] text-[14px] font-medium">Write Coupon Code</p>
                </div>
                <button className="text-[#5A4BDA] font-bold p-[25px] border-l-[#EAECEF]">FIND COUPONS</button>
              </div>

              <div className="flex justify-between items-center w-[360px] border border-[#EAECEF] rounded-lg h-[100px] mx-[28px] bg-[#FFFFFF] mb-[9px]">
                <div className="p-[16px] my-[30px] w-[200px]">
                  <p className="text-[#333] text-[14px] font-medium">Apply your referral code to to get <span className="text-[#3F8E58]"> ₹200</span> off</p>
                  <p className="text-[#888] text-[10px] font-medium">Validity: 13 Dec 2022, 23:55</p>
                </div>
                <button className="font-semibold p-[10px] text-[14px] text-[#3F8E58] mr-[30px]">Click Here</button>
              </div>

              <div className="border border-[#EAECEF] w-[95%] mx-auto"></div>

              <PaymentSummary/>

              </>

            
  )
}
