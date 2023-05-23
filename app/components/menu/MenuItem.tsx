'use client'
import useMenuToggle from '@/app/hooks/useMenuToggle';
import React from 'react'
import { IconType } from 'react-icons'

interface MenuItemProps {
  Icon: IconType;
  name: string,
  link?: string,
  linkActive: boolean
}

const MenuItem: React.FC<MenuItemProps> = ({ Icon, name, linkActive }) => {
  const menuToggle = useMenuToggle()
  return (
    <div className={`flex items-center gap-4 p-4 cursor-pointer hover:bg-gray-100 ${linkActive && 'border-r-[3px] border-red-800'} ${!menuToggle.isOpen && 'justify-around'}`}>
      <Icon className='text-2xl text-gray-600'/>
      {menuToggle.isOpen && <span className='text-sm text-gray-700 font-medium duration-700'>{name}</span>}
    </div>
  )
}

export default MenuItem