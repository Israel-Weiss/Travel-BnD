import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { StayList } from '../cmps/stays/stay-list'
import { StayFilter } from '../cmps/stay-filter'
//import { loadStay, setFilterBy } from '../store/actions/stay.action'
import { stayService } from '../services/stay.service'


export const StayApp = () => {

    //const stays = useSelector(state => state.stayModule)
    //const dispatch = useDispatch()

    const [stays, setStays] = useState(null)

    useEffect(() => {
        loadStay()
    }, [])

    const loadStay = () => {
        const stays = stayService.query()
        setStays(stays)
    }

    console.log('stays', stays);
    if (!stays) return

    return (
        <section>
            <StayFilter />
            <StayList stays={stays} />
        </section>
    )
}