import { useState } from 'react'
import  { useEffect } from "react";
import vPic from '../../assets/imgs/v.png'
import { orderService } from '../../services/order.service';
import { useDispatch, useSelector } from 'react-redux'
import { setOrder } from '../../store/order.action';
import { storageService } from '../../services/async-storage.service';
import { setUser } from '../../store/user.action';

export function ReserveModal({ stay }) {
    const dispatch = useDispatch()
    const loggedInUser = useSelector(state => state.userModule.loggedInUser)

    const [modalFlag, setModalFlag] = useState(false)
    const [reservedFlag, setreservedFlag] = useState(false)


    const navigateTo=()=>{
        setreservedFlag(true)
        dispatch( setOrder(stay,loggedInUser))

        setTimeout(()=>{
            window.location.href = "index.html/#/my-trip";
        },1000)

    }
     
    const changeModal=()=>{

        const user = storageService.getLogedInUser()
        if(!user){var ghostUser ={username:"Ghost",password:"0000"}
        dispatch( setUser(ghostUser))
    }

        document.querySelector('.gray-filter').style.display='block'
        document.querySelector('.reserve-modal-container').style.display='none'
        setreservedFlag(false)
        setModalFlag(true)
    }

    const closeModal=(mode)=>{
        document.querySelector('.gray-filter').style.display='none'
        document.querySelector('.reserve-modal-container').style.display='flex'
        setModalFlag(false)
    }




    if (!stay) return

    return (
        <section>

            <div className="reserve-modal-container">
                <p className="price">${stay.price} <span>night</span></p>
                <div className="flex-coulmn">
                    <button className="checkBtn">
                        <div className="check-in">
                            <p className="title">CHECK-IN</p>
                            <p className="date">Add date</p>
                        </div>
                        <div className="check-out">
                            <p className="title">CHECKOUT</p>
                            <p className="date">Add date</p>
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
                <button className="availability-Btn" onClick={()=>changeModal()}>Check availability</button>
            </div>

            {modalFlag&&<div className="reserve-modal-confirm-container">
                {!reservedFlag?<p className="header">One last step</p>:
                <section className='align-items flex {'>
                    <img className='icon' src={vPic} />
                <p className="header">Reserved successfully</p>
                </section>}

                <p className="text">Dear Guest, <br />
                    In order to complete your reservation, please confirm your trip details.</p>

                <div className="flex">
                    <div className="order-info">
                        <p className="bold-text">Reservation details</p>
                        <p className="bold-text">Trip dates:</p>
                        <p className="text">21/09/22 - 24/09/22</p>
                        <p className="bold-text">Guests:</p>
                        <p className="text">{stay.capacity.guests}</p>
                        <p className="bold-text">Price Details</p>
                        <p className="text">${stay.price}</p>
                    </div>

                    <div className="order-pic">
                        <div className="card">
                            <img src={stay.imgUrls[0]} />
                            <p className="bold-text">{stay.name},{stay.loc.country}</p>
                        </div>
                    </div>
                </div>
            

                <div className="button-section">
                    {!reservedFlag? <section><button onClick={()=>closeModal('Back')}>Back</button>
                    <button onClick={()=>navigateTo()}>confirm</button></section>
                    :<button onClick={()=>closeModal('Back')}>close</button>}
                </div>

            </div>}


        </section>
    )
}
