
'use client';

import React, { useState } from 'react';

import { GetClubs, GetTags } from '../api/ApiRoute';

export default function Tag() {
  const [showTags, setShowTags] = useState(true);
  const tags = GetTags();
  const clubs = GetClubs();

  const handleToggle = (section) => {
    if (section === 'tags') {
      setShowTags(true);
    } else if (section === 'clubs') {
      setShowTags(false);
    }
  };

  return (
    <>
      <div className="mt-10 flex w-full justify-center bg-[#F7F7F7] py-10 xs:px-[24px] sm:px-[40px] lg:px-[80px] xs:pb-[7vh] sm:pb-[0px]">
        <div className="flex w-full flex-col ">
          <div className="font-semibold xs:text-[20px] md:text-[24px] lg:text-[36px]">Popular Tags & Clubs</div>

          <div className="flex border-b py-2">
            <button
              className={`w-1/5 text-left ${showTags ? 'font-semibold' : 'text-gray-600'}`}
              onClick={() => handleToggle('tags')}
            >
              Tags
            </button>
            <button
              className={`w-1/5 text-left ${!showTags ? 'font-semibold' : 'text-gray-600'}`}
              onClick={() => handleToggle('clubs')}
            >
              Clubs
            </button>
          </div>

          {showTags ? (
            <div className="grid gap-4 py-4 xs:grid-cols-2 lg:grid-cols-5">
              {tags.length > 0 ? (
                tags.map((tag, index) => (
                  <div key={index} className="py-2 md:text-[18px] md:text-[20px] lg:text-[16px]">
                    {tag.name}
                  </div>
                ))
              ) : (
                <div>No tags available</div>
              )}
            </div>
          ) : (
            <div className="grid gap-4 py-4 xs:grid-cols-2 lg:grid-cols-5">
              {clubs.length > 0 ? (
                clubs.map((club, index) => (
                  <div key={index} className="py-2 md:text-[18px] md:text-[20px] lg:text-[16px]">
                    {club.name}
                  </div>
                ))
              ) : (
                <div>No clubs available</div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
