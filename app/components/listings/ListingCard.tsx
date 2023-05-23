'use client'
import React from 'react'
import Image from 'next/image'
import { AiFillStar, AiOutlineHeart } from 'react-icons/ai'

interface ListingCardProps {
  data: any;
};

const ListingCard: React.FC<ListingCardProps> = ({ data }) => {
  return (
    <div 
    onClick={() => console.log('clicked')} 
    className="col-span-1 cursor-pointer group rounded-xl border"
  >
    <div className="flex flex-col gap-2 w-full">
      <div 
        className="
          aspect-square 
          w-full 
          relative 
          overflow-hidden 
          rounded-t-xl
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
          src='/images/0eb18b3d-9bca-4e1c-bb84-15101b07832b.webp'
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
            Luxury stay in Weston, Saint James, Barbados
          </div>
          <span className='text-gray-400 text-sm'>Weston, Saint James, Barbados</span>
        </div>
        <div className="font-light text-neutral-500 flex items-center justify-between">
          <div className="">
            <span className='font-bold text-black text-sm'>$10,000</span>
            <span> / night</span>
          </div>
          <div className="flex items-center gap-2">
            <AiFillStar fill='black' className=''/> 
            <span className='text-gray-500 text-sm'>5.00</span>
          </div>
        </div>
      </div>
      {/* <div className="flex flex-row items-center gap-1">
        <div className="font-semibold">
          $ {price}
        </div>
        {!reservation && (
          <div className="font-light">night</div>
        )}
      </div> */}
    </div>
  </div>
  )
}

export default ListingCard