import React from 'react'

export const PaymentSummary = () => {
  return (
    <div className="border border-[#EAECEF] rounded-lg mt-4 w-[90%] bg-[#FFFFFF] mx-auto h-[235px]">

                  <p className="font-bold text-[20px] leading-8 ml-2 p-1 text-[#3D3D3D]">
                      Payment Summary
                  </p>

                  <div className="flex items-center justify-between ml-3">
                    <p className="text-[#3D3D3D] font-medium text-[14px]">Price(3 Items)</p>
                    <p className="p-2 text-[#3D3D3D] font-medium text-[14px]">₹5999</p>
                  </div>

                  <div className="flex items-center justify-between ml-3">
                    <p className="text-[#3D3D3D] font-medium text-[14px]">Discount</p>
                    <p className="p-2 font-medium text-[14px] text-[#3F8E58]">-₹299</p>
                  </div>

                  <div className="flex items-center justify-between ml-3">
                    <p className="text-[#3D3D3D] font-medium text-[14px]">Delivery Charges</p>
                    <p className="p-2 text-[#3D3D3D] font-medium text-[14px]">₹99</p>
                  </div>

                  <div className="flex items-center justify-between ml-3">
                    <p className="text-[#3D3D3D] font-medium text-[14px]">Coupon Disc.</p>
                    <p className="p-2 font-medium text-[14px] text-[#3F8E58]">-₹99</p>
                  </div>

                  <div className="border border-[#EFEFEF] w-[95%] mx-auto"></div>

                  <div className="flex items-center justify-between ml-3">
                    <p className="text-[#3D3D3D] font-bold text-[16px]">Total Amount</p>
                    <p className="p-2 font-bold text-[16px] text-[#3D3D3D]">₹5601</p>
                  </div>

              </div>
  )
}
