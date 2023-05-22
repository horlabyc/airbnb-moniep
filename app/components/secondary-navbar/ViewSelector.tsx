'use client'
import React, { useState } from 'react'
import { VscMap } from 'react-icons/vsc'
import { TiThLargeOutline } from 'react-icons/ti'

const ViewSelector = () => {
  const [selectedView, setSelectedView] = useState('grid');

  const handleViewChange = (view: 'grid' | 'list') => {
    setSelectedView(view);
  };
  
  return (
    <div className='bg-gray-100 flex rounded-xl'>
      <div className="p-[0.75rem] flex bg-black rounded-lg">
        <button
          className={`toggle-button ${selectedView === 'list' ? 'selected' : ''}`}
          onClick={() => handleViewChange('list')}
        >
          <TiThLargeOutline className='text-white text-2xl'/>
        </button>
      </div>
      <div className="p-[0.75rem] flex rounded-xl">
        <button
          className={`toggle-button ${selectedView === 'grid' ? 'selected' : ''}`}
          onClick={() => handleViewChange('grid')}
        >
          <VscMap className='text-gray-500 text-2xl font-thin'/>
        </button>
      </div>
    </div>
  )
}

export default ViewSelector