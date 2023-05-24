import React from 'react'
import Image from 'next/image'

interface ImagePreviewProps {
  listing: any
}
const ImagePreview:React.FC<ImagePreviewProps> = ({ listing }) => {
  return (
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
    </div>
    <div className="bg-gray-100 absolute rounded-xl py-2 px-3 bottom-3 left-4 text-xs text-gray-700">View All Photos</div>
  </div>
  )
}

export default ImagePreview