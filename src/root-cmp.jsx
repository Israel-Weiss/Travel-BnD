import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AppHeader } from './cmps/header/app-header'
// import { AppFooter } from './cmps/app-footer'
import { MyTrip } from './pages/my-trip'
import { StayApp } from './pages/stay-app'
import { StayDetails } from './pages/stay-details'
import { Wishlist } from './pages/wish-list'
import { Dashboard } from './pages/dashboard'
import { WishlistList } from './pages/wishlist-details'
import { AddStay } from './pages/add-stay'


function App() {
  return (
    <div className="App">
      <div className='dark-screen'></div>
      <AppHeader />
      <Routes>
        <Route path='/stays/:id' element={<StayDetails />} />
        <Route path='/wishlist/:id' element={<WishlistList />} />
        <Route path='/wishlist' element={<Wishlist />} />
        <Route path='/new-stay' element={<AddStay />} />
        <Route path='/my-trip' element={<MyTrip />} />
        <Route path='/dashboard' element={< Dashboard />} />
        <Route path='/' element={<StayApp />} />
        {/* <AppFooter /> */}
      </Routes>
    </div>
  )
}

export default App;
