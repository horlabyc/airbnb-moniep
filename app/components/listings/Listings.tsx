import React from 'react'
import ListingCard from './ListingCard'
import listings from '../../data/listings.json'
import ListingModal from '@/app/modals/listingModal'
const Listings = () => {
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