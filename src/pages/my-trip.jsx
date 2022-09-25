import { useDispatch, useSelector } from 'react-redux'
import { orderService } from '../services/order.service'
import { UtilService } from '../services/util.service'
import { useState } from 'react'
import { socketService, SOCKET_EVENT_ORDER_ADDED, SOCKET_EVENT_ORDER_UPDATE } from '../services/socket.service.js'
import React, { useEffect } from 'react'
import doneIcon from '../assets/imgs/done.svg'
import cancelIcon from '../assets/imgs/cancel.svg'



export function MyTrip() {

    const [orders, setOrders] = useState(null)
    const { loggedInUser } = useSelector(state => state.userModule)

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
            <h1 className="head">My Trips</h1>

            <div className='my-orders-container'>

                {orders.map(order => {
                    const { startDate, endDate } = order
                    const dates = "[" + startDate.substring(0, 2) + "-" + endDate.substring(0, 2) + "]" + "/" + endDate.substring(3)
                    return <div className="order " >

                        <div className='flex  '>
                            <img className='order-img' src={order.stayImg} />
                            <div className="flex-column align-self card" style={{ maxWidth: "50%" }}>
                                <p className='overflow bold' >{order.stay}</p>
                                <p className='bold'>Host:<span> {order.host}</span></p>
                                <p className='bold'>Nights: <span>{order.nights}</span></p>
                                <p className='bold'>Price per night: <span>${order.price}</span></p>
                                <p className='bold'>Total price: <span>${order.price * order.nights}</span></p>
                            </div>
                        </div>

                        {/* <div className="phone-only"> */}
                        <div className="status align-self flex-column status">

                            <div className="phone-flex-div">
                                <p className='status-text bold phone--hidden' >Status</p>

                                {order.status === "pending" && <div className="flex ">
                                <p className='status-text bold phone--only' >Status</p>
                                    <div className="blink"></div>
                                    <p >{order.status}</p>
                                </div>}
                                {order.status === "Aprove" && <div className="flex"  >
                                <p className='status-text bold phone--only' >Status</p>
                                    <img className='order-icon' src={doneIcon} /><p>Confirmed</p>
                                </div>}
                                {order.status === "Cancel" && <div className="flex "  >
                                <p className='status-text bold phone--only' >Status</p>
                                    <img className='order-icon' src={cancelIcon} /><p>Canceled</p>
                                </div>}

                            </div>

                            <p className='total'>Total: ${order.price * order.nights}</p>

                        </div>

                        <div className="flex-column align-self date ">
                            <div className="phone-mode-flex">
                                <p>Start date</p>
                                <p className='bold'>{order.startDate}</p>
                            </div>
                            <div className="phone-mode-flex">
                                <p>End date</p>
                                <p className='bold'>{order.endDate}</p>
                            </div>
                        </div>
                        {/* </div> */}

                    </div>
                })}

            </div>
        </section>
    )
} 