import React, { useState } from "react"
import { DateRange } from "react-date-range"
import "react-date-range/dist/styles.css"
import "react-date-range/dist/theme/default.css"

export function MyCal() {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection"
    }
  ])
  var startdate = state[0].startDate
  var enddate = state[0].endDate
  return (
    <div className="App" style={{position:"fixed"}}>
      <DateRange
        onChange={item => setState([item.selection])}
        moveRangeOnFirstSelection={false}
        ranges={state}
      />
    </div>
  );
}