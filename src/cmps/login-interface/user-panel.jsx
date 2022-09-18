
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setUser,logout } from '../../store/user.action'
import { storageService } from "../../services/async-storage.service";

export function UserPanel({  toggleModals }) {
    const dispatch = useDispatch()
    const loggedInUser = storageService.getLogedInUser()
    
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
            <li><NavLink className="black text-start" to='/my-trip'>My Trip</NavLink></li>
            <li><NavLink className="black text-start" to='/wishlist'>Wishlist</NavLink></li>

        </div>
    )
}