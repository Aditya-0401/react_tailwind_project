import React from 'react'
import { Descline } from './Descline';
import { Griditem } from './Griditem';
import { Tick } from './Tick';
import { Smallbox } from './Smallbox';
import CheckBox from "../images/Checkbox.png";
import Trending from "../images/trending.png";

const TabContentOne = () => {
  return (
    <div className="mx-4">
      <Descline/>
      <div>
          <Griditem title="Books" content="Arjuna JEE(11th)"/>
          <Griditem title="Khjaana" content="Alakh sir’s Top rated classes"/>
          <Griditem title="Test Series" content="Papers created by expert faculties"/>
      
          <div className="mb-4">  
            <div className="flex">
                <span className="text-green-600 mr-2 mb-2">
                    <Tick />
                </span>
                <p className="text-[#3D3D3D] font-semibold text-[14px]">Saarthi*</p>
            </div>
            <li className="ml-[31px] text-[#757575] mb-2">Live teacher assistance/chat</li>
            <li className="ml-[31px] text-[#757575] mb-2">Create your own planner</li>
            <li className="ml-[31px] text-[#757575] mb-2">Doubt solving using Image upload</li>
            <p className="ml-[50px] text-[#757575] mb-2 text-sm">*Select duration for saarthi</p>

            {/* small square box item */}
            <div className="flex flex-row ml-[50px]">
              <Smallbox months="3"/>
              <Smallbox months="6"/>
              <Smallbox months="9"/>
              <Smallbox months="12"/>
            </div>
          </div>

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
              <div className="flex font-bold py-2">
                <p>₹3999</p>
                <p className="ml-3 text-[#8D9091] text-[14px] text-medium leading-normal pt-[2px] line-through">
                      8500
                </p>
              </div>
        </div>

        <button className="bg-[#F1EFFF] flex mr-10 text-[#5A4BDA] w-[150px] h-10 items-center justify-center">
          <img src={CheckBox}/>
          <div className="ml-3">Add</div>
        </button>

      </div>

    </div>

    
  )
}

export default TabContentOne;

