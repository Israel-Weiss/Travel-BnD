import React from 'react'
import { addDays } from 'date-fns'
import { useState, useEffect } from 'react'
import { DateRangePicker } from 'react-date-range'
import { orderService } from '../services/order.service'

export function MyCalendar(){

    const [orders, setOrders] = useState(null)
    const [state, setState] = useState([
          {
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection'
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

// const onSelectedRange = () => {
//     if(state[0].endDate === state[0].startDate && state[0].startDate !== "" && state[0].endDate !== "") return
//     document.querySelector('.calendar').style.display = 'none'
//     console.log('hello')
// }

return(

<DateRangePicker
  onChange={item => setState([item.selection])}
  showSelectionPreview={true}
  moveRangeOnFirstSelection={false}
  months={2}
  ranges={state}
  direction="horizontal"
/>
)
}