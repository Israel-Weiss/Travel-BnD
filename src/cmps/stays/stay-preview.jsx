import pic1 from '../../assets/imgs/house/1.webp'
import pic2 from '../../assets/imgs/house/2.webp'
import btnLeft from '../../assets/imgs/Filter Icons/btn-left.svg'
import React from "react";
import { useState } from 'react'
import { NavLink, useNavigate } from "react-router-dom";

var pics = [pic1, pic2]

export const RoomCard = (stay) => {

    var [idx, setIdx] = useState(0)


    return (
        <div className="card">
            <div className="card-image">
                < NavLink to='rooms/t101'>
                    <img className='card-pic' src={stay.img[idx]} />
                </ NavLink>
                <div onClick={() => {
                    if ((idx + 1) >= pics.length) idx = 0
                    else idx++
                    setIdx(idx)
                }}
                    className="btn-left-conatiner">
                    <img className='btn-left' src={btnLeft} />
                </div>
                <div className="navigation-manual">
                    <div className="navigation-button"></div>
                    <div className="navigation-button"></div>
                    <div className="navigation-button"></div>
                    <div className="navigation-button"></div>
                </div>
            </div>
            <div className="card-info">
                <p className="card-info-location">El Port de la Selva, Spain</p>
                <p className="card-info-distance">2,998 kilometers</p>
                <p className="card-info-date">Oct 10-15</p>
                <p className="card-info-price">1920₪</p>
            </div>
        </div>
    )
}