import { filterIcons } from "../storage/icon-storage"
import filterIcon from "../assets/imgs/Filter Icons/filterIcon.svg"
import React, { useState } from 'react'
import {PriceFilter} from './filter'
import { useDispatch } from 'react-redux'

export const StayFilter = ({ onSetFilter}) => {

    const [isShown, setIsShown] = useState(true)
    const [modalFlag, setModalFlag] = useState(false)

    var key = 0


    const dispatch = useDispatch()

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
            <div className="filter-modal-titles flex">
                <h3 className="second-title">Price range</h3>
                <h3 className="avg-price-title">The average nightly price is $216</h3>
            </div>
            
            {modalFlag && <div className="filter">{PriceFilter(closeModal) }</div>}
        </div>
    </div>
    )}


    