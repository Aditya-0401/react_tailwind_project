import React from "react";
import { Backbtn } from "./Backbtn";

{/* font-family abhi nhi di h */}


export const TopBar = () => {
  return (
    <>
      
        {/* <nav className="flex fixed top-0 right-0 w-[1190px] bg-[#fff] h-20 border-2 items-end">
          <div className="flex ml-[120px] items-center">
          <span className="">
            <Backbtn/>
          </span>
          <button className="text-xl font-bold leading-8">
            Back
          </button>
          </div>
        </nav> */}

        {/* <h1 className="mt-[100px] ml-[23rem] text-black font-bold leading-[48px] text-3xl">
          Order Summary
        </h1> */}
        <nav className="sticky top-0 w-full h-[80px] border-b-4 bg-[#FFFFFF] flex items-center">
          <div className="flex items-center ml-[90px] ">
            <button className="text-xl font-bold leading-8 flex flex-row items-center">
            <Backbtn/>Back
            </button>
          </div>
        </nav>
      
    </>
  );
};

// export const TopBar = () => {
//   return (
//     <>
//       <div>
//         <nav className="flex fixed top-0 right-0 w-[1190px] bg-[#fff] h-20 border-2 items-end">
//           <div className="flex ml-[120px] items-center">
//           <span className="">
//             <Backbtn/>
//           </span>
//           <button className="text-xl font-bold leading-8">
//             Back
//           </button>
//           </div>
//         </nav>

//         <h1 className="mt-[100px] ml-[23rem] text-black font-bold leading-[48px] text-3xl">
//           Order Summary
//         </h1>
//       </div>
//     </>
//   );
// };
