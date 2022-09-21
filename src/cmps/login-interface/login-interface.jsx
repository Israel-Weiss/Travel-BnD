
import { userService } from "../../services/user.service"
import { setUser,validUser } from "../../store/user.action"
import { useDispatch, useSelector } from 'react-redux'


export function LoginInterface({ closeModal, loginType }) {
    const dispatch = useDispatch()


    const onRegister = (ev) => {
        closeModal('Sign up')
        ev.preventDefault()
        const imgUrl = "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80"
        const user = { username: ev.target[0].value, password: ev.target[1].value ,imgUrl,fullname:ev.target[0].value}
       if(loginType==="Register") dispatch(setUser(user))
       else  dispatch(validUser(user))
    }

    return (
        <div className="signUp-modal">
            <div className="title-sector flex"  >
                <p className="title black bold">Log in or sign up</p>
                <button className="exit-btn" onClick={() => closeModal('Sign up')}>x</button>
            </div>
            <form className="sign-up-layout" onSubmit={(event) => onRegister(event)}>
                <h1 className="header black text-start">Username</h1>
                <input className="signUp-input" type="text" />
                <h1 className="header black text-start">Password</h1>
                <input className="signUp-input" type="password" />

                <p className="text text-start black">We’ll call or text you to confirm your number. Standard message and data rates apply. Privacy Policy</p>
               {loginType? <button className="continue-btn">{loginType}</button>:
               <button className="continue-btn">Login</button>
               }

            </form>
        </div>
    )

}