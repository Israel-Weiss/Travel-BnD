
import { useDispatch, useSelector } from 'react-redux'
import { orderService } from '../services/order.service'
import { useState } from 'react'
import React, { useEffect } from 'react'
import { LoginInterface } from '../cmps/login-interface/login-interface'
import { socketService, SOCKET_EVENT_ORDER_ADDED, SOCKET_EVENT_ORDER_UPDATE } from '../services/socket.service.js'
import { Chartline } from './chart-line'
import doneIcon from '../assets/imgs/done.svg'
import cancelIcon from '../assets/imgs/cancel.svg'
import { LinesChart } from '../cmps/dashboard/multi-line'

export function Dashboard() {
    const { loggedInUser } = useSelector(state => state.userModule)
    const [orders, setOrders] = useState(null)

    useEffect(() => {
        loadOrders()
    }, [loggedInUser])

    useEffect(() => {
        socketService.on(SOCKET_EVENT_ORDER_ADDED, ((order) => {
            setOrders(prev => [...prev, order.ops[0]])
        }
        ))
    }, [])

    useEffect(() => {
        socketService.on(SOCKET_EVENT_ORDER_UPDATE, ((order) => {
            console.log(order, "update socket");
            loadOrders()
            // setOrders([...orders])
        }
        ))
    }, [])



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
            if (order.status === "Aprove") totalPrice += (order.price * order.nights)
        })
        console.log(totalPrice);
        return totalPrice
    }


    if (!orders) return 
    else return (

        <section className="my-trip-container">

            <div className="cards  flex space-between" >

                <div className="flex-column" style={{ width: "100%" }} >
                    <div className="balance-conatiner">
                        <p className='title'>Total revenue</p>

                        <div className="balance-sector">
                            <p className="info">This month</p>
                            <p className="info">${getTotalPrice()}</p>
                        </div>
                        <div className="balance-sector">
                            <p className="info">This year</p>
                            <p className="info">${getTotalPrice()}</p>
                        </div>
                        <div className="balance-sector">
                            <p className="info">Total income</p>
                            <p className="info">${getTotalPrice()}</p>
                        </div>
                    </div>

                    <div className="music-player">

                    </div>
                </div>

                <div className='chart'><LinesChart height={300} width={670} /></div>
                <div className='chart-phone'><LinesChart height={300} width={300} /></div>
            </div>

            <div className='order-container'>
                <div className="order-list">
                    <div className="title"><p>COSTUMER</p></div>
                    <img className=' phone-only' style={{ display: "none" }} />
                    <div className="title" ><p>STAY</p></div>
                    <div className=" title"><p>DATES</p></div>
                    <div className="title"><p>GUESTS</p></div>
                    <div className="title"><p>NIGHTS</p></div>
                    <div className="title"><p>TOTAL</p></div>
                    <div className="title"><p className='status-title'>STATUS</p></div>
                    <div className="title "><p className='last-type'>ACTION</p></div>
                </div>

                {orders.map(order => {
                    const { startDate, endDate } = order
                    const dates = startDate.substring(9, 11) + "-" + endDate
                    return <div className="order-list">
                        <div className='costumer'>
                            <img className='user-profile' src={order.userImg} />
                            <p>{order.username}</p>
                        </div>
                        <img className=' phone-only' src={order.stayImg} />
                        <div className="stay"><p>{order.stay.substring(0, 17)}...</p></div>
                        <div>
                            <p className="date">{dates}</p>
                            {/* //phone */}
                            <p className="date-phone">{order.startDate}</p>
                        </div>
                        <div className='pok'><p>1</p></div>
                        <div ><p>{order.nights}</p></div>
                        <div className='total-price'><p>${order.price * order.nights}</p></div>
                        {order.status === "pending" && <div><p>Pending</p></div>}
                        {order.status === "Aprove" && <div><img className='order-icon' src={doneIcon} /><p>Paid</p></div>}
                        {order.status === "Cancel" && <div><img className='order-icon' src={cancelIcon} /><p>Canceled</p></div>}
                        <div className="order-text">
                            {order.status !== "Aprove" && <button className="cancelBtn" onClick={() => updateOrder(order._id, "Aprove")}>Aprove</button>}
                            {order.status === "Aprove" && <button className="cancelBtn" style={{ backgroundColor: "#f0f2f5", color: "black" }} onClick={() => updateOrder(order._id, "Cancel")}>Cancel</button>}
                        </div>
                    </div>
                })}
            </div>
        </section >
    )

}