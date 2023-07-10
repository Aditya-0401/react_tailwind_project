import React from 'react'

export const Navitems = ({title}) => {
  return (
    <li>
            <a
              href="#"
              className={`flex items-center p-2  rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group ${title=="Batches" ? 'border-indigo-200 bg-[#F1EFFF]' : 'text-gray-900'}`}
            >
              <span className={`flex-1 ml-3 whitespace-nowrap text-[#333333] ${title=="Batches" ? 'text-[#5A4BDA]' : 'text-gray-900' }`}>{title}</span>
              
            </a>
          </li>
  )
}
