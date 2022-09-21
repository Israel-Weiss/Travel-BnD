
import { useDispatch, useSelector } from 'react-redux'
import { orderService } from '../services/order.service'
import { useState } from 'react'
import React, { useEffect } from 'react'
import { LoginInterface } from '../cmps/login-interface/login-interface'

export function Dashboard() {
    const { loggedInUser } = useSelector(state => state.userModule)
    const [orders, setOrders] = useState(null)

    useEffect(() => {
        loadOrders()
    }, [loggedInUser])


    const loadOrders = () => {
        if (!loggedInUser) return
        orderService.getByHostName().then(orders => {
            if (!orders) return
            setOrders(orders)
        })
    }

    const updateOrder = (orderID, status) => {
        orderService.aproveOrder(orderID, status).then(orders => {
            loadOrders()
        })
    }

    const getTotalPrice = () => {
        let totalPrice = 0
        orders.map(order => {
          if(order.status==="Aprove")  totalPrice += order.price
        })
        console.log(totalPrice);
        return totalPrice
    }


    if (!orders) return <LoginInterface />
    else return (
        <section className="my-trip-container">
            <h1 className="header">Dashboard</h1>

            <div className="balance-conatiner">
                <p className='title'>Total revenue</p>

                <div className="balance-sector">
                    <p className="info">This month</p>
                    <p className="info">${ getTotalPrice()}</p>
                </div>
                <div className="balance-sector">
                    <p className="info">This year</p>
                    <p className="info">${getTotalPrice()}</p>
                </div>
                <div className="balance-sector">
                    <p className="info">Total income</p>
                    <p className="info">${ getTotalPrice()}</p>
                </div>
            </div>


            <div className="order-list">
                <div className="order-text"><p>Date</p></div>
                <div className="order-text"><p>Booker</p></div>
                <div className="order-text" ><p>Stay</p></div>
                <div className="order-text"><p>Dates</p></div>
                <div className="order-text"><p>Guests</p></div>
                <div className="order-text"><p>Total</p></div>
                <div className="order-text"><p>Status</p></div>
                <div className="order-text"><p>Actions</p></div>
            </div>

            {orders.map(order => {
                const { startDate, endDate } = order
                const dates = startDate.substring(9, 11) + "-" + endDate
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
                    <div className="order-text">
                        <button className="cancelBtn" onClick={() => updateOrder(order._id, "Aprove")}>Aprove</button>
                    </div>
                </div>
            })}

        </section>
    )

}