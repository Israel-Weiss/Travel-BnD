
import { userService } from "../../services/user.service"

export function SignInModal({ closeModal }) {

    const onRegister = (ev) => {
        ev.preventDefault()
        const user = { username: ev.target[0].value, password: ev.target[1].value }
        userService.register(user)
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
                <button className="continue-btn">Register</button>

            </form>
        </div>
    )

}