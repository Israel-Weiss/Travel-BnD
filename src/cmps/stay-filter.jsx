import { filterIcons } from "../storage/icon-storage"
import filterIcon from "../assets/imgs/Filter Icons/filterIcon.svg"
import React, { useState } from 'react'
import {PriceFilter} from './filters/filter'
import { useDispatch } from 'react-redux'
import { CheckboxRadio } from '../cmps/filters/check-box'
import { StayFilterButtons } from '../cmps/filters/buttons'
import { CheckboxesRadioEmenteties } from '../cmps/filters/amentities'
import { stayService } from "../services/stay.service"
import { setStay } from '../store/stay.action'


export const StayFilter = ({}) => {

    const staysLength = 360

    stayService.query().then(stays => {
        staysLength = stays.length
    })

    const [isShown, setIsShown] = useState(true)
    const [modalFlag, setModalFlag] = useState(false)

    var key = 0
    const dispatch = useDispatch()

    const onSetFilter = () => {
        let elStartRange = document.querySelector('.min-price-num').innerHTML
        let elEndRange = document.querySelector('.max-price-num').innerHTML
        const startRange = parseInt(elStartRange.substring(2, elStartRange.length))
        const endRange = parseInt(elEndRange.substring(2, elEndRange.length))
        const range = { start: startRange, end: endRange }
        stayService.query(null, null, range).then(
          stays =>{ dispatch(setStay(stays))
            closeModal()
        }  )
    
    
      }

    


    const closeModal = () => {
        setIsShown(current => !current)
        document.querySelector('.dark-screen').style.display = 'none'
        document.querySelector('.filter-modal').style.display = 'none'
        setModalFlag(false)
    }

    const openApp = () => {
        setModalFlag(true)
        setIsShown(current => !current)
        document.querySelector('.dark-screen').style.display = 'block'
        document.querySelector('.filter-modal').style.display = 'flex'
    }

    return (<div className="filter-tab">
        <div className="filterSection">
            {filterIcons.map(img => {
                key++
                return (
                    <div className="filter-category" key={key++} onClick={() => onSetFilter(img.text)}>
                        <img className="filter-icons"  src={img.pic} />
                        <p className="filter-icons-text">{img.text}</p>
                    </div>)
            })}
        </div>
        <div className="filter-btn" onClick={() => openApp()}>
            <img className="filter-btn-img" src={filterIcon} />
            <h1 className="filter-btn-text">Filters</h1>
        </div>
        <div className="filter-modal" style={{display: isShown ? 'none' : 'flex'}}>
        <div className="title-sector"  >
                <button className="exit-btn" onClick={() => closeModal()}>x</button>   
                <h1 className="filter-header">Filters</h1>
            </div>
            <div className="modal-body-container">
            <div className="filter-modal-titles flex">
                <h3 className="second-title">Price range</h3>
                <h3 className="avg-price-title">The average nightly price is $216</h3>
            </div>
            
            {modalFlag &&
                <div className="filter-price-contianer" >
                    {PriceFilter(closeModal)}
            </div>
            }
            <div className="stay-type-filter">
                <h3 className="stay-type-title">
                    Type of place
                </h3>
                <div className="check-box-filter"><CheckboxRadio index={0}/></div>
            </div>

            <div className="rooms-beds-filter">
                <h3 className="room-bed-title">
                    Rooms and beds
                </h3>
                <span className="bedrooms">Bedrooms</span>
                <StayFilterButtons/>
                <span className="beds">Beds</span>
                <StayFilterButtons/>
                <span className="bathrooms">Bathrooms</span>
                <StayFilterButtons/>
            </div>
            
            <div className="Property-type-filter">
            <h3 className="Property-type-filter-title">Amentities
</h3>
            <CheckboxesRadioEmenteties/>
            </div>
            </div>
            <div className=" modal-footer">
            <div className="show-homes" onClick={() => onSetFilter()}>Show {staysLength} homes</div>
            </div>
        </div>
    </div>
    )}


    