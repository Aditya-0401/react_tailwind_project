import React from "react";
import Treasure from "../images/Treasure.png";
import CheckBox from "../images/Checkbox.png";
import Group from "../images/Group.png";
import Book from "../images/book.png";

import Card from "./Card";


export const Bottomdiv = () => {
  return (
    <div className="w-[550px] border-2 rounded-lg mt-4 h-[340px] ml-[90px] bg-[#FFFFFF]">
      <div className="leading-8 p-1 text-[#3D3D3D] ml-3">
        <p className="font-bold text-[20px]">Add more items</p>
        <p className="text-[14px]">Recommended for you</p>
      </div>

      <div className="flex overflow-x-scroll">
      <Card imgOne={Treasure} imgTwo={CheckBox} title="Khajana" price="8500"/>
      <Card imgOne={Group} imgTwo={CheckBox} title="Saarthi" price="8500"/>
      <Card imgOne={Book} imgTwo={CheckBox} title="Chemistry, Physi..." price="8500"/>
      <Card imgOne={Group} imgTwo={CheckBox} title="Chemistry, Physi..." price="8500"/>
      <Card imgOne={Treasure} imgTwo={CheckBox} title="Chemistry, Physi..." price="8500"/>

      </div>
      
    </div>
  );
};
