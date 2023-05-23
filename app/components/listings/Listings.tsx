import React from 'react'
import ListingCard from './ListingCard'
import listings from '../../data/listings.json'
const Listings = () => {
  return (
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
          key={listing.id}
          data={listing}
        />
      ))}
    </div>
  )
}

export default Listings