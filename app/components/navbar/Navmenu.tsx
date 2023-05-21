import React from 'react'

const Navmenu = () => {
  return (
    <div className='flex gap-10'>
      <div className="py-4 border-b-[3px] border-red-600">
        <span className='text-sm cursor-pointer font-medium text-gray-800'>Stays</span>
      </div>
      <div className="py-4">
        <span className='text-sm cursor-pointer text-gray-500'>Experiences</span>
      </div>
      <div className="py-4">
        <span className='text-sm cursor-pointer text-gray-500'>Online Experiences</span>
      </div>
    </div>
  )
}

export default Navmenu