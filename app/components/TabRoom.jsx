
'use client';

import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { IoChevronBackCircleOutline, IoChevronForwardCircleOutline } from 'react-icons/io5';

import { GetRooms } from '../api/ApiRoute';

export default function TabRoom() {
  const [activeTab, setActiveTab] = useState('JavaScript');
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  // @ts-ignore
  const rooms = GetRooms();

  const tabsRef = useRef(null);

  const handleScroll = () => {
    setTimeout(() => {
      if (tabsRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = tabsRef.current;
        setShowLeftArrow(scrollLeft > 0);
        setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 1);
      }
    }, 100);
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
      setTimeout(handleScroll, 300);
    }
  };

  return (
    <>
      <div className="sticky top-0 z-50 w-full xs:bg-[#2D2A49] xs:px-0 sm:bg-white sm:px-[40px] lg:px-[80px]">
        <div className="relative py-0 xs:overflow-x-scroll  xs:bg-[#2D2A49] xs:px-0 sm:overflow-x-hidden  sm:bg-white sm:px-10">
          {showLeftArrow && (
            <div className="xs:bg-tranparent absolute left-0 top-0 h-full w-[5%] items-center from-[#FFFFFF] via-[#FFFFFF] to-[#FFFFFF20] xs:hidden sm:flex sm:bg-gradient-to-r">
              <IoChevronBackCircleOutline
                className="fade-right-to-left size-10 cursor-pointer  rounded-full  xs:text-white sm:text-black"
                onClick={() => scroll('left')}
              />
            </div>
          )}
          <ul
            ref={tabsRef}
            className="flex list-none gap-3 overflow-x-auto scroll-smooth px-0 "
            onScroll={handleScroll}
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {rooms.map((item, index) => (
              // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
              <li
                key={index}
                className={`flex cursor-pointer flex-col items-center whitespace-nowrap py-3 text-slate-600 xs:px-2 sm:px-5 ${
                  activeTab === item
                    ? ' border-b-2 border-black text-black'
                    : ' '
                }`}
                onClick={() => setActiveTab(item)}
              >
                <div className="xs:hidden sm:flex">
                  <Image
                    src={item.room_icon_url}
                    width={25}
                    height={25}
                    style={{ filter: 'invert(1) grayscale(1)' }}
                    alt="icon-room"
                  />
                </div>

                <div className="xs:flex sm:hidden">
                  <Image
                    src={item.room_icon_url}
                    width={25}
                    height={25}
                    style={{ filter: 'invert(1) brightness(100%) grayscale(1) !important' }}
                    alt="icon-room"
                  />
                </div>

                <div className="xs:text-[12px] xs:text-[#D4CFE4] sm:text-[16px] sm:text-black">{item.name}</div>

              </li>
            ))}
          </ul>
          {showRightArrow && (
            <div className="xs:bg-tranparent absolute right-0 top-0 flex h-full w-[5%] items-center justify-end from-[#FFFFFF] via-[#FFFFFF] to-[#FFFFFF20] xs:hidden sm:flex lg:bg-gradient-to-l">
              <IoChevronForwardCircleOutline
                className="fade-left-to-right size-10 cursor-pointer rounded-full  xs:text-white sm:text-black"
                onClick={() => scroll('right')}
              />
            </div>
          )}
        </div>
      </div>

    </>
  );
}
