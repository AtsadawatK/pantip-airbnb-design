
'use client';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { BiMessageRoundedAdd } from 'react-icons/bi';
import { FaUserCircle, FaUsers } from 'react-icons/fa';
import { IoMdMenu } from 'react-icons/io';
import { IoSearchSharp } from 'react-icons/io5';

import pantipLogo from '../../public/assets/pantip_logo.png';

export default function Navbar() {
  const [, setShowLeftArrow] = useState(false);
  const [, setShowRightArrow] = useState(true);
  const tabsRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  const handleClickOutside = (event) => {

    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleScroll = () => {
    if (tabsRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = tabsRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener('resize', handleScroll);
    return () => window.removeEventListener('resize', handleScroll);
  }, []);


  const scroll = (direction) => {
    if (tabsRef.current) {
      const scrollAmount = direction === 'left' ? -340 : 340;

      tabsRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const MenuList = [
    {
      name: 'หน้าแรก',
    },
    {
      name: 'My Feed',
    },
    {
      name: 'Pantip Pick',
    },
    {
      name: 'Pantip Hitz',
    },
    {
      name: 'Explore',
    },
  ];

  return (
    <>

      <div className="w-full  bg-[#2D2A49]  xs:h-[80px] xs:px-[24px] sm:h-[240px] sm:px-[40px] lg:h-[168px] lg:px-[80px]">
        <div className="h-[80px] w-full items-center justify-between xs:hidden  sm:flex">
          <div className=" flex h-full flex-1 items-center">
            <Image
              src={pantipLogo}
              alt="logo_pantip"
              style={{ width: '15%', height: 'auto', filter: 'invert(1) grayscale(1) brightness(1)' }}
            />
          </div>
          <div className=" h-full flex-1 items-center justify-between text-[#D4CFE4] xs:hidden lg:flex">
            {MenuList.map((item, index) => (
              <div key={index} className="cursor-pointer px-3 py-1 hover:rounded-full hover:bg-[#868395]">{item.name}</div>
            ))}
          </div>
          <div className=" flex h-full flex-1 items-center justify-end text-[#D4CFE4]">
            <div className=" flex justify-between ">
              <div className="flex cursor-pointer items-center px-3 py-1 hover:rounded-full hover:bg-[#868395]">
                <BiMessageRoundedAdd style={{ width: '20px', height: '20px', transform: 'scaleX(-1)', marginRight: '5px' }} />
                ตั้งกระทู้
              </div>
              <div className="mx-5 flex cursor-pointer  items-center px-2 hover:rounded-full hover:bg-[#868395]"><FaUsers style={{ width: '20px', height: '20px', transform: 'scaleX(-1)', marginRight: '5px' }} /></div>
              <div className="relative flex items-center ">
                <div
                  className="flex w-[80px] cursor-pointer items-center justify-between rounded-full border border-[#D4CFE4] px-2 py-1 hover:shadow-md"
                  onClick={toggleMenu}
                >
                  <IoMdMenu style={{ width: '20px', height: '20px' }} />
                  <FaUserCircle style={{ width: '30px', height: '30px' }} />
                </div>

                {isMenuOpen && (
                  <div
                    ref={menuRef}
                    className="absolute right-0 top-[120%] z-50 flex w-[200px] flex-col rounded-lg bg-white shadow-lg"
                  >
                    <div className="w-full cursor-pointer rounded-t-lg px-2 py-3 font-semibold text-black hover:bg-slate-300">
                      Sign up
                    </div>
                    <div className="w-full cursor-pointer rounded-b-lg px-2 py-3 text-black hover:bg-slate-300">
                      Login
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="flex w-full justify-center  text-[#D4CFE4] xs:h-full sm:h-[140px] lg:h-[88px] ">

          <div className="flex flex-col justify-center xs:w-[90vw] sm:w-[90vw] lg:w-[70vw]">
            <div className="w-full items-center justify-between px-[10%] pb-5 text-[#D4CFE4] xs:hidden sm:flex lg:hidden">
              {MenuList.map((item, index) => (
                <div key={index}>{item.name}</div>
              ))}
            </div>
            <div className="flex items-center justify-between rounded-full border border-[#D4CFE4] px-1 xs:h-[65%] sm:h-[45%] lg:h-[70%]">
              <input
                type="text"
                className="h-full w-[90%] border-none bg-transparent p-2 outline-none xs:text-[14px] sm:text-[16px]"
                placeholder="ค้นหาบน pantip"
              />
              <div className="relative size-[50px] cursor-pointer rounded-full bg-[#D4CFE4] hover:bg-[#868395] xs:hidden sm:flex">
                <div className="absolute inset-0  flex items-center justify-center"><IoSearchSharp style={{ width: '20px', height: '20px', color: '#2D2A49' }} /></div>
              </div>

              <div className="relative size-[40px] cursor-pointer rounded-full bg-[#D4CFE4] hover:bg-[#868395] xs:flex sm:hidden">
                <div className="absolute inset-0  flex items-center justify-center"><IoSearchSharp style={{ width: '20px', height: '20px', color: '#2D2A49' }} /></div>
              </div>

            </div>
          </div>

        </div>

      </div>
      <div>
      </div>

      {/*  <div className="p-9 relative overflow-x-hidden max-w-4xl bg-[#212121] rounded-2xl">
      {showLeftArrow && (
        <div className="absolute left-0 top-0 h-full w-30 flex items-center bg-gradient-to-r from-[#212121] to-transparent">
          <IoMdMenu
            className="w-14 h-14 cursor-pointer text-white hover:text-[#212121] hover:bg-[#efedfb] rounded-full"
            onClick={() => scroll('left')}
          />
        </div>
      )}
      <ul
        ref={tabsRef}
        className="flex gap-3 list-none overflow-x-auto scroll-smooth"
        onScroll={handleScroll}
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none'
        }}
      >
        {tabs.map((tab) => (
          <li
            key={tab}
            className={`cursor-pointer text-lg whitespace-nowrap px-5 py-3 rounded-full border ${
              activeTab === tab
                ? 'bg-[#3333ff] text-white border-transparent'
                : 'bg-[#f5f4fd] hover:bg-[#efedfb] border-[#d8d5f2]'
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </li>
        ))}
      </ul>
      {showRightArrow && (
        <div className="absolute right-0 top-0 h-full w-30 flex items-center justify-end bg-gradient-to-l from-[#212121] to-transparent">
          <IoMdMenu
            className="w-14 h-14 cursor-pointer text-white hover:text-[#212121] hover:bg-[#efedfb] rounded-full"
            onClick={() => scroll('right')}
          />
        </div>
      )}
    </div> */}

    </>
  );
}
