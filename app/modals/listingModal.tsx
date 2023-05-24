'use client'
import { useCallback, useEffect, useState } from 'react'
import useListingModal from '../hooks/useListingModal'
import { AiFillStar, AiOutlineCamera, AiOutlineHeart, AiOutlineTrophy } from 'react-icons/ai'
import { FiUpload } from 'react-icons/fi'
import { IoAccessibilityOutline, IoBedOutline, IoWifiOutline } from 'react-icons/io5'
import { GiBunkBeds, GiTheater } from 'react-icons/gi'
import { FaShower } from 'react-icons/fa'
import { MdOutlineAssuredWorkload, MdOutlineHotel, MdProductionQuantityLimits } from 'react-icons/md'
import { TbCalendarTime, TbUserCheck } from 'react-icons/tb'
import { SiAirplayaudio } from 'react-icons/si'
import { IoManOutline } from 'react-icons/io5'
import { CiParking1 } from 'react-icons/ci'
import ReviewMeter from '../components/review-meter'
import Testimonial from '../components/testimonial'
import testimonials from '../data/testimonials.json'
import Host from '../components/host'
import Reserve from '../components/reserve'
import ListingOffer from '../components/listings/listingOffer'
import ImagePreview from '../components/image-preview'
import dynamic from 'next/dynamic'
import { IoMdClose } from 'react-icons/io'

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

  const Map = dynamic(() => import("../components/map"), {
    loading: () => <p>loading...</p>,
    ssr: false
  })

  if (!listingModal.isOpen) {
    return null
  }
  return (
    <>
      <div className="relative">
        <div className="fixed z-[200] left-[18rem] top-[12px] p-1 bg-white hover:bg-black rounded-full cursor-pointer transition group" onClick={handleClose}>
          <IoMdClose size={12} className='group-hover:text-white'/>
        </div>
        <div
          className="justify-end items-center overflow-x-hidden 
          overflow-y-hidden fixed z-50 inset-0 outline-none
          focus:outline-none bg-neutral-800/70"
        >
          <div className="absolute right-0 top-0 w-[75%] ml-auto h-full">
            <div className={
              `translate duration-300 w-full h-screen overflow-y-scroll 
              ${showModal ? 'translate-x-0' : 'translate-x-full'}
              ${showModal ? 'opacity-100' : 'opacity-0'}
            `}>
              <div className="translate h-auto border-0 shadow-lg relative flex flex-col gap-4 w-full bg-white outline-none focus:outline-none">
                <div className="p-6 flex flex-col gap-4">
                  <ImagePreview listing={listing}/>
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

                      {/* LISTING OFFERS */}
                      <section className='py-8 border-b-[1px] flex flex-col gap-4'>
                        <h2 className='text-lg font-bold mb-8'>What this place offers</h2>
                        <div className="grid grid-cols-3 gap-x-8 gap-y-8">
                          <ListingOffer Icon={IoManOutline} offer='Kitchen' />
                          <ListingOffer Icon={IoManOutline} offer='Private patio or balcony' />
                          <ListingOffer Icon={SiAirplayaudio} offer='Centrail air conditioning' />
                          <ListingOffer Icon={MdOutlineAssuredWorkload} offer='Dedicated workspaces' />
                          <ListingOffer Icon={IoWifiOutline} offer='Wifi' />
                          <ListingOffer Icon={GiTheater} offer='Heating' />
                          <ListingOffer Icon={MdOutlineHotel} offer={`55" 4k TV`} />
                          <ListingOffer Icon={CiParking1} offer='1 parking space' />
                          <ListingOffer Icon={AiOutlineCamera} offer='Security cameras'/>
                        </div>
                        <p className='text-red-600 text-xs font-bold cursor-pointer'>View more</p>
                      </section>

                      {/* REVIEWS SECTION */}

                      <section className='py-8 flex flex-col gap-4 border-b-[1px]'>
                        <div className="flex justify-between items-center">
                          <h2 className='text-lg font-bold'>Reviews</h2>
                          <div className="flex gap-2 items-center">
                            <AiFillStar fill='black' className=''/> 
                            <span className='text-gray-500 text-sm'>{listing?.rating.toFixed(2)}</span>
                            <span className='text-sm text-gray-500'> -- </span>
                            <span className='text-sm text-gray-500'> 124 reviews </span>
                          </div>
                        </div>
                        <div className="rounded-lg border px-8 py-4 flex flex-col gap-4">
                          <ReviewMeter category='Cleanliness' rate={5} />
                          <ReviewMeter category='Accuracy' rate={4.5} />
                          <ReviewMeter category='Communication' rate={4.8} />
                          <ReviewMeter category='Location' rate={3.5} />
                          <ReviewMeter category='Check-in' rate={5} />
                          <ReviewMeter category='Value' rate={4.2}/>
                        </div>
                        <div className="testimonial grid grid-cols-2 gap-x-8 gap-y-8">
                          {testimonials.map((testimonial) => (
                            <Testimonial
                              message={testimonial.message}
                              key={testimonial.id}
                              date={new Date(testimonial.date)}
                              userImage={testimonial.userImage}
                              username={testimonial.username}
                            />
                          ))}
                        </div>
                        <p className='text-red-600 text-xs font-bold cursor-pointer'>View more</p>
                      </section>

                      {/* LOCATION */}
                      <section className='py-8 flex flex-col gap-4 border-b-[1px]'>
                        <h2 className='text-lg font-bold'>{`Where you'll be`}</h2>
                        <div className="map">
                          <Map center={[6.5244, 3.3792]}/>
                        </div>
                        <div className="flex flex-col gap-2">
                          <span className='text-gray-900 text-md'>{listing?.city}, {listing?.state}, {listing?.country}</span>
                          <span className='text-gray-500 text-sm'>The property, give its close proximity to the refreshing hillside town of Tagaytay and clear blue beaches of Nasugbu, provides a quick escape from the hustle and bustle of city life</span>
                        </div>
                        <p className='text-red-600 text-xs font-bold cursor-pointer'>View more</p>
                      </section>

                      {/* HOST INFO */}
                      <section className="py-8 flex flex-col gap-4 border-b-[1px]">
                        <h2 className='text-lg font-bold'>Host</h2>
                        <Host userImage='/images/t1/c739ad41-5a92-4b6b-bfbc-8cd3071094b1.webp' userName='Brenda' />
                        <p className='text-red-600 text-xs font-bold cursor-pointer'>View more</p>
                      </section>
                    </section>

                    {/* RESERVE */}
                    <Reserve listing={listing}/>
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