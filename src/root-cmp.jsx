import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AppHeader } from './cmps/app-header'
// import { AppFooter } from './cmps/app-footer'
import { MyTrip } from './pages/my-trip'
import { StayApp } from './pages/stay-app'
import { StayDetails } from './pages/stay-details'
import { Wishlist } from './pages/wish-list'
import { Dashboard } from './pages/dashboard'
import {WishListModal} from './cmps/modal/wish-list-modal'
import { WishlistList } from './pages/wishlist-details'

function App() {
  return (
    <div className="App">
      <div className='dark-screen'></div>
      <AppHeader />
      <Routes>
        <Route path='/stays/:id' element={<StayDetails />} />
        <Route path='/wishlist/:id' element={<WishlistList />} />
        <Route path='/wishlist' element={<Wishlist />} />
        <Route path='/my-trip' element={<MyTrip />} />
        <Route path='/dashboard' element={< Dashboard />} />
        <Route path='/' element={<StayApp />} />
        {/* <AppFooter /> */}
      </Routes>
    </div>
  )
}

export default App;
