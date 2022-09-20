
import { useDispatch, useSelector } from 'react-redux'
import { orderService } from '../services/order.service'
import { useState } from 'react'
import React, { useEffect } from 'react'
import { LoginInterface } from '../cmps/login-interface/login-interface'

export function Dashboard() {
    const {loggedInUser}= useSelector(state => state.userModule)
    const [orders, setOrders] = useState(null)

    useEffect(() => {
        loadOrders()
    }, [loggedInUser])


    const loadOrders = () => {
        if(!loggedInUser)return
        orderService.getByHostName().then(orders => {
            if(!orders)return
            setOrders(orders)
        })
    }

    if(!orders)return <LoginInterface/>
    else return (
        <section className="my-trip-container">
            <h1 className="header">Dashboard</h1>

            <div className="order-list">
                <div className="order-text"><p>Date</p></div>
                <div className="order-text"><p>Booker</p></div>
                <div className="order-text"><p>Stay</p></div>
                <div className="order-text"><p>Dates</p></div>
                <div className="order-text"><p>Guests</p></div>
                <div className="order-text"><p>Total</p></div>
                <div className="order-text"><p>Status</p></div>
                <div className="order-text"><p>Actions</p></div>
            </div>

            {orders.map(order => {
                const { startDate, endDate } = order
                const dates = startDate.substring(0, 2) + "-" + endDate
                return <div className="order-list">
                    <div className="order-text"><p>{order.date}</p></div>
                    <div className="order-text"><p>{order.host}</p></div>
                    <div className="order-text"><p>{order.stay}</p></div>
                    <div className="order-text"><p>{dates}</p></div>
                    <div className="order-text"><p>1</p></div>
                    <div className="order-text"><p>${order.price}</p></div>
                    <div className="order-text"><p>{order.status}</p></div>
                    <div className="order-text"><button className="cancelBtn">Aprove</button></div>
                </div>
            })}

        </section>
    )

}