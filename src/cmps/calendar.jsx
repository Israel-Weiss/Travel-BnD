import React, { useEffect, useRef,useState } from "react"
import { DateRange } from "react-date-range"
import { orderService } from '../services/order.service'
import "react-date-range/dist/styles.css"
import "react-date-range/dist/theme/default.css"
import { ReserveModal } from "./modal/modal-reserve"

export function MyCal() {
    const [orders, setOrders] = useState(null)
    const [state, setState] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: "selection"
        }
      ])
    
    useEffect(() => {
        loadOrders()
    }, [])

      useEffect(() => {
        if(state[0].startDate || state[0].endDate)
            putVal();
      })

    const loadOrders = () => {
        orderService.getByLogedInUser().then(orders => {
            setOrders(orders)
        })
    }

    const putVal = () => {
        const start = document.querySelector('.date-in')
        const end = document.querySelector('.date-out')
        start.innerHTML = state[0].startDate.toString().slice(0, 15)
        end.innerHTML = state[0].endDate.toString().slice(0, 15)
    }

    if (!orders) return

    return (
        <div className="App" style={{position:"fixed"}}>
        <DateRange
            onChange={(item) => setState([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={state}   
        />
    </div>
    )
}