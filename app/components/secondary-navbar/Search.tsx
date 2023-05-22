'use client'
import { BiSearch } from 'react-icons/bi'
import { IoIosArrowDown } from 'react-icons/io'
import { FiCalendar, FiMinus, FiPlus } from 'react-icons/fi'

const Search = () => {
  return (
    <div className='w-full md:w-auto rounded-full'>
      <div className="flex flex-row items-center justify-between gap-4">
        <div className="text-sm bg-gray-100 p-4 rounded-xl flex items-center justify-between w-[250px] cursor-pointer">
          <span className='text-gray-700'>Anywhere</span>
          <IoIosArrowDown className='text-gray-700'/>
        </div>
        <div className="bg-gray-100 flex items-center justify-between rounded-xl p-4 gap-4 cursor-pointer">
          <FiCalendar className='text-gray-500'/>
          <span className='text-gray-700 text-sm'>June 14 - 21</span>
        </div>
        <div className="bg-gray-100 flex items-center justify-between rounded-xl p-2 gap-4">
          <div className="bg-white p-3 rounded-xl cursor-pointer">
            <FiMinus className='text-red-600'/>
          </div>
          <div className="">
            <span className='text-gray-700 text-sm'>4 guests</span>
          </div>
          <div className="bg-white p-3 rounded-xl cursor-pointer">
            <FiPlus className='text-red-600'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search