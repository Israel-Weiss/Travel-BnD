import React from 'react'
import { AppHeader } from './cmps/app-header.jsx'

// import Routes from 'react'
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/home-page'
import { RoomPreview } from './pages/stay-details'


function App() {
  return (
    <div className="App">
      <div className='gray-filter'></div>
      <AppHeader />
      <Routes>
        <Route path='/rooms/:id' element={<RoomPreview />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  )
}

export default App;
