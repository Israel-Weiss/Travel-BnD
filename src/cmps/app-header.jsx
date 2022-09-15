import { NavLink, useNavigate } from "react-router-dom";
import { useState } from 'react'

import logoPic from "../assets/imgs/logo.png";
import searchIcon from "../assets/imgs/serachIcon.png"
import wordIcon from "../assets/imgs/worldIcon.svg"
import burgerIcon from "../assets/imgs/burgerIcon.svg"
import userIcon from "../assets/imgs/userIcon.svg"

import { SignModal } from "./sign";
import { SignInModal } from "./login-interface/sign-in";
import { Anywhere } from '../cmps/anywhere'
import { SubHeader } from "../cmps/sub-header";

export function AppHeader() {

    var [modalFlag, setModalFlag] = useState(false)
    var [signUpM, setSignUpM] = useState(false)
    var [anywhereM, setAnywhereM] = useState(false)

    const toggleSignModal = (value = null) => {
        if (!value) {
            setModalFlag(!modalFlag)
            return
        }
        else {
            setModalFlag(false)
            if (value === "Sign up") setSignUpM(!signUpM)
            document.addEventListener('click', callback)
            function callback(event) {
                if (event.target.closest('.gray-filter')) {
                    closeModal(value);
                    document.removeEventListener('click', callback)
                }
            }
            document.querySelector('.gray-filter').style.display = 'block'
            document.body.classList.add('modal-open')
        }
    }

    const closeModal = (value) => {
        switch (value) {
            case 'Sign up': {
                setSignUpM(false)
                document.body.classList.remove('modal-open')
                document.querySelector('.gray-filter').style.display = 'none'
            }
        }
    }

    const openModal = (className) => {

        if (className === 'anywhere') {
            var elHeader = document.querySelector('.header-container')
            if(!anywhereM)elHeader.style.borderBottom="none"
            else elHeader.style.borderBottom= '1px solid rgb(236,236,236)'
            setAnywhereM(!anywhereM)
        }
        window.addEventListener("wheel", callback)
        function callback(ev) {
            const direction_1 = ev.deltaY;
            if (direction_1 > 0){
                setAnywhereM(false)
                window.removeEventListener("wheel", callback)
            }
        }
    }

    return (
        <div>
            <header className='header-container'>

                <NavLink to='/'><img className="logo" src={logoPic} /></NavLink>

                <div className="header-nav">
                    <NavLink className="navlink" to='#' onClick={() => openModal('anywhere')}>Anywhere</NavLink>
                    <NavLink className="navlink" to='#'>Any week</NavLink>
                    <NavLink className="navlink" to='#' >Add guests</NavLink>
                    <div className="saerch-icon-container"><img className="saerch-icon" src={searchIcon} /></div>
                </div>

                <div className="user-panel-nav">
                    <NavLink className="user-panel-a" to='#'>Become a Host</NavLink>
                    <img className="world-icon" src={wordIcon} />
                    <div onClick={() => toggleSignModal()} className="user-container">
                        <img className="burger-icon" src={burgerIcon} />
                        <img className="user-icon" src={userIcon} />
                    </div>
                </div>

                {modalFlag && <SignModal toggleSignModal={toggleSignModal} />}
                {signUpM && <SignInModal closeModal={closeModal} />}

            </header>
            {anywhereM && <section><SubHeader /><Anywhere /></section>}

        </div>
    )
}





