'use client'
import React from 'react'
import MenuItem from './MenuItem'
import { FaAirbnb, FaSkiing } from 'react-icons/fa'
import { TbWindow } from 'react-icons/tb'
import { MdOutlineForest, MdOutlineVilla, MdPool } from 'react-icons/md'
import { GiPressureCooker, GiSpookyHouse, GiForestCamp, GiGreenhouse, GiCastle, GiIsland, GiVines } from 'react-icons/gi'
import { TbPool, TbBeach } from 'react-icons/tb'
import { IconType } from 'react-icons'


const menuItems = [
  {
    label: 'All Homes',
    icon: FaAirbnb,
  },
  {
    label: 'Amazing Views',
    icon: TbWindow,
  },
  {
    label: 'Tiny Homes',
    icon: MdOutlineVilla,
  },
  {
    label: `Chef's Kitchen`,
    icon: GiPressureCooker,
  },
  {
    label: 'Surfing',
    icon: TbPool,
  },
  {
    label: 'Mansions',
    icon: GiSpookyHouse,
  },
  {
    label: 'Luxe',
    icon: TbBeach,
  },
  {
    label: 'Treehouses',
    icon: MdOutlineForest
  },
  {
    label: 'Camping',
    icon: GiForestCamp,
  },
  {
    label: 'Beachfront',
    icon: FaSkiing,
  },
  {
    label: 'Farms',
    icon: GiGreenhouse,
  },
  {
    label: 'Castles',
    icon: GiCastle,
  },
  {
    label: 'Islands',
    icon: GiIsland,
  },
  {
    label: 'Vineyard',
    icon: GiVines
  },
  {
    label: 'Amazing Pools',
    icon: MdPool,
  },
]

const Menu = () => {
  return (
    <div>
      {menuItems.map((item) => (
        <MenuItem Icon={item.icon} name={item.label} linkActive={item.label === 'All Homes'}  key={item.label}/>
      ))}
    </div>
  )
}

export default Menu