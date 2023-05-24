'use client'
import { useCallback } from 'react'
import Menu from '../menu/Menu'
import useMenuToggle from '../../hooks/useMenuToggle'
import Listings from '../listings/Listings'
import FilterModal from '../../modals/filterModal'
import Navbar from '../navbar/Navbar'
import SecondaryNavbar from '../secondary-navbar/Secondary-Navbar'

const MainLayout = () => {
  const menuToggle = useMenuToggle()

  const onMenuToggle = useCallback(() => {
    menuToggle.onToggle();
  }, [menuToggle])

  return (
    <div
      className={
        `grid transition-all duration-700 no-scrollbar ease-in-out ${menuToggle.isOpen ? 'grid-cols-[220px,auto]' : 'grid-cols-[100px,auto]'}`}
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