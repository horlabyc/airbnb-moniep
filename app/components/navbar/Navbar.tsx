import React from 'react'
import Container from '../container'
import Logo from './Logo'
import Avatar from '../Avatar'
import Navmenu from './Navmenu'

const Navbar = () => {
  return (
    <div className='fixed w-full bg-white z-10 shadow-sm'>
      <div className="border-b-[1px]">
          <Container>
              <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
                <Logo />
                <Navmenu />
                <Avatar />
                  {/* <Search />
                  <UserMenu /> */}
              </div>
          </Container>
      </div>
    </div>
  )
}

export default Navbar