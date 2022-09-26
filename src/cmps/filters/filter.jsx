import React from "react";
import "rheostat/initialize";
import Rheostat from "rheostat";
import { stayService } from "../../services/stay.service"
import { setStay } from '../../store/stay.action'
import { useDispatch, useSelector } from 'react-redux'

import "../../styles/components/rheostart.scss";
// import { getValue } from "@testing-library/user-event/dist/utils";

const price = [
  {
    key: "30",
    displayName: "30",
    count: 15,
    min: 0,
    max: 30
  },
  {
    key: "40",
    displayName: "40",
    count: 10,
    min: 30,
    max: 40
  },
  {
    key: "45",
    displayName: "45",
    count: 20,
    min: 40,
    max: 45
  },
  {
    key: "50",
    displayName: "50",
    count: 12,
    min: 45,
    max: 50
  },
  {
    key: "55",
    displayName: "55",
    count: 18,
    min: 50,
    max: 55
  },
  {
    key: "60",
    displayName: "60",
    count: 18,
    min: 55,
    max: 60
  },
  {
    key: "65",
    displayName: "65",
    count: 13,
    min: 60,
    max: 65
  },
  {
    key: "70",
    displayName: "70",
    count: 13,
    min: 65,
    max: 70
  },
  {
    key: "80",
    displayName: "80",
    count: 23,
    min: 70,
    max: 80
  },
  {
    key: "90",
    displayName: "90",
    count: 19,
    min: 80,
    max: 90
  },
  {
    key: "100",
    displayName: "100",
    count: 10,
    min: 90,
    max: 100
  },
  {
    key: "110",
    displayName: "110",
    count: 40,
    min: 100,
    max: 110
  },
  {
    key: "120",
    displayName: "120",
    count: 40,
    min: 110,
    max: 120
  },
  {
    key: "130",
    displayName: "130",
    count: 40,
    min: 120,
    max: 130
  },
  {
    key: "150",
    displayName: "150",
    count: 40,
    min: 130,
    max: 150
  },
  {
    key: "165",
    displayName: "165",
    count: 36,
    min: 150,
    max: 165
  },
  {
    key: "180",
    displayName: "180",
    count: 36,
    min: 165,
    max: 180
  },
  {
    key: "200",
    displayName: "200",
    count: 36,
    min: 180,
    max: 200
  },
  {
    key: "220",
    displayName: "220",
    count: 36,
    min: 200,
    max: 220
  },
  {
    key: "250",
    displayName: "250",
    count: 19,
    min: 220,
    max: 250
  },
  {
    key: "280",
    displayName: "280",
    count: 10,
    min: 250,
    max: 280
  },
  {
    key: "300",
    displayName: "300",
    count: 9,
    min: 280,
    max: 300
  },
  {
    key: "320",
    displayName: "320",
    count: 11,
    min: 300,
    max: 320
  },
  {
    key: "350",
    displayName: "350",
    count: 11,
    min: 320,
    max: 350
  },
  {
    key: "370",
    displayName: "370",
    count: 6,
    min: 350,
    max: 370
  },
  {
    key: "400",
    displayName: "400",
    count: 10,
    min: 370,
    max: 400
  },
  {
    key: "420",
    displayName: "420",
    count: 2,
    min: 400,
    max: 420
  },
  {
    key: "460",
    displayName: "460",
    count: 3,
    min: 420,
    max: 460
  },
  {
    key: "480",
    displayName: "480",
    count: 5,
    min: 460,
    max: 480
  },
  {
    key: "500",
    displayName: "500",
    count: 2,
    min: 480,
    max: 500
  },
  {
    key: "520",
    displayName: "520",
    count: 5,
    min: 500,
    max: 520
  },
  {
    key: "550",
    displayName: "550",
    count: 3,
    min: 520,
    max: 550
  },
  {
    key: "580",
    displayName: "580",
    count: 3,
    min: 550,
    max: 580
  },
  {
    key: "600",
    displayName: "600",
    count: 6,
    min: 580,
    max: 600
  },
  {
    key: "620",
    displayName: "620",
    count: 0,
    min: 600,
    max: 620
  },
  {
    key: "65",
    displayName: "650",
    count: 1,
    min: 620,
    max: 650
  },
  {
    key: "680",
    displayName: "680",
    count: 1,
    min: 650,
    max: 680
  },
  {
    key: "700",
    displayName: "700",
    count: 2,
    min: 680,
    max: 700
  },
  {
    key: "720",
    displayName: "720",
    count: 1,
    min: 700,
    max: 720
  },
  {
    key: "760",
    displayName: "760",
    count: 1,
    min: 720,
    max: 760
  },
  {
    key: "780",
    displayName: "780",
    count: 1,
    min: 760,
    max: 780
  },
  {
    key: "800",
    displayName: "800",
    count: 4,
    min: 780,
    max: 800
  },
  {
    key: "820",
    displayName: "820",
    count: 0,
    min: 800,
    max: 820
  },
  {
    key: "850",
    displayName: "850",
    count: 0,
    min: 820,
    max: 850
  },
  {
    key: "870",
    displayName: "870",
    count: 1,
    min: 850,
    max: 870
  },
  {
    key: "900",
    displayName: "900",
    count: 0,
    min: 870,
    max: 900
  },
  {
    key: "920",
    displayName: "920",
    count: 1,
    min: 900,
    max: 920
  },
  {
    key: "950",
    displayName: "950",
    count: 2,
    min: 920,
    max: 950
  },
  {
    key: "1100",
    displayName: "970",
    count: 2,
    min: 950,
    max: 970
  },
  {
    key: "1250",
    displayName: "1000",
    count: 3,
    min: 970,
    max: 1000
  },
  {
    key: "1350",
    displayName: "1200",
    count: 12,
    min: 1000,
    max: 3600
  }
]

const PitComponent = ({ style, children }) => {

  for (var i = 1; i < 27; i++) {
    const count = price.find((val) => String(children) === val.displayName)
    ?.count
    const height = Math.round((count * 2 ))

    return (
      <div className="bars"
        style={{
          ...style,
          background: "#a2a2a2",
          width: '1px',
          height: height,
          bottom: 8,
          marginRight:'10px',
          border:'0.2px solid $clr7'


        }}
      />
    )

  }

}

export function PriceFilter(closeModal) {
  // const dispatch = useDispatch()

  // const onSetFilter = () => {
  //   let elStartRange = document.querySelector('.min-price-num').innerHTML
  //   let elEndRange = document.querySelector('.max-price-num').innerHTML
  //   const startRange = parseInt(elStartRange.substring(2, elStartRange.length))
  //   const endRange = parseInt(elEndRange.substring(2, elEndRange.length))
  //   const range = { start: startRange, end: endRange }
  //   stayService.query(null, null, range).then(
  //     stays =>{ dispatch(setStay(stays))
  //       closeModal()
  //   }  )


  // }

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
      {/* <div className="show-homes modal-footer" onClick={() => onSetFilter()}>Show homes</div> */}
    </div>

  )
}
