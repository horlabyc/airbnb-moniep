import React from 'react'
import Avatar from './Avatar'
import { AiFillStar, AiOutlineTrophy } from 'react-icons/ai'
import { BsShield } from 'react-icons/bs'

interface HostProps {
  userImage: string
  userName: string
}
const Host: React.FC<HostProps> = ({ userImage, userName }) => {
  return (
    <div className='flex flex-col gap-6'>
      <div className="flex justify-between">
        <div className="flex gap-4 items-center">
          <Avatar image={userImage} height={50} width={50} />
          <div className="flex flex-col">
            <p>Hosted by {userName}</p>
            <span className='text-gray-500 text-sm'>Joined in August 2014</span>
          </div>
        </div>
        <div className="rounded-2xl border border-black p-4 cursor-pointer">
          Contact Host
        </div>
      </div>
      <div className="flex gap-8 items-center">
        <div className="flex items-center gap-3">
          <AiFillStar fill='black' className='' />
          <span className='text-gray-800'>2,635 reviews</span>
        </div>
        <div className="flex items-center gap-3">
          <BsShield />
          <span className='text-gray-800'>Identity Verified</span>
        </div>
        <div className="flex items-center gap-3">
          <AiOutlineTrophy color='red' />
          <span className='text-gray-800'>Superhost</span>
        </div>
      </div>
      <p className='text-gray-700'>As a mother of 4, living in Solana Beach for 25+ years, I love to help families enjoy our beatiful area. Vacations are special and we do our very best to make them affordable, enjoy...</p>
    </div>
  )
}

export default Host