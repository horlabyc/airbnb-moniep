'use client'
import React, { useCallback } from 'react'
import Menu from '../menu/Menu'
import useMenuToggle from '@/app/hooks/useMenuToggle'

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
      className={`grid grid-cols-[220px,auto] h-screen pt-[148px] transition-all duration-700 ease-in-out ${!menuToggle.isOpen && 'grid-cols-[100px,auto]'}`}
    >
      <div
        className="border-r-[1px] h-full py-8"
        onMouseEnter={onMenuToggle}
        onMouseLeave={onMenuToggle}
      >
        <Menu />
      </div>
      {children}
    </div>
  )
}

export default MainLayout