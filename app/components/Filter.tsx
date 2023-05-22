'use client'
import Image from 'next/image'
import { BiFilterAlt } from 'react-icons/bi'

const Filter = () => {
  return (
    <div className='flex p-[0.75rem] cursor-pointer bg-gray-200 rounded-lg'>
      <BiFilterAlt className="text-gray-500 text-2xl"/>
    </div>
  )
}

export default Filter