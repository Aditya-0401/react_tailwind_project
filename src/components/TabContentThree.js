import React from 'react'
import { Descline } from './Descline';
import { Griditem } from './Griditem';
import { Tick } from './Tick';
import { Smallbox } from './Smallbox';
import CheckBox from "../images/Checkbox.png";
import Trending from "../images/trending.png";

const TabContentThree = () => {
  return (
    <div className="mx-4">
      <Descline/>
      <div>
          <Griditem title="Books" content="Arjuna JEE(11th)"/>
          <Griditem title="Khjaana" content="Alakh sir’s Top rated classes"/>
      </div>
      
      <div className="bg-[#DFF1E4]">
        <p className="text-[#3F8E58] flex justify-center">
          <div className="mr-3 text-[#3F8E58] font-bold">
            <img src={Trending} alt="Trending Pic"/>
          </div>
          80% students bought this combo
        </p>
      </div>

      <div className="flex justify-between items-center">
        
        <div className="flex flex-col">
              <div className="w-[100px] bg-green-600 opacity-80 text-white rounded-sm text-center">10% OFF
              </div>
              <div className="flex font-bold py-2 mb-2">
                <p>₹3999</p>
                <p className="ml-3 text-[#8D9091] text-[14px] text-medium leading-normal pt-[2px] line-through">
                      8500
                </p>
              </div>
        </div>

        <button className="bg-[#F1EFFF] flex mr-10 text-[#5A4BDA] w-[150px] h-10 items-center justify-center mb-2">
          <img src={CheckBox}/>
          <div className="ml-3">Add</div>
        </button>

      </div>

    </div>

    
  )
}

export default TabContentThree;

