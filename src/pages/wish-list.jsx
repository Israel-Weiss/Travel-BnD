import React from "react";
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { stayService } from "../services/stay.service";

export function Wishlist() {

    const [stay, setstays] = useState(null)
    const {loggedInUser}= useSelector(state => state.userModule)
    var counter = 0


    useEffect(() => {
        loadstays()
    }, [loggedInUser])

    const loadstays = () => {
        stayService.query().then(stays => {
            setstays(stays)
        })
    }

    console.log(stay)

    const updateMe = () => {
        console.log('im working')
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
                <div className="wish-box" onClick={updateMe()}>
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
                <h2 className="list-title">Dummy list</h2>
            </div>
        </section>
    </section>
)}