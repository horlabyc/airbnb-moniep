'use client'
import React, { useCallback } from 'react'
import Menu from '../menu/Menu'
import useMenuToggle from '@/app/hooks/useMenuToggle'
import Listings from '../listings/Listings'
import FilterModal from '@/app/modals/filterModal'

interface MainLayoutProps {
  children: React.ReactNode
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const menuToggle = useMenuToggle()

  const onMenuToggle = useCallback(() => {
    menuToggle.onToggle();
  }, [menuToggle])

  return (
    <div
      className={
        `grid h-screen transition-all duration-700 ease-in-out ${menuToggle.isOpen ? 'grid-cols-[220px,auto]' : 'grid-cols-[100px,auto]'}`}
    >
      <div
        className="border-r-[1px] h-full py-8"
        onMouseEnter={onMenuToggle}
        onMouseLeave={onMenuToggle}
      >
        <Menu />
      </div>
      <Listings />
      <FilterModal />
    </div>
  )
}

export default MainLayout