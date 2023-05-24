import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import { FiCalendar, FiInfo } from 'react-icons/fi'
import { IoIosArrowDown } from 'react-icons/io'
import { SlDiamond } from 'react-icons/sl'
import Button from './button'

interface ReserveProps {
  listing: any
}
const Reserve: React.FC<ReserveProps> = ({ listing }) => {
  return (
    <section className="flex flex-1 flex-col gap-4 h-full">
      <div className="bg-[#f6f6f6] flex flex-col p-6 rounded-xl flex-1">
        <div className="flex justify-between">
          <div className="">
            <span className='font-bold text-black text-md tracking-wide'>${listing?.pricePerNight}</span>
            <span className='text-[0.6rem] text-gray-500'> / night</span>
          </div>
          <div className="flex items-center gap-2">
            <AiFillStar fill='black' className=''/> 
            <span className='text-gray-500 text-sm'>{listing?.rating.toFixed(2)}</span>
          </div>
        </div>

        <div className="flex justify-between mt-4">
          <div>
            <span className='text-gray-500 text-xs'>Check in</span>
            <div className="bg-white flex items-center justify-between rounded-xl py-4 px-6 gap-4 cursor-pointer">
              <FiCalendar className='text-gray-500'/>
              <span className='text-gray-700 text-sm'>6/14/2023</span>
            </div>
          </div>
          <div>
            <span className='text-gray-500 text-xs'>Check out</span>
            <div className="bg-white flex items-center justify-between rounded-xl py-4 px-6 gap-4 cursor-pointer">
              <FiCalendar className='text-gray-500'/>
              <span className='text-gray-700 text-sm'>6/21/2023</span>
            </div>
          </div>
        </div>

        <div className="mt-4 border-b-[1px] pb-8">
          <span className='text-gray-500 text-xs'>Guests</span>
          <div className="text-sm bg-white w-full p-4 rounded-xl flex items-center justify-between cursor-pointer">
            <span className='text-gray-700'>1 guest</span>
            <IoIosArrowDown className='text-gray-700'/>
          </div>
        </div>

        <div className="mt-6 pb-6 border-b-[1px]">
          <ul className='flex flex-col gap-3'>
            <li className="flex justify-between">
              <div className="flex items-center gap-1">
                <p className='text-md font-md'>6 nights</p>
                <FiInfo size={14} className='text-gray-500'/>
              </div>
              <p className='text-md font-md'>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(listing.pricePerNight)}</p>
            </li>
            <li className="flex justify-between">
              <div className="flex items-center gap-1">
                <p className='text-md font-md'>Cleaning fee</p>
                <FiInfo size={14} className='text-gray-500'/>
              </div>
              <p className='text-md font-md'>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(listing.cleaningFee)}</p>
            </li>
            <li className="flex justify-between">
              <div className="flex items-center gap-1">
                <p className='text-md font-md'>Airbnb service fee</p>
                <FiInfo size={14} className='text-gray-500'/>
              </div>
              <p className='text-md font-md'>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(listing.serviceFee)}</p>
            </li>
          </ul>
        </div>

        <div className="flex justify-between items-center mt-6 ">
          <div className="flex flex-col">
            <p className='text-md font-md'>Total</p>
            <p className='text-xs text-gray-500'>Before taxes</p>
          </div>
          <p className='text-md font-md'>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(2606)}</p>
        </div>

        <div className="pt-4">
          <Button
            disabled={false}
            label="Reserve"
            onClick={() => { }}
          />
        </div>
      </div>

      <div className="rounded-xl p-6 bg-[#fff0f5]">
        <div className="flex gap-8 items-center">
          <SlDiamond size={30} color='red' />
          <div className="">
            <p className='font-semibold text-lg'>This is a rare find</p>
            <p className='text-sm text-gray-500'>{`Kathry's place on Airbnb is usually fully booked`}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Reserve