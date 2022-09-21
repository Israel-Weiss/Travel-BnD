import { useDispatch, useSelector } from 'react-redux'
import { orderService } from '../services/order.service'
import { UtilService } from '../services/util.service'
import { useState } from 'react'
import { socketService, SOCKET_EVENT_ORDER_ADDED,SOCKET_EVENT_ORDER_UPDATE } from '../services/socket.service.js'
import React, { useEffect } from 'react'

export function MyTrip() {

    const [orders, setOrders] = useState(null)
    const { loggedInUser } = useSelector(state => state.userModule)

    useEffect(() => {
        loadOrders()
    }, [loggedInUser])

    useEffect(() => {
        socketService.on(SOCKET_EVENT_ORDER_ADDED, ((order) =>{
        setOrders(prev => [...prev, order.ops[0]])}
        ))
    }, [])

    useEffect(() => {
        socketService.on(SOCKET_EVENT_ORDER_UPDATE, ((order) =>{
            loadOrders()
    }
        ))
    }, [])


    const loadOrders = () => {
        orderService.getByLogedInUser().then(orders => {
            setOrders(orders)
        })
    }

    const updateOrder = (orderID, status) => {
        orderService.aproveOrder(orderID, status).then(orders => {
            loadOrders()
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
                const { startDate, endDate } = order
                const dates = "["+startDate.substring(8, 10) + "-" + endDate.substring(8, 10)+ "]"+ "-" + UtilService.stringToDate( endDate.substring(4,7)) + "-"+ endDate.substring(11, 15)
                return <div className="order-list">
                    <div className="order-text"><p>{order.date}</p></div>
                    <div className="order-text"><p>{order.host}</p></div>
                    <div className="order-text"><p>{order.stay.substring(0,17)}...</p></div>
                    <div className="order-text"><p>{dates}</p></div>
                    <div className="order-text"><p>1</p></div>
                    <div className="order-text"><p>${order.price}</p></div>
                    {order.status === "pending" && <div className="order-text" ><p>Pending</p></div>}
                    {order.status === "Aprove" && <div className="order-text" style={{ color: "blue" }} ><p>Aproved</p></div>}
                    {order.status === "Cancel" && <div className="order-text" style={{ color: "red" }} ><p>Canceled</p></div>}
                    <div className="order-text"><button className="cancelBtn" onClick={() => updateOrder(order._id, "Cancel")}>Cancel</button></div>
                </div>
            })}

        </section>
    )
} 