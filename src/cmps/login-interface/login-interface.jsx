
import { userService } from "../../services/user.service"
import { setUser,validUser } from "../../store/user.action"
import { useDispatch, useSelector } from 'react-redux'


export function LoginInterface({ closeModal, loginType }) {
    const dispatch = useDispatch()


    const onRegister = (ev) => {
        closeModal('Sign up')
        ev.preventDefault()
        const user = { username: ev.target[0].value, password: ev.target[1].value }
       if(loginType==="Register") dispatch(setUser(user))
       else  dispatch(validUser(user))
    }

    return (
        <div className="signUp-modal">
            <div className="title-sector flex"  >
                <button className="exit-btn" onClick={() => closeModal('Sign up')}>x</button>
                <p className="title black bold">Log in or sign up</p>
            </div>
            <form className="sign-up-layout" onSubmit={(event) => onRegister(event)}>

                <h1 className="header black text-start">Welcome to Airbnb</h1>

                <h1 className="header black text-start">Username</h1>
                <input className="signUp-input" type="text" />
                <h1 className="header black text-start">Password</h1>
                <input className="signUp-input" type="password" />

                <p className="text text-start black">We’ll call or text you to confirm your number. Standard message and data rates apply. Privacy Policy</p>
                <button className="continue-btn">{loginType}</button>

            </form>
        </div>
    )

}