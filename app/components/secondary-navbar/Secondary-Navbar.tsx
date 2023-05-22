import React from 'react'
import Container from '../container'
import ViewSelector from './ViewSelector'
import Filter from '../Filter'
import Search from './Search'

const SecondaryNavbar = () => {
  return (
    <div className='pt-[60px] w-full bg-white z-10 shadow-sm'>
      <div className="border-b-[1px]">
        <Container>
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0 py-4">
            <ViewSelector />
            <Search />
            <Filter />
          </div>
        </Container>
      </div>
    </div>
  )
}

export default SecondaryNavbar