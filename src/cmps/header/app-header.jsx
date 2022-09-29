import { NavLink } from "react-router-dom";
import { useState } from 'react'
import { useSelector } from 'react-redux'
//pics
import logoPic from "../../assets/imgs/logo.png";
import logoMobilePic from "../../assets/imgs/logo-mobile.png";
//cmp
import { SubHeader } from "../header/sub-header";
import { NavBar } from "./nav-bar";
import { UserManual } from "./user-manual";


export function AppHeader() {
    const { loggedInUser } = useSelector(state => state.userModule)
    const { currentUrl } = useSelector(state => state.stayModule)
    const { filterBy } = useSelector(state => state.stayModule)
    var currentCmp
    var explorerMode
    var [anywhereM, setAnywhereM] = useState(false)

    currentUrl.includes("stays") ? currentCmp = "stayDetails" : currentCmp = "stayList"
    filterBy ? explorerMode = { position: "fixed", zIndex: "1", padding: "0px 15px 0px 15px", width: "100%" } : explorerMode = { position: "unset", zIndex: "unset" }


    const openModal = (className) => {

        if (className === 'anywhere') {
            document.querySelector('.dark-screen').style.display = 'block'
            document.querySelector('.dark-screen').style.top = '20%'
            document.querySelector('.dark-screen').style.height = '80%'
            var elHeader = document.querySelector('.header-container')
            if (!anywhereM) elHeader.style.borderBottom = "none"

            else elHeader.style.borderBottom = '1px solid rgb(236,236,236)'
            setAnywhereM(!anywhereM)
        }
        window.addEventListener("wheel", callback)
        function callback(ev) {
            const direction_1 = ev.deltaY;
            if (direction_1 > 0) {
                document.querySelector('.dark-screen').style.display = 'none'
                document.querySelector('.dark-screen').style.top = '0'
                document.querySelector('.dark-screen').style.height = '100%'
                setAnywhereM(false)
                window.removeEventListener("wheel", callback)
            }
        }
    }

    return (
        <div>
            <header className={currentCmp !== "stayDetails" ? 'stay-list-layout header-container ' : 'stay-details-layout header-container '} style={explorerMode}>

                {/* <NavLink to='/#'><img className="logo-for-mobile" src={logoMobilePic} onClick={() => { window.location.href = "index.html/#" }} /></NavLink> */}
                <NavLink to='/#'><div className="logo"  onClick={() => { window.location.href = "index.html/#" }} ></div>

                </NavLink>
                <NavBar openModal={openModal} currentCmp={currentCmp} />
                <UserManual loggedInUser={loggedInUser} />

            </header>
            {anywhereM && <section><SubHeader setAnywhereM={setAnywhereM} /></section>}
        </div>
    )
}





