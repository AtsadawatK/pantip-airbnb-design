
'use client';

import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { IoMdHeart } from 'react-icons/io';

import pantipLogo from '../../public/assets/pantip_logo.png';
import { GetRealtimeTopic } from '../api/ApiRoute';

export default function RoomTopic2() {

  const topic = GetRealtimeTopic();

  const [visibleRooms, setVisibleRooms] = useState(1);
  const observerRef = useRef(null);
  const loadMoreRef = useRef(null);

  useEffect(() => {

    observerRef.current = new IntersectionObserver((entries) => {

      if (entries[0].isIntersecting && visibleRooms < topic.length) {
        setVisibleRooms(prev => Math.min(prev + 1, topic.length));
      }
    });

    if (loadMoreRef.current) {

      observerRef.current.observe(loadMoreRef.current);
    }

    return () => {
      if (observerRef.current) {

        observerRef.current.disconnect();
      }
    };
  }, [topic.length, visibleRooms]);

  return (
    <>
      <div className="w-full pt-5 xs:px-[24px] sm:px-[40px] lg:px-[80px] ">
        {topic.slice(0, visibleRooms).map((Room, index) => (
          <div key={index}>
            <div className="text-[36px] font-semibold">{Room.room_name_th}</div>
            <div className="grid pt-10 xs:grid-cols-1 xs:gap-10 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
              {Room.topics.slice(0, 6).map(
                // @ts-ignore
                topic => (
                  <div key={topic.topic_id} className="flex flex-col rounded-xl ">
                    <div className="relative w-full" style={{ height: 'auto' }}>
                      <div className="relative h-0 w-full pb-[75%]">
                        <Image
                          src={topic.thumbnail_url || pantipLogo}
                          alt={topic.thumbnail_url ? `Thumbnail for ${topic.title}` : 'Default logo'}
                          layout="fill"
                          objectFit="cover"
                          style={{ borderRadius: '12px', backgroundColor: '#2D2A49' }}
                          placeholder="blur"
                          blurDataURL="/path/to/placeholder.jpg"
                        />
                      </div>
                      <div className="absolute right-2 top-2 size-[30px] cursor-pointer hover:size-[35px]"><IoMdHeart style={{ width: '100%', height: '100%', color: 'grey' }} /></div>
                    </div>
                    <div className="flex h-full  flex-col  justify-between">
                      <h3 className="mb-2 font-semibold">{topic.title}</h3>
                      <div>
                        <div className="mb-2 flex justify-between text-sm text-gray-600">
                          <div>{new Date(topic.created_time).toLocaleDateString()}</div>
                          <div>
                            สมาชิกหมายเลข
                            {topic.author.id}
                          </div>
                        </div>
                        <p className="text-sm">
                          {topic.comments_count}
                          {' '}
                          comments |
                          {topic.views_count}
                          {' '}
                          views
                        </p>
                      </div>
                    </div>
                  </div>
                ),
              )}
            </div>
          </div>
        ))}

      </div>
      {visibleRooms < topic.length && (
        <div ref={loadMoreRef} style={{ height: '50px', margin: '20px 0', border: '1px solid black' }}>
        </div>
      )}
    </>
  );
}
