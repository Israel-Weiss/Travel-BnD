import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setOrder } from '../../store/order.action'
import { MyCal } from '../calendar'
import confirmPic from '../../assets/imgs/v.png'

export function ReserveModal({ stay }) {
    const dispatch = useDispatch()
    const loggedInUser = useSelector(state => state.userModule.loggedInUser)

    const [modalFlag, setModalFlag] = useState(false)
    const [reservedFlag, setreservedFlag] = useState(false)

    const [isShown, setIsShown] = useState(true)

    const handleClick = event => {
        setIsShown(current => !current)
    }

    const navigateTo = () => {
        setreservedFlag(true)
        const startDate= document.querySelector('.date-in').innerHTML
        const endDate= document.querySelector('.date-out').innerHTML
        dispatch(setOrder(stay, loggedInUser,startDate,endDate))

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

    if (!stay) return

    return (
        //First Modal
        <section>
            <div className="reserve-modal-container">
            <div className="calendar" style={{display: isShown ? 'none' : 'block'}}>{MyCal()}</div>
                <p className="price">${stay.price} <span>night</span></p>
                <div className="flex-coulmn">
                    <button className="checkBtn" onClick={handleClick}>
                        <div className="check-in">
                            <p className="title">CHECK-IN</p>
                            <p className="date-in">Add date</p>
                        </div>
                        <div className="check-out">
                            <p className="title">CHECKOUT</p>
                            <p className="date-out">Add date</p>
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
                <button className="availability-Btn" onClick={() => changeModal()}>Reserve</button>
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
                        <p className="text">{document.querySelector('.date-in').innerHTML} - {document.querySelector('.date-out').innerHTML}</p>
                        <div className='text-group'>
                            <p className="bold-text">Guests:</p>
                            <p className="text">{stay.capacity.guests}</p>
                        </div>
                        <div className='text-group'>
                            <p className="bold-text">Price Details</p>
                            <p className="text">${stay.price}</p>
                        </div>
                    </div>

                    <div className="order-pic">
                        <div className="card">
                            <img src={stay.imgUrls[0]} />
                            <p className="bold-text">{stay.name}</p>
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
