import React from "react";
import { useState, useEffect } from 'react'
import { stayService } from "../services/stay.service";
import { useDispatch, useSelector } from 'react-redux'
import renameicon from '../assets/imgs/renameicon.svg'


export function WishList() {

<<<<<<< HEAD
    const [stay, setstays] = useState(null)
    const {loggedInUser}= useSelector(state => state.userModule)
    const [modalFlag, setModalFlag] = useState(false)
=======
import { StayList } from '../cmps/stay-list'
export function Wishlist() {
>>>>>>> cc292a36589f361a7ed7bc7fd6f0783be26ba682

    var counter = 0

    useEffect(() => {
        loadstays()
    }, [loggedInUser])

    const loadstays = () => {
        stayService.query().then(stays => {
            setstays(stays)
        })
    }

    const onRename = (ev) => {
        closeModal('Save')
        ev.preventDefault()
        const wishlistName = document.querySelector('.list-title')
        wishlistName.innerHTML = ev.target[0].value
        console.log(ev)
    }

    const changeModal = () => {
        document.querySelector('.wishlist-edit-modal').style.display = 'flex'
        setModalFlag(true)
    }

    const closeModal = () => {
        document.querySelector('.wishlist-edit-modal').style.display = 'none'
        setModalFlag(false)
    }

    if(!stay)return

return (
    <section className="wishlist-container">
        <div className="title-container">
            <h1 className="title">Wishlists</h1>
        </div>
    
        <section className="wish-list">
            
            <div className="list">
                <a href="http://localhost:3000/#/">
                <div className="wish-box">
                {
                stay.map((stay) =>{
                    
                    if(stay.likedByUsers.includes(loggedInUser) && counter < 3)  {      
                        counter++      
                        return (
                            <img className='wish-pic' src={stay.imgUrls[0]} />
                        )
                    }
                }
                )}
                </div>
                </a>
                <h2 className="list-title">Dummy list</h2><img className='wishlist-rename-icon' src={renameicon} onClick={() => changeModal()} />
                    <div className="wishlist-edit-modal" style={{display: modalFlag ? 'flex' : 'none'}}>
                        <div className="setting-title-sector flex"  >
                            <p className="setting-title black bold">Settings</p>
                            <button className="exit-btn" onClick={() => closeModal('Save')}>x</button>
                        </div>
                        <form className="rename-layout" onSubmit={(event) => onRename(event)}>
                
                            <h1 className="header black text-start">New wishlist name</h1>
                            <input className="name-input" type="text" />
                            <p className="text text-start black">Max 20 characters</p>

                            <button className="continue-btn">Save</button>

                        </form>
                    </div>
            </div>
        </section>
    </section>
)
}