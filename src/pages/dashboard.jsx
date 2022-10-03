
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
import { OrderChart } from '../cmps/dashboard/pieChart'
import { FcBullish } from 'react-icons/fc'
import { FcBearish } from 'react-icons/fc'
import Pagination from '../cmps/pagination' 


export function Dashboard() {
    const { loggedInUser } = useSelector(state => state.userModule)
    const [orders, setOrders] = useState(null)
    const [coinsData, setCoinsData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(6);
    var growthIcon = <FcBullish/>
    
    useEffect(() => {
        loadOrders()
    }, [loggedInUser])

    useEffect(() => {
        socketService.on(SOCKET_EVENT_ORDER_ADDED, ((order) => {
            loadOrders()
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

    const updateOrder = (order, status) => {
        order.status=status
        orderService.aproveOrder(order).then(orders => {
            loadOrders()
        })
    }

    const getTotalPrice = () => {
        let totalPrice = 0
        orders.map(order => {
            if (order.status === "Aprove") totalPrice += (((order.price - order.expenses) * order.nights))
        })

        totalPrice = totalPrice.toFixed(0)
        if (totalPrice > 999 && totalPrice < 9999) totalPrice = totalPrice.toString().charAt(0) + "," + totalPrice.toString().substring(1)
        else if(totalPrice>9999)totalPrice= totalPrice.toString().substring(0,3) + "," +totalPrice.toString().substring(3)
      
        return totalPrice
    }

    function fixPriceComma(price) {
        price = price.toFixed(0)
        if (price > 999 && price < 9999) price = price.toString().charAt(0) + "," + price.toString().substring(1)
        else if(price>9999)price= price.toString().substring(0,2) + "," +price.toString().substring(2)

        return price
    }


    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    if(orders)var currentOrders = orders.slice(firstPostIndex, lastPostIndex);

    if (!orders) return 
    if(orderService.getGrowth(orders) < 1) growthIcon = <FcBearish/>

    return (

        <section className="my-trip-container">

            <div className="cards  flex space-between" >

                <div className="flex-columns " style={{ width: "100%" }} >
                    <div className="balance-conatiner">
                        <p className='title'>Overview</p>

                        <div className="balance-sector">
                            <p className="info">owned properties</p>
                            <p className="info">{orderService.getNumOfStays(loggedInUser)}</p>
                        </div>
                        <div className="balance-sector">
                            <p className="info">Currently occupied</p>
                            <p className="info">{orderService.getNumOfOccupied(orders)}</p>
                        </div>
                        <div className="balance-sector">
                            <p className="info">Monthly growth</p>
                            <p className="info">{orderService.getGrowth(orders)}% <span className='stock-icon'>{growthIcon}</span></p>
                        </div>
                        <div className="balance-sector">
                            <p className="info">Monthly revenue</p>
                            <p className="info">${orderService.getLastMonth(orders)}</p>
                        </div>
                        <div className="balance-sector">
                            <p className="info">Yearly revenue</p>
                            <p className="info">${orderService.getLastYear(orders)}</p>
                        </div>
                        <div className="balance-sector">
                            <p className="info">Total income</p>
                            <p className="info">${getTotalPrice()}</p>
                        </div>
                    </div>

                    <div className="order-piechart-container">
                        <OrderChart orders={orders}/>
                    </div>
                </div>

                <div className='chart'><LinesChart orders={orders} height={300} width={670}  /></div>
                <div className='chart-phone'><LinesChart orders={orders} height={300} width={300} /></div>
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

                {currentOrders.map(order => {
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
                        <div className='total-price'><p>${fixPriceComma(order.price * order.nights)}</p></div>
                        {order.status === "pending" && <div><p>Pending</p></div>}
                        {order.status === "Aprove" && <div><img className='order-icon' src={doneIcon} /><p>Paid</p></div>}
                        {order.status === "Cancel" && <div><img className='order-icon' src={cancelIcon} /><p>Canceled</p></div>}
                        <div className="order-text">
                            {order.status !== "Aprove" && <button className="cancelBtn" onClick={() => updateOrder(order, "Aprove")}>Approve</button>}
                            {order.status === "Aprove" && <button className="cancelBtn" style={{ backgroundColor: "#f0f2f5", color: "black" }} onClick={() => updateOrder(order, "Cancel")}>Cancel</button>}
                        </div>
                    </div>
                })}
                        <Pagination
                totalPosts={orders.length}
                postsPerPage={postsPerPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
            />
            </div>
        </section >
    )

}