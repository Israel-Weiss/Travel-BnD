import pic1 from '../../assets/imgs/house/1.webp'
import pic2 from '../../assets/imgs/house/2.webp'
import btnLeft from '../../assets/imgs/Filter Icons/btn-left.svg'
import heartIcon from '../../assets/imgs/heartIcon.png'
import heartIconRed from '../../assets/imgs/heartIcon-red.png'

import React from "react";
import { useState } from 'react'
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux'
import { stayService } from '../../services/stay.service'

var pics = [pic1, pic2]

export const StayPreview = ({ stay }) => {

    const loggedInUser = useSelector(state => state.userModule.loggedInUser)
    const { city, country } = stay.loc
    const { distance, date, price } = stay

    var [idx, setIdx] = useState(0)
    var [heartColor, setHeartColor] = useState(null)
    var heartPic
    if(!stay.likedByUsers.includes(loggedInUser))heartPic=heartIcon
    else heartPic=heartIconRed

    const addWishList = () => {
        setHeartColor(!heartColor)
        if(!stay.likedByUsers.includes(loggedInUser)){
            stay.likedByUsers.push(loggedInUser)
        }
        else{
            stay.likedByUsers.pop()
        }
    }



    if (!stay) return

    return (
        <div className="card">
            <div className="card-image">
                < NavLink to={`rooms/${stay._id}`}>
                    <img className='card-pic' src={stay.imgUrls[idx]} />
                </ NavLink>
                <div onClick={() => {
                    if ((idx + 1) >= stay.imgUrls.length) idx = 0
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
                <img className='heart-icon' src={heartPic} onClick={() => addWishList   ()} />


            </div>
            <div className="card-info">
                <p className="card-info-location">{city}, {country}</p>
                <p className="card-info-distance">{distance} kilometers</p>
                <p className="card-info-date">{date}</p>
                <p className="card-info-price">${price}</p>
            </div>
        </div>
    )
}