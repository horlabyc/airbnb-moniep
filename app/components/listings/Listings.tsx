'use client'
import React from 'react'
import ListingCard from './ListingCard'
import listings from '../../data/listings.json'
import dynamic from 'next/dynamic'

const Listings = () => {
  const ListingModal = dynamic(() => import("@/app/modals/listingModal"), {
    loading: () => <p>loading...</p>,
    ssr: false
  })
  return (
    <>
      <div 
        className="
          p-8
          grid 
          grid-cols-4
          gap-8
        "
      >
        {listings.map((listing: any) => (
          <ListingCard
            key={listing._id}
            data={listing}
          />
        ))}
      </div>
      <ListingModal />
    </>
  )
}

export default Listings