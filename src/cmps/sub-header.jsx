import searchIcon from "../assets/imgs/serachIcon.png"
import { setFilter } from "../store/stay.action"
import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { stayService } from "../services/stay.service"
import locationIcon from "../assets/imgs/loactionIcon.svg"

export function SubHeader({setAnywhereM}) {
    const dispatch = useDispatch()

    const [modalFlag, setModalFlag] = useState(false)
    const [locationZone, setLocationZone] = useState(false)




    const onSearch = (ev) => {
        ev.preventDefault()
        const text = ev.target[0].value
        dispatch(setFilter(null, text))
        setAnywhereM(false)
        document.querySelector('.dark-screen').style.display = 'none'

    }

    const onType = (ev) => {
        ev.preventDefault()
        const text = ev.target.value
        if (text === "") document.querySelector(".anywhere-modal").style.display = "block"
        else document.querySelector(".anywhere-modal").style.display = "none"
        setModalFlag(true)
        stayService.getLocalZones(text).then(zones => setLocationZone(zones))
    }

    const setValue = (value) => {
        document.querySelector(".search-bar-input").value = value
        setModalFlag(false)
        document.querySelector(".anywhere-modal").style.display = "block"
     
    }


    return (
        <div className="subheader-container">
            <form className="search-bar flex" onSubmit={(event) => onSearch(event)} >

                <ul>
                    <p className="title">Where</p>
                    <input className="search-bar-input" type="text" placeholder="Search destination" onChange={(event) => onType(event)} />
                </ul>
                <ul>
                    <div className="border-right">
                        <p className="title">Check in</p>
                        <p className="text">Add dates</p>
                    </div>
                </ul>
                <ul>
                    <p className="title">Check out</p>
                    <p className="text">Add dates</p>
                </ul>
                <ul>
                    <p className="title">Who</p>
                    <p className="text">Add guests</p>
                </ul>

                <button className="search-btn">
                    <img className="saerch-icon" src={searchIcon} />
                    <p className="btn-text">Search</p>
                </button>
            </form>
            {modalFlag && <div className="search-conatiner">
                {locationZone && locationZone.map(zone => {
                    return <div className="location-zone" onClick={() => setValue(zone)}>
                        <div className="locationIcon-contain"><img className="locationIcon" src={locationIcon} /></div>

                        <p className="zone">{zone}</p>
                    </div>
                })}

            </div>}
        </div>
    )
}