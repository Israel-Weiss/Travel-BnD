import React, { useEffect, useRef, useState } from "react"
import { DateRange } from "react-date-range"
import { orderService } from '../services/order.service'
import "react-date-range/dist/styles.css"
import "react-date-range/dist/theme/default.css"
import { UtilService } from "../services/util.service"

export function MyCal(setNightCount, setStartDate, setEndDate) {
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
    if (state[0].startDate || state[0].endDate)
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

    const night = (((state[0].endDate.getTime() - state[0].startDate.getTime()) / (1000 * 36000 * 24)) * 10) + 1
    setNightCount(night)

    
    if (state[0].startDate) {
      setStartDate(UtilService.numberToDate(state[0].startDate))
      setEndDate(UtilService.numberToDate(state[0].endDate))
    }
    // start.innerHTML = UtilService.numberToDate(state[0].startDate.getTime())
    // end.innerHTML = UtilService.numberToDate(state[0].endDate.getTime())
    // elNights.innerText = night
  }

  function handleSelect(ranges) {
    console.log(ranges)
  }

  if (!orders) return

  return (
    <div className="App" style={{ position: "fixed" }}>
      <DateRange
        onChange={(item) => setState([item.selection])}
        moveRangeOnFirstSelection={false}
        ranges={state}

      />
    </div>
  )
}