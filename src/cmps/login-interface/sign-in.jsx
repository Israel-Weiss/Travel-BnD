

export function SignInModal({closeModal}) {

    return (
        <div className="signUp-modal">
            <div className="title-sector flex"  >
                <button className="exit-btn" onClick={()=>closeModal('Sign up')}>x</button>
                <p className="title black bold">Log in or sign up</p>
            </div>
            <div className="sign-up-layout">

                <h1 className="header black text-start">Welcome to Airbnb</h1>

                <select className="signUp-select" name="" id="">
                    <option className="signUp-option" value="United States">United States (+1)</option>
                    <option className="signUp-option" value="Israel (+972)">Israel (+972)</option>
                </select>
                <input className="signUp-input" type="text" />
                <p className="text text-start black">We’ll call or text you to confirm your number. Standard message and data rates apply. Privacy Policy</p>
                <button className="continue-btn">Continue</button>

            </div>
        </div>
    )

}