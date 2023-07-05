import React from 'react'
import RightBtn from './RightBtn';
import InfoCircle from './InfoCircle';

const TabContentOne = () => {
  return (
    <div className="flex justify-between items-center mt-4">
      <p className="ml-4">4 Items included in this combo</p>
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

export default TabContentOne;

