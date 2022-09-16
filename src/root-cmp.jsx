import React from 'react'
import { Route, Routes } from 'react-router-dom'



import { AppHeader } from './cmps/app-header'
import { AppFooter } from './cmps/app-footer'
import { MyTrip } from './pages/my-trip'
// import { AboutUs } from './pages/about-us'
// import { AddStay } from './pages/add-stay'
// import { AdminApp } from './pages/admin-app'
// import { Booking } from './pages/booking'
// import { ChatApp } from './pages/chat-app'
// import { HostApp } from './pages/host-app'
import { StayApp } from './pages/stay-app'
import { StayDetails } from './pages/stay-details'
// import { UpdateStay } from './pages/update-stay'
// import { UserDetails } from './pages/user-details'

function App() {
  return (
    <div className="App">
      <div className='gray-filter'></div>
      <AppHeader />
      <Routes>
        <Route path='/rooms/:id' element={<StayDetails />} />
        <Route path='/my-trip' element={<MyTrip />} />
        <Route path='/' element={<StayApp />} />
        {/* <AppFooter /> */}
      </Routes>
    </div>
  )
}

export default App;
