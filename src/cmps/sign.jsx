
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from 'react'

export function SignModal({toggleSignModal}) {
    const fo = () => {
        alert("uuu")
    }
    const po= () => {
        alert("uusu")
    }

    return (
        <div className="sign-modal">
            <li><NavLink className="black text-start bold" to='#' onClick={()=>toggleSignModal('Sign up')}>Sign up</NavLink></li>
            <li><NavLink className="black text-start" to='#'>Log in</NavLink></li>
            <li><NavLink className="black text-start" to='#'></NavLink></li>
            <li><NavLink className="black text-start" to='#'>Host your home</NavLink></li>
            <li><NavLink className="black text-start" to='#'>Host an experience</NavLink></li>
            <li><NavLink className="black text-start" to='#'>help</NavLink></li>
        </div>
    )

}