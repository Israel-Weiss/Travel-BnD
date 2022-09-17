import { useDispatch, useSelector } from 'react-redux'
import { orderService } from '../services/order.service'
import { useState } from 'react'
import React, { useEffect } from 'react'

export function MyTrip() {

    const [orders, setOrders] = useState(null)
    
    useEffect(() => {
        loadOrders()
    }, [])

    const loadOrders = () => {
        orderService.getByLogedInUser().then(orders => {
            setOrders(orders)
        })
    }

    if (!orders) return
    return (
        <section className="my-trip-container">
            <h1 className="header">My Trips</h1>

            <div className="order-list">
                <div className="order-text"><p>Date</p></div>
                <div className="order-text"><p>Host</p></div>
                <div className="order-text"><p>Stay</p></div>
                <div className="order-text"><p>Dates</p></div>
                <div className="order-text"><p>Guests</p></div>
                <div className="order-text"><p>Total</p></div>
                <div className="order-text"><p>Status</p></div>
                <div className="order-text"><p>Actions</p></div>
            </div>

            {orders.map(order => {
                return <div className="order-list">
                    <div className="order-text"><p>{order.date}</p></div>
                    <div className="order-text"><p>{order.host}</p></div>
                    <div className="order-text"><p>{order.stay}</p></div>
                    <div className="order-text"><p>{order.startDate} - {order.endDate}</p></div>
                    <div className="order-text"><p>1</p></div>
                    <div className="order-text"><p>${order.price}</p></div>
                    <div className="order-text"><p>{order.pending}</p></div>
                    <div className="order-text"><button className="cancelBtn">Cancel</button></div>
                </div>
            })}

        </section>
    )
} 