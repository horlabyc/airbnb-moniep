'use client'
import Image from 'next/image'
import { BiFilterAlt } from 'react-icons/bi'
import useFilterModal from '../hooks/useFilterModal'

const Filter = () => {
  const filterModal = useFilterModal()
  return (
    <div className='flex p-[0.75rem] cursor-pointer bg-gray-200 rounded-lg'>
      <BiFilterAlt className="text-gray-500 text-2xl" onClick={filterModal.onOpen}/>
    </div>
  )
}

export default Filter