'use client'
import { IoIosArrowDown, IoMdClose } from 'react-icons/io'
import { useCallback, useEffect, useState } from 'react'
import useListingModal from '../hooks/useListingModal'
import Image from 'next/image'
import { AiFillStar, AiOutlineCamera, AiOutlineHeart, AiOutlineTrophy } from 'react-icons/ai'
import { FiCalendar, FiInfo, FiUpload } from 'react-icons/fi'
import { IoAccessibilityOutline, IoBedOutline, IoWifiOutline } from 'react-icons/io5'
import { GiBunkBeds, GiTheater } from 'react-icons/gi'
import { FaShower } from 'react-icons/fa'
import { MdOutlineAssuredWorkload, MdOutlineHotel, MdProductionQuantityLimits } from 'react-icons/md'
import { TbCalendarTime, TbUserCheck } from 'react-icons/tb'
import { SlDiamond } from 'react-icons/sl'
import { SiAirplayaudio } from 'react-icons/si'
import { IoManOutline } from 'react-icons/io5'
import { CiParking1 } from 'react-icons/ci'
import Button from '../components/button'

const ListingModal = () => {
  const listingModal = useListingModal()
  
  const [showModal, setShowModal] = useState<boolean>(false);
  useEffect(() => {
    setShowModal(!!listingModal.isOpen)
  }, [listingModal])

  const handleClose = useCallback(() => {
    setShowModal(false)
    setTimeout(() => {
      listingModal.onClose()
    }, 300);
  }, [listingModal])

  const listing = listingModal.currentListing

  if (!listingModal.isOpen) {
    return null
  }
  return (
    <>
      <div className="relative">
        {/* <div className="absolute p-1 bg-white rounded-full cursor-pointer" onClick={handleClose}>
          <IoMdClose size={12}/>
        </div> */}
        <div
          className="justify-end items-center overflow-x-hidden 
          overflow-y-hidden fixed z-50 inset-0 outline-none
          focus:outline-none bg-neutral-800/70"
          onClick={handleClose}
        >
          <div className="absolute right-0 top-0 w-[75%] ml-auto h-full">
            <div className={
              `translate duration-300 w-full h-screen overflow-y-scroll 
              ${showModal ? 'translate-x-0' : 'translate-x-full'}
              ${showModal ? 'opacity-100' : 'opacity-0'}
            `}>
              <div className="translate h-auto border-0 shadow-lg relative flex flex-col gap-4 w-full bg-white outline-none focus:outline-none">
                <div className="p-6 flex flex-col gap-4">
                  <div className="w-full flex gap-4 relative">
                    <div className="
                      basis-[60%] 
                      aspect-square 
                      relative 
                      overflow-hidden 
                      rounded-xl
                      h-[500px]">
                      <Image
                        fill
                        className="
                          object-cover 
                          h-full
                          w-full 
                          hover:scale-110 
                          transition
                        "
                        src={listing?.images[0]}
                        alt="Listing"
                      />
                    </div>
                    <div className="flex flex-col gap-4 h-[500px]">
                      <div className="aspect-square relative overflow-hidden rounded-xl h-full">
                        <Image
                          fill
                          className="
                            object-cover 
                            h-full
                            w-full 
                            hover:scale-110 
                            transition
                          "
                          sizes='200'
                          src={listing?.images[1]}
                          alt="Listing"
                        />
                      </div>
                      <div className="aspect-square relative overflow-hidden rounded-xl">
                        <Image
                          fill
                          className="
                            object-cover 
                            h-full
                            w-full 
                            hover:scale-110 
                            transition
                          "
                          sizes='200'
                          src={listing?.images[2]}
                          alt="Listing"
                        />
                      </div>
                    {/* <Image
                      fill
                      className="
                        object-cover 
                        h-[full] 
                        w-full 
                        group-hover:scale-110 
                        transition
                      "
                      sizes='200'
                      src={listing?.images[1]}
                      alt="Listing"
                      />
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
                      src={listing?.images[2]}
                      alt="Listing"
                    /> */}
                    </div>
                    <div className="bg-gray-100 absolute rounded-xl py-2 px-3 bottom-3 left-4 text-xs text-gray-700">View All Photos</div>
                  </div>
                  <div className="flex items-center gap-2 border py-2 px-3 w-[100px] rounded-xl text-xs text-gray-700">
                    <AiOutlineTrophy color='red'/> Superhost
                  </div>
                  <div className="flex gap-4">
                    <section className="w-[65%]">
                      <div className="w-full border-b-[1px] pb-8">
                        <div className="flex justify-between items-center mb-6">
                          <div className="flex flex-col">
                            <h2 className='text-2xl text-gray-700'>{listing.name}</h2>
                            <span className='text-gray-400 text-sm'>{listing?.city}, {listing?.state}, {listing?.country}</span>
                          </div>
                          <div className="flex gap-2">
                            <div className="rounded-full p-2 bg-gray-200">
                              <FiUpload size={14} className='font-thin'/>
                            </div>
                            <div className="rounded-full p-2 bg-gray-200">
                              <AiOutlineHeart size={14} className='font-thin'/>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-6">
                          <div className="flex items-center gap-2">
                            <IoAccessibilityOutline size={14} className='text-gray-600'/>
                            <span className='text-xs text-gray-500'>{ listing?.guests }+ guests</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <GiBunkBeds size={14} className='text-gray-600'/>
                            <span className='text-xs text-gray-500'>{ listing?.bedrooms } bedrooms</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <IoBedOutline size={14} className='text-gray-600'/>
                            <span className='text-xs text-gray-500'>{ listing?.beds } beds</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <FaShower size={14} className='text-gray-600'/>
                            <span className='text-xs text-gray-500'>{ listing?.baths } baths</span>
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-3 py-8 border-b-[1px]">
                        <div className="">
                          <div className="flex rounded-full justify-center bg-[#fff3f3] w-[40px] h-[40px] items-center">
                            <MdProductionQuantityLimits className='text-[#e82a2a]'/>
                          </div>
                          <p className='mt-4 text-md text-gray-800'>Dedicated workspace</p>
                          <p className='text-xs text-gray-500'>{`A private room with wifi that's suited for working`}</p>
                        </div>
                        <div className="">
                          <div className="flex rounded-full justify-center bg-[#fff3f3] w-[40px] h-[40px] items-center">
                            <TbUserCheck className='text-[#e82a2a]'/>
                          </div>
                          <p className='mt-4 text-md text-gray-800'>Self check-in</p>
                          <p className='text-xs text-gray-500'>Check yourself in with a keypad</p>
                        </div>
                        <div className="">
                          <div className="flex rounded-full justify-center bg-[#fff3f3] w-[40px] h-[40px] items-center">
                            <TbCalendarTime className='text-[#e82a2a]'/>
                          </div>
                          <p className='mt-4 text-md text-gray-800'>Free cancellation before Jul 25</p>
                          <p className='text-xs text-gray-500'>{`A private room with wifi that's suited for working`}</p>
                        </div>
                      </div>
                      <section className="py-8 border-b-[1px] flex flex-col gap-4">
                        <div className="">
                          <p className='font-bold text-lg mb-2'>About this space</p>
                          <p className='text-gray-500 text-sm tracking-wide'>
                            Lovely room in the heart of Battersea, 5 minutes walking from the new London Icon, Battersea Power station, Peaceful area, flat located in a quite walkway, easy access to central london with northern line, perfect for a short stay and for a getaway weekend  
                          </p>
                        </div>
                        <div className="">
                          <p className='font-medium text-md mb-2'>The space</p>
                          <p className='text-gray-500 text-sm tracking-wide'>
                            Two bedroom flat, you will share the flat with us, you will have your private double room, with a double bed, and available space in a double wardrobe.
                            The bathroom is partially shared
                          </p>
                        </div>
                        <p className='text-red-600 text-xs font-bold cursor-pointer'>Read more</p>
                      </section>

                      <section className='py-8'>
                        <h2 className='text-lg font-bold mb-8'>What this place offers</h2>
                        <div className="grid grid-cols-3 gap-x-8 gap-y-8">
                          <div className="flex items-center gap-3">
                            <IoManOutline size={24}/>
                            <span className='text-gray-600 text-sm w-[100px]'>Kitchen</span>
                          </div>
                          <div className="flex items-center gap-4">
                            <IoManOutline size={24}/>
                            <span className='text-gray-600 text-sm w-[100px]'>Private patio or balcony</span>
                          </div>
                          <div className="flex items-center gap-4">
                            <SiAirplayaudio size={24}/>
                            <span className='text-gray-600 text-sm w-[9100px0px]'>Centrail air conditioning</span>
                          </div>
                          <div className="flex items-center gap-4">
                            <MdOutlineAssuredWorkload size={24}/>
                            <span className='text-gray-600 text-sm w-[100px]'>Dedicated workspaces</span>
                          </div>
                          <div className="flex items-center gap-4">
                            <IoWifiOutline />
                            <span className='text-gray-600 text-sm w-[100px]'>Wifi</span>
                          </div>
                          <div className="flex items-center gap-4">
                            <GiTheater />
                            <span className='text-gray-600 text-sm w-[100px]'>Heating</span>
                          </div>
                          <div className="flex items-center gap-4">
                            <MdOutlineHotel />
                            <span className='text-gray-600 text-sm w-[100px]'>{`55" 4k TV`}</span>
                          </div>
                          <div className="flex items-center gap-4">
                            <CiParking1 />
                            <span className='text-gray-600 text-sm w-[100px]'>1 parking space</span>
                          </div>
                          <div className="flex items-center gap-4">
                            <AiOutlineCamera />
                            <span className='text-gray-600 text-sm w-[100px]'>Security cameras</span>
                          </div>
                        </div>
                      </section>
                    </section>

                    <div className="flex flex-1 flex-col gap-4 h-full">
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
                              <p className='text-md font-md'>$2166</p>
                            </li>
                            <li className="flex justify-between">
                              <div className="flex items-center gap-1">
                                <p className='text-md font-md'>Cleaning fee</p>
                                <FiInfo size={14} className='text-gray-500'/>
                              </div>
                              <p className='text-md font-md'>$2166</p>
                            </li>
                            <li className="flex justify-between">
                              <div className="flex items-center gap-1">
                                <p className='text-md font-md'>Airbnb service fee</p>
                                <FiInfo size={14} className='text-gray-500'/>
                              </div>
                              <p className='text-md font-md'>$2166</p>
                            </li>
                          </ul>
                        </div>

                        <div className="flex justify-between items-center mt-6 ">
                          <div className="flex flex-col">
                            <p className='text-md font-md'>Total</p>
                            <p className='text-xs text-gray-500'>Before taxes</p>
                          </div>
                          <p className='text-md font-md'>$2606</p>
                        </div>

                        <div className="pt-4">
                          <Button
                            disabled={true}
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
                            <p className='text-sm text-gray-500'>{`Kathry'n place on Airbnb is usually fully booked`}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ListingModal