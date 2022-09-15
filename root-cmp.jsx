import React from 'react'

// const { Switch, Route } = ReactRouterDOM
import { Routes, Route } from 'react-router'

import routes from './routes'

import { AppHeader } from './cmps/app-header'
import { AppFooter } from './cmps/app-footer'
import { AboutUs } from './pages/about-us'
import { AddStay } from './pages/add-stay'
import { AdminApp } from './pages/admin-app'
import { Booking } from './pages/booking'
import { ChatApp } from './pages/chat-app'
import { HomePage } from './pages/home-page'
import { HostApp } from './pages/host-app'
import { StayApp } from './pages/stay-app'
import { StayDetails } from './pages/stay-details'
import { UpdateStay } from './pages/update-stay'
import { UserDetails } from './pages/user-details'

export class RootCmp extends React.Component {

    render() {
        return (
            <div>
                <AppHeader />
                <main>
                    <Routes>
                        {routes.map(route => <Route key={route.path} exact={true} element={route.component} path={route.path} />)}
                        <Route path="user/:id" element={<UserDetails />} />
                        <Route path="user/:id" element={<UserDetails />} />
                        <Route path="user/:id" element={<UserDetails />} />
                        <Route path="user/:id" element={<UserDetails />} />
                        <Route path="user/:id" element={<UserDetails />} />
                        <Route path="user/:id" element={<UserDetails />} />
                        <Route path="user/:id" element={<UserDetails />} />
                        <Route path="user/:id" element={<UserDetails />} />
                        <Route path="/" element={<UserDetails />} />
                    </Routes>
                </main>
                <AppFooter />
            </div>
        )
    }
}


