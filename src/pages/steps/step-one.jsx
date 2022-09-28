
export const StepOne = ({ setStep, setStayForm, stayForm }) => {

    const labels = [{ name: "Guesst", className: "guests-count" },
    { name: "Beds", className: "bedrooms-count" },
    { name: "Bathrooms", className: "bathrooms-count" }]

    const setForm = (ev) => {
        ev.preventDefault()
        const name = ev.target[0].value
        const price = ev.target[1].value
        console.log(name, price, "vlalallal");
        const guests = document.querySelector(".guests-count").innerText
        const bedrooms = document.querySelector(".bedrooms-count").innerText
        const bathrooms = document.querySelector(".bathrooms-count").innerText
        const capacity = { guests, bedrooms, bathrooms, name, price }

        setStayForm({ ...stayForm, capcity: capacity })
        setStep(2)
    }

    const changeValue = (className, operator) => {
        var element = document.querySelector(`.${className}`)
        var elementInt = parseInt(element.innerText)
        if (operator === "+") element.innerText = elementInt + 1
        else {
            if (elementInt < 1) return
            else element.innerText = elementInt - 1
        }
    }

    return (
        <form className="step-one" onSubmit={(event) => setForm(event)}>
            <p className="title">Stay name</p>
            <input type="text" value="Or Golan" placeholder="Or Golan" />
            <p className="title">Price per night</p>
            <input type="text" value="400" placeholder="400" />

            <p className="title">Room info</p>
            <div className="guests-section">
                {labels.map(label => {
                    return <div className="flex space-between align-items" key={label.name}>
                        <p>{label.name}</p>
                        <div className="flex align-items">
                            <div className="operator-btn" onClick={() => changeValue(label.className, "-")}><p>-</p></div>
                            <p className={label.className}>2</p>
                            <div className="operator-btn" onClick={() => changeValue(label.className, "+")}><p>+</p></div>
                        </div>
                    </div>
                })}


                <div className="flex align-items " style={{ gap: "10px" }}>
                    <p className="balck">Type</p>

                    <select >
                        <option value="">
                            Entire home
                        </option>
                    </select>
                </div>
            </div>
            <button className="next-btn" >Next</button>
        </form>
    )


}