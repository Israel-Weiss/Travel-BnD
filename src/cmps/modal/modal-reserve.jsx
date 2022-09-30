import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setOrder } from '../../store/order.action'
import { MyCal } from '../calendar'
import { MyCalendar } from '../calendar2'
import confirmPic from '../../assets/imgs/v.png'
import { useEffect } from 'react'
import { stayService } from '../../services/stay.service'
import { UtilService } from '../../services/util.service'
import starIcon from '../../assets/imgs/starIcon.svg'
import { parse } from 'date-fns'

export function ReserveModal({ stay }) {
    const dispatch = useDispatch()
    const loggedInUser = useSelector(state => state.userModule.loggedInUser)

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
            window.location.href = "index.html/#/my-trip";
        }, 1000)

    }

    const changeModal = () => {
        document.querySelector('.dark-screen').style.display = 'block'
        document.querySelector('.reserve-modal-container').style.display = 'none'
        setreservedFlag(false)
        setModalFlag(true)
    }

    const closeModal = () => {
        document.querySelector('.dark-screen').style.display = 'none'
        document.querySelector('.reserve-modal-container').style.display = 'flex'
        setModalFlag(false)
    }

    const button = document.querySelector('.availability-Btn')
    if(button){
    button.addEventListener('mousemove', e => {
      const rect = button.getBoundingClientRect();
      const x = (e.clientX - rect.left) * 150 / button.clientWidth
      const y = (e.clientY - rect.top) * 100 / button.clientHeight


      button.style.setProperty('--x', x);

      button.style.setProperty('--y', y,"!important");
    })
}



    if (!stay) return

    return (
        //First Modal
        <section>
            <div className="reserve-modal-container">
            <div className="calendar" style={{ display: isShown ? 'none' : 'block' }}>{MyCal(setNightCount,setStartDate,setEndDate)}</div>

                <div className="space-between align-items flex full-width header"style={{display:"flex"}}>

                    <div className="flex-column">
                        <p className="price">${price} <span>night</span></p>
                        <p className="phone-only">Oct {startDate.substring(0, 2)} - {endDate.substring(0, 2)}</p>
                    </div>
                    
                    <div className="flex">
                        <img className='starIcon' src={starIcon} />
                        <p className='text-bold'>{rate}· <span>{reviewsCount} reviews</span></p>
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
                    <div className="select">
                        <select>
                            <option value="Adults">Adults</option>
                            <option value="Children">Children</option>
                        </select>
                        <div className="arrow" ></div>
                    </div>
                </div>
                <button className="availability-Btn" onClick={() => changeModal()}> <span>Reserve</span> </button>
                <p className='text text-center' style={{ fontSize: "14px", color: "#4c4c4c" }}>You won't be charged yet</p>

                <p className='text-price'>${price} x {nightCount} nights <span>${UtilService.calcSum(price, nightCount)}</span></p>
                <p className='text-price'>Service fee <span>$0</span></p>
                <p className='text-price'>Total <span>${UtilService.calcSum(price, nightCount)}</span></p>

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