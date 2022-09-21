
import { NavLink, useNavigate } from "react-router-dom";
// import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setUser, logout } from '../../store/user.action'
import { storageService } from "../../services/async-storage.service";
import { useEffect, useState } from 'react'


export function UserPanel({ toggleModals, setUserPanel }) {
    const dispatch = useDispatch()
    // const loggedInUser = storageService.getLogedInUser()

    const { loggedInUser } = useSelector(state => state.userModule)


    useEffect(() => {
        console.log("lol")
    }, [loggedInUser])





    const onLogout = () => {
        dispatch(logout(loggedInUser))
    }

    return (
        <div className="sign-modal">
            {!loggedInUser ?
                <section>
                    <li><NavLink className="black text-start bold" to='#' onClick={() => toggleModals('Sign up')}>Sign up</NavLink></li>
                    <li><NavLink className="black text-start" to='#' onClick={() => toggleModals('Sign in')}>Log in</NavLink></li>
                </section> :
                <li><NavLink className="black text-start" to='#' onClick={() => onLogout()}>Logout</NavLink></li>
            }
            <li><NavLink className="black text-start" to='/my-trip' onClick={() => setUserPanel(false)}>My Trip</NavLink></li>
            <li><NavLink className="black text-start" to='/dashboard' onClick={() => setUserPanel(false)}>Dashboard</NavLink></li>
            <li><NavLink className="black text-start" to='/wishlist' onClick={() => setUserPanel(false)}>Wishlist</NavLink></li>

        </div>
    )
}