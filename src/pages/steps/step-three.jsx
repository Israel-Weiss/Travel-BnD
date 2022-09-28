import goBackIcon from '../../assets/imgs/go-back-icon.png' 
export const StepThree = ({ setStep, setStayForm, stayForm }) => {

    const amenities = [
        "TV",
        "Cable TV",
        "Internet",
        "Wifi",
        "Air conditioning",
        "Wheelchair accessible",
        "Pool",
        "Kitchen",
        "Free parking on premises",
        "Doorman",
        "Gym",
        "Elevator",
        "Hot tub",
        "Heating",
        "Family/kid friendly",
        "Suitable for events",
        "Washer",
        "Dryer",
        "Smoke detector",
        "Carbon monoxide detector",
        "First aid kit",
        "Safety card",
        "Fire extinguisher",
        "Essentials",
        "Shampoo",
        "24-hour check-in",
        "Hangers",
        "Hair dryer",
        "Iron",
        "Laptop friendly workspace",
        "Self check-in",
        "Building staff",
        "Private entrance",
        "Room-darkening shades",
        "Hot water",
        "Bed linens",
        "Extra pillows and blankets",
        "Ethernet connection",
        "Luggage dropoff allowed",
        "Long term stays allowed",
        "Ground floor access",
        "Wide hallway clearance",
        "Step-free access",
        "Wide doorway",
        "Flat path to front door",
        "Well-lit path to entrance",
        "Disabled parking spot",
        "Step-free access",
        "Wide doorway",
        "Wide clearance to bed",
        "Step-free access",
        "Wide doorway",
        "Step-free access",
        "Wide entryway",
        "Waterfront",
        "Beachfront"
    ]


    const setForm = (ev) => {
        ev.preventDefault()
        let amenities=[]
        const checkBoxs = document.querySelectorAll('.checkbox')
        for(var i=0;i<checkBoxs.length;i++){
            if(checkBoxs[i].checked)amenities.push(checkBoxs[i].name);
        }
        setStayForm({...stayForm,amenities: amenities})
        setStep(4)
    }


    return (
        <form className="step-three" onSubmit={(event) => setForm(event)}>
                <img className='go-back' src={goBackIcon} style={{ width: "45px" }} onClick={()=> setStep(2)} />
            <p className="title black bold">What amenities do you offer?</p>
            <form className="amenitie-list">
                {amenities.map(amenitie => {
                    return (<div className="checklist flex" key={{ amenitie }}>
                        <input className="checkbox" type="checkbox" id={amenitie} name={amenitie} value={amenitie} />
                        <label className="black" for={amenitie}> {amenitie}</label>
                    </div>)
                })}
            </form>
            <button className="next-btn" >Next</button>

        </form>

    )


}