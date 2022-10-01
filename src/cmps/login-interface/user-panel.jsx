
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../store/user.action'
import { useState } from 'react'
import { LoginInterface } from "../login-interface/login-interface";
import $ from 'jquery'

export function UserPanel({ setUserPanel }) {
    const dispatch = useDispatch()
    const { loggedInUser } = useSelector(state => state.userModule)
    var [loginModalFlag, setLoginModalFlag] = useState(false)
    var [loginType, setLoginType] = useState(null)

    const onLogout = () => {
        dispatch(logout(loggedInUser))
    }

    const handleClick = (loginType) => {
        $('.sign-modal').css({ "opacity": "0" })
        $('.dark-screen-sign-modal').css({ "display": "block" })
        setLoginModalFlag(true)
        setLoginType(loginType)
    }

    const closeModal = () => {
        $('.dark-screen-sign-modal').css({ "display": "none" })
        $('.sign-modal').css({ "opacity": "1" })
        setUserPanel(false)
        setLoginModalFlag(false)
    }


    return (
        <section style={{width:"100$"}}>
            <div className='dark-screen-sign-modal' onClick={() => closeModal()}></div>
            <section>
                <div className="sign-modal Montserrat" >
                    {!loggedInUser ?
                        <section>
                            <li><NavLink className="black text-start bold " to='#' onClick={() => handleClick('Register')}>Sign up</NavLink></li>
                            <li><NavLink className="black text-start" to='#' onClick={() => handleClick('Login')}>Log in</NavLink></li>
                        </section> :
                        <li><NavLink className="black text-start" to='#' onClick={() => onLogout()}>Logout</NavLink></li>
                    }
                    {loggedInUser && <li><NavLink className="black text-start" to='/new-stay' onClick={() => setUserPanel(false)}>Become Host</NavLink></li>}
                    <li><NavLink className="black text-start" to='/my-trip' onClick={() => setUserPanel(false)}>My Trips</NavLink></li>
                    {loggedInUser && <li><NavLink className="black text-start" to='/dashboard' onClick={() => setUserPanel(false)}>Dashboard</NavLink></li>}
                    <li><NavLink className="black text-start" to='/wishlist' onClick={() => setUserPanel(false)}>Wishlist</NavLink></li>
                </div>
                {loginModalFlag && <LoginInterface loginType={loginType} closeModal={closeModal} setUserPanel={() => setUserPanel()} />}
            </section>
        </section>
    )
}