import React from 'react';
import { LeftNavigation } from './components/LeftNavigation';
import { TopBar } from './components/TopBar';
import { Item } from './components/Item';
import { Recommended } from './components/Recommended';
import { Ordersummary } from './components/Ordersummary';
import { Bottomdiv } from './components/Bottomdiv';
import { Discount } from './components/Discount';
import ArjunaImg from "./images/arjuna.png";

function App() {

  return(
    <>
    <div className="flex h-screen font-gilroy">
      <div className="h-screen">
        <LeftNavigation/>
      </div>
      {/* remaining div */}
      {/* flex-1 is used to give remaining space to the container otherwise it will acquire the space as per its content */}
      <div className="h-screen flex-1">
          <TopBar/>
        <div className="h-[calc(100vh-80px)] overflow-y-auto bg-[#F8F8F8] flex">
          
          <div className="flex-col">
            <Ordersummary/>
            <Item/>
            <Recommended/>
            <Bottomdiv/>
          </div>

          <div className="flex flex-col mt-14">

            <div className="w-[420px] border-2 rounded-lg mt-4 h-[100vh] ml-[20px] bg-[#FFFFFF]">
                <Discount/>
                <button className="text-[#FFFFFF] bg-[#5A4BDA] w-[374px] ml-[20px] my-3 rounded-md font-medium h-[60px]">PROCEED TO BUY</button>
            </div> 

            <div className="w-[420px] border-1 border-[#EAECEF] rounded-lg mt-4 h-[340px] ml-[20px] bg-[#FFFFFF]">
                <div className="leading-8 p-1  ml-3 text-[16px]">
                  <p className="text-[16px] text-[#757575] font-semibold">You are buying <span className='text-black font-medium'> (1) items</span></p>
                </div>

                <div className="flex flex-col border w-[83.6px] h-[103.4px] items-center text-center ml-[20px] mb-4 rounded-md">
                  <img src={ArjunaImg} alt="Arjuna Image" className="mt-2"/>
                  <p className="text-[12px] font-semibold text-[#3D3D3D] ml-[10px]">Arjuna JEE Batch...</p>
                  <p className="text-[#757575] font-medium text-[10px]">₹5999</p>
                </div>
      
            </div>

          </div>

        </div>
      </div>
    </div>
    </>
  );
  
}

export default App;
