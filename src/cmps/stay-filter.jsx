import { filterIcons } from "../storage/icon-storage"
import filterIcon from "../assets/imgs/Filter Icons/filterIcon.svg"
import React, { useState, useRef } from 'react'
import { PriceFilter } from './filters/filter'
import { useDispatch } from 'react-redux'
import { CheckboxRadio } from '../cmps/filters/check-box'
import { StayFilterButtons } from '../cmps/filters/buttons'
import { CheckboxesRadioEmenteties } from '../cmps/filters/amentities'
import { stayService } from "../services/stay.service"
import { setStay, setFilterBy, loadStay, resetFilter } from '../store/stay.action'
import { UtilService } from "../services/util.service"
import { getRandomId } from "@syncfusion/ej2-base"
import debounce from "lodash.debounce";
import _ from 'lodash'


export const StayFilter = ({ filterBy, stays }) => {

    const [isShown, setIsShown] = useState(true)
    const [modalFlag, setModalFlag] = useState(false)
    const [staysLength, setStayLength] = useState(360)
    const filterRef = useRef(0)

    const [range, setRange] = useState({ start: 0, end: 1500 })

    var key = 0
    const dispatch = useDispatch()

    const filterByTag = (tag) => {
        var filterBy = {}
        filterBy.type = tag
        dispatch(setFilterBy(filterBy))
        dispatch(loadStay())
        dispatch(resetFilter())
    }

    const onSetFilter = (ev) => {
        if (ev) ev.preventDefault()

        var filterBy = {}
        var amenteties = []
        //SET RANGE FILTER 
        let elStartRange = document.querySelector('.min-price-num').innerHTML
        let elEndRange = document.querySelector('.max-price-num').innerHTML
        const startRange = parseInt(elStartRange.substring(2, elStartRange.length))
        const endRange = parseInt(elEndRange.substring(2, elEndRange.length))
        const range = { start: startRange, end: endRange }
        filterBy.range = { start: range.start, end: range.end }

        const roomType = document.querySelectorAll('.sc-bczRLJ')
        for (var i = 0; i < roomType.length; i++) {
            if (roomType[1].checked) filterBy = { ...filterBy, roomType: roomType[1].nextSibling.data }
        }

        //SET CAPACITY TYPE FILTER 
        const capacity = document.querySelectorAll(".button-black")
        for (var i = 0; i < capacity.length; i++) {
            if (capacity[i].firstChild.data !== "Any" && i === 0) filterBy = { ...filterBy, capacity: parseInt(capacity[i].firstChild.data) }
            else if (capacity[i].firstChild.data !== "Any" && i === 1) filterBy = { ...filterBy, bedrooms: parseInt(capacity[i].firstChild.data) }
            else if (capacity[i].firstChild.data !== "Any" && i === 2) filterBy = { ...filterBy, bathrooms: parseInt(capacity[i].firstChild.data) }
        }
        //SET AMENITIES TYPE FILTER 
        const elAmenties = document.querySelectorAll(".sc-dkzDqf")
        for (var i = 0; i < elAmenties.length; i++) {
            if (elAmenties[i].checked) amenteties.push(elAmenties[i].nextSibling.data)
        }
        if (amenteties.length > 0) filterBy.amenteties = amenteties

        stayService.query(filterBy).then(stays => {
            document.querySelector(".show-homes").innerText = `Show ${stays.length} homes`
        })
        filterRef.current=filterBy
    }

    const aplayFilter = (ev) => {
        ev.preventDefault()
        dispatch(setFilterBy(filterRef.current))
        dispatch(loadStay())
        closeModal()

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
    if (!stays) return

    return (<div className={!filterBy ? "filter-tab" : "sticky-filter filter-tab "}>


        {/* //amentities Filter */}

        {!filterBy && <div className="filterSection">
            {filterIcons.map(img => {
                key++
                return (
                    <div className="filter-category" key={key++} onClick={() => filterByTag(img.text)}>
                        <img className="filter-icons" src={img.pic} />
                        <p className="filter-icons-text">{img.text}</p>
                    </div>)
            })}
        </div>}

        {/* //Big Filter */}

        <div className={filterBy ? "flex half-width align-items bold" : "flex"} style={{ fontSize: "14px" }}>
            {filterBy && <p className="black">{stays.length} homes</p>}
            <div className="filter-btn" onClick={() => openApp()}>
                <img className="filter-btn-img" src={filterIcon} />
                <h1 className="filter-btn-text" >Filters</h1 >
            </div>
        </div>

        {/* onSubmit={(event) => onSetFilter(event)} */}
        <form className="animate__animated animate__fadeInUpBig animate__fast filter-modal " style={{ display: isShown ? 'none' : 'flex' }}>

            <div className="title-sector"  >
                <button className="exit-btn"  onClick={() => closeModal()}>x</button>
                <h1 className="filter-header">Filters</h1>
            </div>
            <div className="modal-body-container">
                <div className="filter-modal-titles flex">
                    <h3 className="second-title" style={{margin:"20px 24px 5px 24px "}}>Price range</h3>
                    <h3 className="avg-price-title">The average nightly price is $216</h3>
                </div>

                {modalFlag &&
                    <div className="filter-price-contianer" >
                        {PriceFilter(closeModal, onSetFilter, setRange)}
                    </div>
                }
                <div className="stay-type-filter">
                    <h3 className="stay-type-title">
                        Type of place
                    </h3>
                    <div className="check-box-filter"><CheckboxRadio index={0} onSetFilter={onSetFilter} /></div>
                </div>

                <div className="rooms-beds-filter">
                    <h3 className="room-bed-title">
                        Rooms and beds
                    </h3>
                    <span className="bedrooms">Bedrooms</span>
                    <StayFilterButtons onSetFilter={onSetFilter} />
                    <span className="beds">Beds</span>
                    <StayFilterButtons onSetFilter={onSetFilter} />
                    <span className="bathrooms">Bathrooms</span>
                    <StayFilterButtons onSetFilter={onSetFilter} />
                </div>

                <div className="Property-type-filter">
                    <h3 className="Property-type-filter-title">Amentities
                    </h3>
                    <CheckboxesRadioEmenteties />
                </div>
            </div>
            <div className=" modal-footer">
                <button onClick={(event)=>aplayFilter(event)} className="show-homes go-right">Show {staysLength} homes</button>
            </div>
        </form>

    </div>
    )
}


