'use client'
import React from 'react'
import Image from 'next/image'
import { AiFillStar, AiOutlineHeart } from 'react-icons/ai'
import useListingModal from '@/app/hooks/useListingModal';

interface ListingCardProps {
  data: any;
};

const ListingCard: React.FC<ListingCardProps> = ({ data }) => {
  const listingModal = useListingModal()
  return (
    <div 
      onClick={() => listingModal.onOpen(data)} 
    className="col-span-1 cursor-pointer group rounded-xl border max-h-[420px]"
  >
    <div className="flex flex-col gap-2 w-full">
      <div 
        className="
          aspect-square 
          w-full 
          relative 
          overflow-hidden 
          rounded-t-xl
          h-[250px]
        "
      >
        <Image
          fill
          className="
            object-cover 
            h-[full] 
            w-full 
            group-hover:scale-110 
            transition
          "
          sizes='200'
          src={data?.images[0]}
          alt="Listing"
        />
        <div className="
          absolute
          top-3
          right-3
          p-2
          bg-white
          rounded-full
        ">
          <AiOutlineHeart
            size={20}
            className="
              fill-gray-800
              -top-[2px]
              -right-[2px]
            "
          />
        </div>
      </div>
      <div className="p-4 flex flex-col gap-8">
        <div className="flex flex-col">
          <div className="font-semibold text-md">
            {data?.name}
          </div>
          <span className='text-gray-400 text-sm'>{data?.city}, {data?.state}, {data?.country}</span>
        </div>
        <div className="font-light text-neutral-500 flex items-center justify-between">
          <div className="">
            <span className='font-bold text-black text-sm tracking-wide'>${data?.pricePerNight}</span>
            <span className='text-xs'> / night</span>
          </div>
          <div className="flex items-center gap-2">
            <AiFillStar fill='black' className=''/> 
              <span className='text-gray-500 text-sm'>{data?.rating}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ListingCard