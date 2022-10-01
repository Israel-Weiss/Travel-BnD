import { useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setOrder } from '../../store/order.action'
import { MyCal } from '../calendar'
import confirmPic from '../../assets/imgs/v.png'
import { stayService } from '../../services/stay.service'
import { UtilService } from '../../services/util.service'
import starIcon from '../../assets/imgs/starIcon.svg'
import $ from 'jquery'


export function ReserveModal({ stay }) {
    const dispatch = useDispatch()
    const loggedInUser = useSelector(state => state.userModule.loggedInUser)
    const guestsModal = useRef(true)
    const [modalFlag, setModalFlag] = useState(false)
    const [reservedFlag, setreservedFlag] = useState(false)
    const rate = stayService.calcRate(stay.reviews)
    const price = stay.price
    const reviewsCount = stay.reviews.length
    const [isShown, setIsShown] = useState(true)
    const [nightCount, setNightCount] = useState(1)
    const [startDate, setStartDate] = useState("")
    const [endDate, setEndDate] = useState("")



    const handleClick = event => {
        setIsShown(current => !current)
    }

    const navigateTo = () => {
        const stayImg = stay.imgUrls[0]
        setreservedFlag(true)
        dispatch(setOrder(stay, loggedInUser, startDate, endDate, nightCount, stayImg))

        setTimeout(() => {
            window.location.href = "#/my-trip";
        }, 1000)

    }

    const changeModal = () => {
        $('.dark-screen-reserve-modal').css({ "display": 'block' })
        $('.reserve-modal-container').css({ "display": 'none' })
        setreservedFlag(false)
        setModalFlag(true)
    }

    const closeModal = () => {
        $('.dark-screen-reserve-modal').css({ "display": 'none' })
        $('.reserve-modal-container').css({ "display": 'flex' })
        setModalFlag(false)
    }

    const toggleModal = () => {
        guestsModal.current = !guestsModal.current
        if (guestsModal.current) $('.select-modal').css({ "display": "none" })
        else $('.select-modal').css({ "display": "block" })
    }

    const changeValue = (className, ev) => {
        ev.preventDefault()
        var operator = ev.target.innerHTML
        var plusButton = ev.target.parentElement.lastChild
        var minusButton = ev.target.parentElement.firstChild

        var element = $(`.${className}`)
        var elementValue = parseInt(element.html())
        var guestCount = $(".guests-count span")
        var guestCountValue = parseInt(guestCount.html().charAt(0))

        console.log(elementValue);

        if ((guestCountValue + 1) >= stay.capacity.guests) plusButton.classList.add("low-opacity")
        else plusButton.classList.remove("low-opacity")
        if (elementValue - 1 === 0) minusButton.classList.add("low-opacity")
        else minusButton.classList.remove("low-opacity")


        if (operator === "+") {
            if ((guestCountValue) < stay.capacity.guests) {
                element.html(elementValue + 1)
                guestCount.html(guestCountValue + 1 + " guests")
            }
        }
        else {
            if (elementValue > 0) {
                element.html(elementValue - 1)
                guestCount.html(guestCountValue - 1 + " guests")
            }
        }
    }


    const button = document.querySelector('.availability-Btn')
    if (button) {
        button.addEventListener('mousemove', e => {
            const rect = button.getBoundingClientRect();
            const x = (e.clientX - rect.left) * 150 / button.clientWidth
            const y = (e.clientY - rect.top) * 100 / button.clientHeight
            button.style.setProperty('--x', x);
            button.style.setProperty('--y', y, "!important");
        })
    }

    if (!stay) return

    return (
        //First Modal
        <section>
            <div className='dark-screen-reserve-modal' onClick={() => closeModal()}></div>
            <div className="reserve-modal-container">
                <div className="calendar" style={{ display: isShown ? 'none' : 'block' }}>{MyCal(setNightCount, setStartDate, setEndDate)}</div>

                <div className="space-between align-items flex full-width header" style={{ display: "flex" }}>

                    <div className="flex-column">
                        <p className="price Montserrat">${price} <span>night</span></p>
                        <p className="phone-only">Oct {startDate.substring(0, 2)} - {endDate.substring(0, 2)}</p>
                    </div>

                    <div className="flex" >
                        <img className='starIcon' src={starIcon} />
                        <p className='text-bold' >{rate} ·  <span >{'\u00A0'}{reviewsCount}  reviews</span></p>
                    </div>
                </div>

                <div className="flex-coulmn">
                    <button className="checkBtn" onClick={handleClick}>
                        <div className="check-in">
                            <p className="title">CHECK-IN</p>
                            <p className="date-in">{startDate}</p>
                        </div>
                        <div className="check-out">
                            <p className="title">CHECKOUT</p>
                            <p className="date-out">{endDate}</p>
                        </div>
                    </button>
                    <div className="select" onClick={() => toggleModal()}>

                        <p className='guests-count'>GUESTS <br /> <span>1 guests</span></p>







                        {/* <select> */}
                        {/* <option value="Adults">Adults</option>
                            <option value="Children">Children</option> */}
                        {/* </select> */}
                        {/* <div className="arrow" ></div> */}
                    </div>
                    <div className="select-modal">
                        <div className="flex  select-modal-label">
                            <p className='bold Montserrat'>Adults <br /> <span className='unbold'>Age 13+</span></p>
                            <div className="flex align-items">
                                <div className="operator low-opacity" onClick={(event) => changeValue("adults", event)}>−</div>
                                <div className="operator adults">1</div>
                                <div className="operator" onClick={(event) => changeValue("adults", event)}>+</div>
                            </div>
                        </div>
                        <div className="flex  select-modal-label">
                            <p className='bold Montserrat'>Children <br /> <span className='unbold'>Ages 2–12</span></p>
                            <div className="flex align-items">
                                <div className="operator low-opacity" onClick={(event) => changeValue("children", event)}>−</div>
                                <div className="operator children">0</div>
                                <div className="operator" onClick={(event) => changeValue("children", event)}>+</div>
                            </div>
                        </div>
                        <div className="flex  select-modal-label" style={{ marginBottom: "20px" }}>
                            <p className='bold Montserrat'>Pets <br /> <span className='unbold'>Bringing a service animal?</span></p>
                            <div className="flex align-items">
                                <div className="operator low-opacity" onClick={(event) => changeValue("pets", event)} >−</div>
                                <div className="operator pets">0</div>
                                <div className="operator" onClick={(event) => changeValue("pets", event)}>+</div>
                            </div>
                        </div>
                        <p className='terms-of-use'>This place has a maximum of 2 guests, not including infants. If you're bringing more than 2 pets, please let your host know.</p>

                    </div>

                </div>
                <button className="availability-Btn" onClick={() => changeModal()}> <span>Reserve</span> </button>
                <p className='text text-center' style={{ fontSize: "14px", color: "#4c4c4c" }}>You won't be charged yet</p>

                <p className='text-price'>${price} x {nightCount} nights <span>${UtilService.calcSum(price, nightCount)}</span></p>
                <p className='text-price'>Service fee <span>$0</span></p>
                <p className='text-price Montserrat ' style={{ color: "black" }}>Total <span>${UtilService.calcSum(price, nightCount)}</span></p>

            </div>
            {/* Second Modal */}
            {modalFlag && <div className="reserve-modal-confirm-container">
                {!reservedFlag ? <p className="header">One last step</p> :
                    <section className='align-items flex {'>
                        <img className='icon' src={confirmPic} />
                        <p className="header">Reserved successfully</p>
                    </section>}
                <p className="text-title">Dear Guest, <br />
                    In order to complete your reservation, please confirm your trip details.</p>

                <div className="order-section">
                    <div className="order-info">
                        <p className="bold-text">Reservation details</p>
                        <p className="bold-text">Trip dates:</p>
                        <p className="text">{document.querySelector('.date-in').innerHTML} <br />   {document.querySelector('.date-out').innerHTML}</p>
                        <div className='text-group'>
                            <p className="bold-text">Nights: </p>
                            <p className="text">{nightCount}</p>
                        </div>
                        <div className='text-group'>
                            <p className="bold-text">Price Details</p>
                            <p className="text">${UtilService.calcSum(price, nightCount)}</p>
                        </div>
                    </div>

                    <div className="order-pic">
                        <div className="card">
                            <img src={stay.imgUrls[0]} />

                            {stay.name.length > 30 ? <p className="bold-text">{stay.name.substring(0, 30)}</p> :
                                <p className="bold-text">{stay.name}</p>
                            }
                        </div>
                    </div>
                </div>

                <div className="button-section">
                    {!reservedFlag ? <section><button onClick={() => closeModal('Back')}>Back</button>
                        <button onClick={() => navigateTo()}>confirm</button></section>
                        : <button onClick={() => closeModal('Back')}>close</button>}
                </div>
            </div>}
        </section>
    )
}