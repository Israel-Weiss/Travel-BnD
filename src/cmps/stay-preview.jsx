import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
//img
import arrowRight from '../assets/imgs/Filter Icons/arowRight.svg'
import arrowLeft from '../assets/imgs/Filter Icons/arowLeft.svg'
import heartIcon from '../assets/imgs/heartIcon.png'
import heartIconRed from '../assets/imgs/heartIcon-red.png'
import starIcon from '../assets/imgs/starIcon.svg'
//CMP
import { stayService } from '../services/stay.service'
import { WishListModal } from '../cmps/modal/wish-list-modal'

export const StayPreview = ({ stay }) => {
    const loggedInUser = useSelector(state => state.userModule.loggedInUser)
    const { city, country } = stay.loc
    const { distance, date, price, likedByUsers,imgUrls } = stay
    var heartPic
    var [idx, setIdx] = useState(0)
    var [isLiked, setIsLiked] = useState(false)
    var [modalFlag, setModalFlag] = useState(false)
 

    const addWishList = () => {
        setModalFlag(!modalFlag)
        if (!isLiked) {
            // document.querySelector('.wishlist-modal').style.display = 'block'
            document.querySelector('.dark-screen').style.display = 'block'
        }
        // setIsLiked(!isLiked)

        if (!likedByUsers.includes(loggedInUser))
            likedByUsers.push(loggedInUser)
        else likedByUsers.pop()
    }

    const moveIndex = (operator) => {
        
        if (operator === "+") {
             idx++
        }
        else {
      
             idx-- 
        }
        console.log(idx);
        setIdx(idx)
    }

    const closeModal = () => {
        setModalFlag(false)
        document.querySelector('.dark-screen').style.display = 'none'
    }

    if (!stay.likedByUsers.includes(loggedInUser)) heartPic = heartIcon
    else heartPic = heartIconRed
    if (!stay) return

    return (
        <div className="card">
            <div className="card-image ">
                {modalFlag && <WishListModal stay={stay} closeModal={closeModal} />}

                < NavLink to={`/stays/${stay._id}`}>
                    <img className='card-pic ' src={stay.imgUrls[idx]} />
                </ NavLink>

                {(idx+1)<imgUrls.length&&<div className="arrow-right-conatiner" onClick={() => moveIndex("+")}>
                    <img className="arrow-right" src={arrowRight} />
                </div>}
                {idx>0&&<div className="arrow-right-conatiner" style={{ left: '-80%' }} onClick={() => moveIndex("-")}>
                    <img className="arrow-right" src={arrowLeft} />
                </div>}

                <div className="navigation-manual">
                    <div className="navigation-button"></div>
                    <div className="navigation-button"></div>
                    <div className="navigation-button"></div>
                    <div className="navigation-button"></div>
                </div>
                 <img className='heart-icon' src={heartPic} onClick={() => addWishList()} />
            </div>

            <div className="card-info">
                <div className="flex space-between" style={{ width: "100%" }}>
                    <p className="card-info-location">{city}, {country}</p>
                    <div className=" flex ">
                        <img className='starIcon' src={starIcon} />
                        <p className='black ' style={{ fontSize: '15px', marginTop: "4px" }}>{stayService.calcRate(stay.reviews)}</p>
                    </div>
                </div>
                <p className="card-info-distance">{stayService.getRandomIntInclusive(200, 1500)} kilometers</p>
                <p className="card-info-date">Oct {stayService.getRandomIntInclusive(1, 9)}-{stayService.getRandomIntInclusive(10, 30)}</p>
                <p className="card-info-price">${price} <span>night</span></p>
            </div>
        </div>
    )
}