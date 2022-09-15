import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { StayList } from '../cmps/stays/stay-list'
import { StayFilter } from '../cmps/stay-filter.jsx'
//import { loadStay, setFilterBy } from '../store/actions/stay.action'
import { stayService } from '../services/stay.service'


export const StayApp = () => {

    const [stays, setStays] = useState(null)

    useEffect(() => {
        loadStay()
    }, [])

    const loadStay = () => {
        const stays = stayService.query().then(stays=>{setStays(stays)})
        
    }

    const onSetFilter=(tag)=>{
        stayService.query(tag).then(stays=>{setStays(stays)} )
    }

    if (!stays) return
    return (
        <section>
            <StayFilter onSetFilter={onSetFilter} />
            <StayList stays={stays} />
        </section>
    )
}