
import { NavLink} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../store/user.action'
import {  useState } from 'react'
import { LoginInterface } from "../login-interface/login-interface";

export function UserPanel({ setUserPanel }) {
    const dispatch = useDispatch()
    const { loggedInUser } = useSelector(state => state.userModule)
    var [loginModalFlag, setLoginModalFlag] = useState(false)
    var [loginType, setLoginType] = useState(null)

    const onLogout = () => {
        dispatch(logout(loggedInUser))
    }

    const handleClick = (loginType) => {
        document.querySelector(".sign-modal").style.opacity = "0"
        document.querySelector('.dark-screen').style.display = 'block'
        setLoginModalFlag(true)
        setLoginType(loginType)
    }

    return (

        <section>
            <div className="sign-modal">
                {!loggedInUser ?
                    <section>
                        <li><NavLink className="black text-start bold" to='#' onClick={() => handleClick('Register')}>Sign up</NavLink></li>
                        <li><NavLink className="black text-start" to='#' onClick={() => handleClick('Login')}>Log in</NavLink></li>
                    </section> :
                    <li><NavLink className="black text-start" to='#' onClick={() => onLogout()}>Logout</NavLink></li>
                }
                <li><NavLink className="black text-start" to='/my-trip' onClick={() => setUserPanel(false)}>My Trip</NavLink></li>
                <li><NavLink className="black text-start" to='/dashboard' onClick={() => setUserPanel(false)}>Dashboard</NavLink></li>
                <li><NavLink className="black text-start" to='/wishlist' onClick={() => setUserPanel(false)}>Wishlist</NavLink></li>
            </div>
            {loginModalFlag && <LoginInterface loginType={loginType} setLoginModalFlag={setLoginModalFlag}  setUserPanel={()=>setUserPanel()} />}
        </section>
    )
}