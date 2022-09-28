import goBackIcon from '../../assets/imgs/go-back-icon.png'
export const StepTwo = ({ setStep, setStayForm, stayForm }) => {
    const labels = ["Israel", "Italy", "Mexico", "Spain", "Turkey", "Thailand", "United State"]
    var key = 0
    const setForm = (ev) => {
        ev.preventDefault()
        const region = document.querySelector(".region-name").innerText
        const country = document.querySelector(".country-name").innerText
        const city = ev.target[2].value
        const address = ev.target[3].value
        const loc = { region, country, city, address, lat: 29.550020000000075, lng: 34.953050000000076 }
        
        setStayForm({ ...stayForm, loc: loc })
        setStep(3)
    }

    return (
        <form className="step-two" onSubmit={(event) => setForm(event)}>
            <img className='go-back' src={goBackIcon} style={{ width: "45px" }} onClick={() => setStep(1)} />
            <p className="title">Where's your place located?</p>

            <div className="flex-column">
                <p className="sub-title">Region</p>
                <select >
                    <option className="region-name" value="UK">
                        UK
                    </option>
                </select>
            </div>

            <div className="flex-column">
                <p className="sub-title" >Country</p>
                <select >
                    {labels.map(label => {
                        key++
                        return <option className="country-name" value={label} key={key}>
                            {label}
                        </option>
                    })}
                </select>
            </div>

            <div className="flex-column">
                <p className="sub-title">City</p>
                <input type="text" value="Galil" placeholder="Galil" />
            </div>

            <div className="flex-column">
                <p className="sub-title">Street Address</p>
                <input type="text" value="Dalton" placeholder="Dalton" />
            </div>

            <button className="next-btn" >Next</button>

        </form>

    )


}