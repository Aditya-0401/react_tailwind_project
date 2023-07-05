import React from "react";
import { Navitems } from "./Navitems";
import RightBtn from "./RightBtn";
import logo from "../images/logo pw.png";

export const LeftNavigation = () => {
  return (
    <aside
      id="default-sidebar"
      className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 ]"
      aria-label="Sidebar"
    >
      <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50">
        <ul className="space-y-2 font-medium">
          <li >
            <div className="flex items-center ml-5">
              <img src={logo}/>
              <p className="ml-5 font-bold">Physics Wallah</p>
            </div>
          </li>

          <li>
            <div className="flex ml-10 items-center my-10">
              <p className="text-sm text-[#333333]">UPDATE ACADEMIC INFO</p>
              <span><RightBtn/></span>
            </div>
          </li>

          <hr/>
          <Navitems title="Home"/>
          <Navitems title="Batches"/>
          <Navitems title="Study"/>
          <Navitems title="Library"/>
          <Navitems title="Test Series"/>
          <Navitems title="PW Store"/>
          <hr/>
          <Navitems title="Feed"/>
          <Navitems title="Bookmarks"/>
          <Navitems title="Notifications"/>
          <Navitems title="My Wallet"/>
        </ul>
      </div>
    </aside>
  );
};
