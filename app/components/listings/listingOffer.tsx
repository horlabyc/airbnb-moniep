import React from 'react'
import { IconType } from 'react-icons'

interface ListingOfferProps {
  Icon: IconType
  offer: string
}
const ListingOffer: React.FC<ListingOfferProps> = ({ Icon, offer }) => {
  return (
    <div className="flex items-center gap-3">
      <Icon size={24}/>
      <span className='text-gray-600 text-sm w-[100px]'>{offer}</span>
    </div>
  )
}

export default ListingOffer