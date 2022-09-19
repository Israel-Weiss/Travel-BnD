import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AppHeader } from './cmps/app-header'
// import { AppFooter } from './cmps/app-footer'
import { MyTrip } from './pages/my-trip'
import { StayApp } from './pages/stay-app'
import { StayDetails } from './pages/stay-details'
<<<<<<< HEAD
import {WishList} from './pages/wish-list'
// import { UserDetails } from './pages/user-details'
=======
import {Wishlist} from './pages/wish-list'
>>>>>>> cc292a36589f361a7ed7bc7fd6f0783be26ba682

function App() {
  return (
    <div className="App">
      <div className='dark-screen'></div>
      <AppHeader />
      <Routes>
<<<<<<< HEAD
        <Route path='/rooms/:id' element={<StayDetails />} />
        <Route path='/wishlist' element={<WishList/>} />
=======
        <Route path='/stays/:id' element={<StayDetails />} />
        <Route path='/wishlist' element={<Wishlist/>} />
>>>>>>> cc292a36589f361a7ed7bc7fd6f0783be26ba682
        <Route path='/my-trip' element={<MyTrip />} />
        <Route path='/' element={<StayApp />} />
        {/* <AppFooter /> */}
      </Routes>
    </div>
  )
}

export default App;
