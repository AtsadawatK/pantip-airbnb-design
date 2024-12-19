'use client'

import React from 'react'
import { FaHome } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
export default function BottomBar() {

  const MenuList = [
    {
        MenuName: "Home",
        icon: FaHome,
    },
    {
        MenuName: "Community",
        icon: FaUsers,
    },
    {
      MenuName: "Login",
      icon: FaRegUserCircle,
  },

];

  return (
    <>
<div
            className="w-full h-[7vh] fixed bottom-0 flex justify-center  border-[#868B93] xs:flex sm:hidden"
        >
            <div
                className='bg-[#FFFFFF] flex items-center w-[100%] justify-around px-20'

            >
                {MenuList.map((item, index) => (
                    <div
                        key={index}
                        className={`flex flex-col items-center cursor-pointer px-2 `}
                    >
                        <div>
                        <item.icon className="text-gray-600 w-[20px] h-[20px]" />
                        </div>
                        <div
                            className="text-gray-600 text-[12px]"
                        >
                            {item.MenuName}
                        </div>
                    </div>
                ))}
            </div>
        </div>

    </>
  )
}
