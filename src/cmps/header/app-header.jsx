import { NavLink } from "react-router-dom";
import { useState } from 'react'
import { useSelector } from 'react-redux'
import $ from 'jquery'
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


    const openModal = () => {
        let darkScreen = $('.dark-screen-header')
        let elHeader = $('.header-container')

        darkScreen && darkScreen.css({ "display": "block", "top": "20%", "height": "80%" })
        !anywhereM ? elHeader.css({ "border-bottom": "none" }) : elHeader.css({ "border-bottom": "1px solid rgb(236,236,236)" })
        setAnywhereM(!anywhereM)

        window.addEventListener("wheel", callback)
        function callback(ev) {
            const direction_1 = ev.deltaY;
            if (direction_1 > 0) {
                closeModal()
                window.removeEventListener("wheel", callback)
            }
        }
        if(anywhereM)closeModal()
    }

    const closeModal = () => {
        let darkScreen = $('.dark-screen-header')
        darkScreen.css({ "display": "none", "top": "0", "height": "100%" })
        setAnywhereM(false)
    }

    return (
        <div>
            <div className='dark-screen-header' onClick={() => closeModal()}></div>
            <header className={currentCmp !== "stayDetails" ? 'stay-list-layout header-container ' : 'stay-details-layout header-container '} style={explorerMode}>
                <NavLink to='/#'><div className="logo" onClick={() => { window.location.href = "/#" }} ></div></NavLink>
                <NavBar openModal={openModal} currentCmp={currentCmp} />
                <UserManual loggedInUser={loggedInUser} />
            </header>
            {anywhereM && <section><SubHeader setAnywhereM={setAnywhereM} closeModal={closeModal}/></section>}
        </div>

    )
}





