
'use client';
import Image from 'next/image';
import React from 'react';
import { IoMdHeart } from 'react-icons/io';

import { GetHighlight } from '../api/ApiRoute';

export default function Highlight() {

  const highliht = GetHighlight();

  return (
    <>

      <div className="w-full  pt-5 xs:px-[24px] sm:px-[40px] lg:px-[80px]">
        <div className="font-semibold xs:text-[24px] md:text-[30px] lg:text-[36px]">Highlight</div>
        <div className="grid pt-10 xs:grid-cols-1 xs:gap-10 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          {highliht.map((item, index) => (
            <div key={index} className="flex flex-col rounded-xl">
              <div className="relative w-full" style={{ height: 'auto' }}>
                <div className="relative h-0 w-full pb-[75%]">
                  <Image
                    src={item.image_url[1]}
                    alt={`Image ${index + 1} for ${item.name}`}
                    layout="fill"
                    objectFit="cover"
                    style={{ borderRadius: '12px' }}
                    placeholder="blur"
                    blurDataURL="/path/to/placeholder.jpg"
                  />
                </div>
                <div className="absolute right-2 top-2 size-[30px] cursor-pointer hover:size-[35px]"><IoMdHeart style={{ width: '100%', height: '100%', color: 'grey' }} /></div>
              </div>
              <div className="mt-2">
                {item.name}
              </div>
            </div>
          ))}

        </div>

      </div>

    </>
  );
}
