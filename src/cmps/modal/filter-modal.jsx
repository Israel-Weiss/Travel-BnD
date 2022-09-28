import React, { useState } from 'react'
import { stayService } from '../../services/stay.service'
import { useEffect } from 'react'
import Rheostat from 'rheostat'

export const FilterModal = ({ closeModal }) => {
    var [stays, setStays] = useState(false)

    useEffect(() => {
        loadStays()
    })

    const loadStays = () => {
        stayService.query().then(stays => {
            setStays(stays)
        })
    }


    return (<div className="wishlist-modal">

        <div className="header">
            <button className='exitBtn' onClick={() => closeModal()}>x</button >
            <p className='title'>Filters</p>
            <Rheostat min={1}
            max={100}
            values={[1, 100]}
            />
        </div>
        
            
    </div>
    )
}