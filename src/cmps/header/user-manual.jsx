import { NavLink} from "react-router-dom";
import { UserPanel } from "../login-interface/user-panel";
import { useState } from 'react'
//IMG
import wordIcon from "../../assets/imgs/worldIcon.svg"
import burgerIcon from "../../assets/imgs/burgerIcon.svg"
import userIcon from "../../assets/imgs/userIcon.svg"

export function UserManual({loginModal,loggedInUser}) {
    var [userPanel, setUserPanel] = useState(false)

    return (
        <div className="user-panel-nav">
        {loggedInUser&&<NavLink className="user-panel-a" to='/new-stay'>Become a Host</NavLink>}
        {/* <img className="world-icon" src={wordIcon} /> */}
        <div onClick={() => setUserPanel(!userPanel)} className="user-container">
            <img className="burger-icon" src={burgerIcon} />
            {!loggedInUser ? <img className="user-icon" src={userIcon} /> :
                <img className="user-profile" src={loggedInUser.imgUrl} />
            }
        </div>
        {userPanel && <UserPanel loginModal={loginModal} setUserPanel={setUserPanel} />}
    </div>
    )


}