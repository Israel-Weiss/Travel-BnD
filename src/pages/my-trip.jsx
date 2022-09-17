import { useDispatch, useSelector } from 'react-redux'
import { orderService } from '../services/order.service'
import { useState } from 'react'
import React, { useEffect } from 'react'

export function MyTrip() {


    // const orders = useSelector(state => state.orderModule.orders)


    const [orders, setOrders] = useState(null)
    

    useEffect(() => {
        loadOrders()
    }, [])

    const loadOrders = () => {
        orderService.getByLogedInUser().then(orders => {
            setOrders(orders)
        })
    }


    console.log(orders);

    if (!orders) return
    return (
        <section className="my-trip-container">
            <h1 className="header">My Trips</h1>

            <div className="category">
                <div className="category-section"><p>Date</p></div>
                <div className="category-section"><p>Host</p></div>
                <div className="category-section"><p>Stay</p></div>
                <div className="category-section"><p>Dates</p></div>
                <div className="category-section"><p>Guests</p></div>
                <div className="category-section"><p>Total</p></div>
                <div className="category-section"><p>Status</p></div>
                <div className="category-section"><p>Actions</p></div>
            </div>

            {orders.map(order => {
                return <div className="category">
                    <div className="category-section"><p>{order.date}</p></div>
                    <div className="category-section"><p>{order.host}</p></div>
                    <div className="category-section"><p>{order.stay}</p></div>
                    <div className="category-section"><p>{order.startDate} - {order.endDate}</p></div>
                    <div className="category-section"><p>1</p></div>
                    <div className="category-section"><p>${order.price}</p></div>
                    <div className="category-section"><p>{order.pending}</p></div>
                    <div className="category-section"><button className="cancelBtn">Cancel</button></div>
                </div>
            })}

        </section>
    )
} 