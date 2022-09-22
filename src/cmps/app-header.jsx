import { NavLink, useNavigate, useParams } from "react-router-dom";
import { useState } from 'react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { storageService } from "../services/async-storage.service";
//pics
import logoPic from "../assets/imgs/logo.png";
import searchIcon from "../assets/imgs/serachIcon.png"
import wordIcon from "../assets/imgs/worldIcon.svg"
import burgerIcon from "../assets/imgs/burgerIcon.svg"
import userIcon from "../assets/imgs/userIcon.svg"
//cmp
import { UserPanel } from "./login-interface/user-panel";
import { LoginInterface } from "./login-interface/login-interface";
import { SearchModal } from './modal/search-modal'
import { SubHeader } from "../cmps/sub-header";

export function AppHeader() {
    const { loggedInUser } = useSelector(state => state.userModule)
    console.log("user is log by name ", loggedInUser);
    const { page } = useSelector(state => state.stayModule)
    console.log(page);

    if (page.includes("stays")) var cmp = "stayDetails"
    else cmp = "stayList"


    //Modals flags
    var [userPanel, setUserPanel] = useState(false)
    var [loginInterface, setLoginInterface] = useState(false)
    var [anywhereM, setAnywhereM] = useState(false)
    var [loginType, setLoginType] = useState(null)

    const toggleModals = (value = null) => {
        if (!value) {
            setUserPanel(!userPanel)
            return
        }
        else {
            setUserPanel(false)
            if (value === "Sign up") {
                setLoginInterface(!loginInterface)
                setLoginType("Register")
            }
            else if (value === "Sign in") {
                setLoginInterface(!loginInterface)
                setLoginType("Login")
            }
            document.addEventListener('click', callback)
            function callback(event) {
                if (event.target.closest('.dark-screen')) {
                    closeModal(value);
                    document.removeEventListener('click', callback)
                }
            }
            document.querySelector('.dark-screen').style.display = 'block'
            document.body.classList.add('modal-open')
        }
    }

    const closeModal = (value) => {
        switch (value) {
            case 'Sign up': {
                setLoginInterface(false)
                document.body.classList.remove('modal-open')
                document.querySelector('.dark-screen').style.display = 'none'
            }
        }
    }

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

            <header className={cmp !== "stayDetails" ? 'stay-list-layout header-container ' : 'stay-details-layout header-container '}>
                <NavLink to='/'><img className="logo" src={logoPic} /></NavLink>
                {/* navbar */}
                <div className={cmp !== "stayDetails" ? 'stay-list-margin header-nav ' : 'stay-details-margin header-nav '}>
                    {cmp !== "stayDetails" ?
                        <section className="flex">
                            <NavLink className="navlink" to='#' onClick={() => openModal('anywhere')}>Anywhere</NavLink>
                            <NavLink className="navlink" to='#'>Any week</NavLink>
                            <NavLink className="navlink" to='#' >Add guests</NavLink>
                        </section> :
                        <NavLink className=" navlink " to='#' onClick={() => openModal('anywhere')}>Start your search</NavLink>}
                    <div className="search-icon"><img className="search-icon-img" src={searchIcon} /></div>
                </div>
                {/* user panel */}
                <div className="user-panel-nav">
                    <NavLink className="user-panel-a" to='#'>Become a Host</NavLink>
                    <img className="world-icon" src={wordIcon} />
                    <div onClick={() => toggleModals()} className="user-container">
                        <img className="burger-icon" src={burgerIcon} />
                        { !loggedInUser ? <img className="user-icon" src={userIcon} /> :
                            <img className="user-profile" src={loggedInUser.imgUrl} />
                        }
                    </div>
                </div>
                {/* modals */}
                {userPanel && <UserPanel toggleModals={toggleModals} setUserPanel={setUserPanel} />}
                {loginInterface && <LoginInterface closeModal={closeModal} loginType={loginType} />}
            </header>
            {anywhereM && <section><SubHeader setAnywhereM={setAnywhereM} /><SearchModal /></section>}
        </div>
    )
}





