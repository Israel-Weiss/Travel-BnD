import React from "react";
import "rheostat/initialize";
import Rheostat from "rheostat";
import { stayService } from "../services/stay.service";
import { setStay } from '../store/stay.action'
import { useDispatch, useSelector } from 'react-redux'

import "../styles/components/rheostart.scss";
// import { getValue } from "@testing-library/user-event/dist/utils";

const price = [
  {
    key: "20",
    displayName: "20",
    count: 50,
    min: 50,
    max: 100
  },
  {
    key: "50",
    displayName: "50",
    count: 50,
    min: 70,
    max: 100
  },
  {
    key: "20000",
    displayName: "20000",
    count: 50,
    min: 20000,
    max: 29999
  },
  {
    key: "30000",
    displayName: "30000",
    count: 50,
    min: 30000,
    max: 39999
  },
  {
    key: "40000",
    displayName: "40000",
    count: 0,
    min: 40000,
    max: 49999
  },
  {
    key: "50000",
    displayName: "50000",
    count: 0,
    min: 50000,
    max: 59999
  },
  {
    key: "60000",
    displayName: "60000",
    count: 0,
    min: 60030,
    max: 69999
  },
  {
    key: "70000",
    displayName: "70000",
    count: 4500,
    min: 70000,
    max: 79999
  },
  {
    key: "80000",
    displayName: "80000",
    count: 2527,
    min: 80003,
    max: 89999
  },
  {
    key: "90000",
    displayName: "90000",
    count: 4408,
    min: 90000,
    max: 99999
  },
  {
    key: "100000",
    displayName: "100000",
    count: 4807,
    min: 100000,
    max: 109998
  },
  {
    key: "110000",
    displayName: "110000",
    count: 67500,
    min: 110000,
    max: 119998
  },
  {
    key: "120000",
    displayName: "120000",
    count: 543,
    min: 120010,
    max: 129999
  },
  {
    key: "130000",
    displayName: "130000",
    count: 38600,
    min: 130490,
    max: 139999
  },
  {
    key: "140000",
    displayName: "140000",
    count: 354,
    min: 140441,
    max: 149999
  },
  {
    key: "150000",
    displayName: "150000",
    count: 23600,
    min: 150366,
    max: 159999
  },
  {
    key: "160000",
    displayName: "160000",
    count: 179,
    min: 160212,
    max: 169999
  },
  {
    key: "170000",
    displayName: "170000",
    count: 23500,
    min: 170110,
    max: 179999
  },
  {
    key: "180000",
    displayName: "180000",
    count: 6200,
    min: 180135,
    max: 189991
  },
  {
    key: "190000",
    displayName: "190000",
    count: 30000,
    min: 190238,
    max: 199985
  },
  {
    key: "200000",
    displayName: "200000",
    count: 14,
    min: 200007,
    max: 209999
  },
  {
    key: "210000",
    displayName: "210000",
    count: 22000,
    min: 210900,
    max: 219900
  },
  {
    key: "220000",
    displayName: "220000",
    count: 27,
    min: 22075,
    max: 229965
  },
  {
    key: "230000",
    displayName: "230000",
    count: 12000,
    min: 23012,
    max: 239911
  },
  {
    key: "240000",
    displayName: "240000",
    count: 17000,
    min: 240000,
    max: 249990
  },
  {
    key: "250000",
    displayName: "250000",
    count: 50,
    min: 250730,
    max: 259888
  },
  {
    key: "260000",
    displayName: "260000",
    count: 3000,
    min: 267870,
    max: 269900
  },
  {
    key: "270000",
    displayName: "270000",
    count: 50000,
    min: 272718,
    max: 279990
  },
  {
    key: "280000",
    displayName: "280000",
    count: 800,
    min: 280923,
    max: 289900
  },
  {
    key: "290000",
    displayName: "290000",
    count: 70,
    min: 291787,
    max: 299541
  },
  {
    key: "300000",
    displayName: "300000",
    count: 6000,
    min: 304175,
    max: 309870
  },
  {
    key: "310000",
    displayName: "310000",
    count: 40000,
    min: 310797,
    max: 319000
  },
  {
    key: "320000",
    displayName: "320000",
    count: 4000,
    min: 324900,
    max: 329890
  },
  {
    key: "330000",
    displayName: "330000",
    count: 30000,
    min: 334911,
    max: 339870
  },
  {
    key: "340000",
    displayName: "340000",
    count: 70,
    min: 343500,
    max: 349900
  },
  {
    key: "350000",
    displayName: "350000",
    count: 20000,
    min: 350000,
    max: 355000
  },
  {
    key: "360000",
    displayName: "360000",
    count: 10000,
    min: 369880,
    max: 369880
  },
  {
    key: "370000",
    displayName: "370000",
    count: 2000,
    min: 379000,
    max: 379000
  },
  {
    key: "380000",
    displayName: "380000",
    count: 20000,
    min: 385000,
    max: 389900
  },
  {
    key: "400000",
    displayName: "400000",
    count: 20000,
    min: 409900,
    max: 409900
  },
  {
    key: "420000",
    displayName: "420000",
    count: 0,
    min: 420000,
    max: 420000
  }
]

const PitComponent = ({ style, children }) => {




  for (var i = 1; i < 28; i++) {
    const height = (stayService.getRandomIntInclusive(1, 8)) * 5
    return (
      <div className="bars"
        style={{
          ...style,
          background: "#a2a2a2",
          width: 10,
          height: height,
          bottom: 20
        }}
      />
    );

  }

}

export function PriceFilter(closeModal) {
  const dispatch = useDispatch()

  const onSetFilter = () => {
    let elStartRange = document.querySelector('.min-price-num').innerHTML
    let elEndRange = document.querySelector('.max-price-num').innerHTML
    const startRange = parseInt(elStartRange.substring(2, elStartRange.length))
    const endRange = parseInt(elEndRange.substring(2, elEndRange.length))
    const range = { start: startRange, end: endRange }
    stayService.query(null, null, range).then(
      stays =>{ dispatch(setStay(stays))
        closeModal()
    }  )


  }

  var vars = {
    min: 0,
    max: 1500,
    values: [0, 1500],
  }
  return (

    <div className="App">
      <Rheostat
        min={0}
        max={1500}
        values={vars.values}
        pitComponent={PitComponent}
        onValuesUpdated={(props) => {
          document.querySelector('.min-price-num').innerHTML = '$ ' + props.values[0]
          document.querySelector('.max-price-num').innerHTML = '$ ' + props.values[1]
          { console.log(props.values[0], props.values[1]) }
        }}
        pitPoints={[
          0,
          30,
          50,
          60,
          70,
          80,
          90,
          100,
          150,
          200,
          250,
          280,
          300,
          350,
          370,
          400,
          420,
          460,
          480,
          500,
          520,
          550,
          580,
          600,
          620,
          650,
          680,
          700,
          720,
          760,
          780,
          800,
          820,
          850,
          870,
          900,
          920,
          950,
          970,
          1000,
          1500
        ]
        }

      />

      <div className="price-container flex">
        <div className="min-price-container">
          <div className="min-price-txt">
            Min price
          </div>
          <div className="min-price-num">
            $ {0}
          </div>
        </div>

        <span className="line-btwn-box">-</span>
        <div className="max-price-container">

          <div className="max-price-txt">
            Max price
          </div>
          <div className="max-price-num">
            $ {1000}
          </div>
        </div>

      </div>
      <div className="show-homes" onClick={() => onSetFilter()}>Show homes</div>
    </div>

  )
}