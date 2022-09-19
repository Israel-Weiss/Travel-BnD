import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { StayList } from '../cmps/stays/stay-list'

import { StayFilter } from '../cmps/stay-filter'
//import { loadStay, setFilterBy } from '../store/actions/stay.action'
import { stayService } from '../services/stay.service'
import { loadStay, setFilter,loadPage } from '../store/stay.action'

export const StayApp = () => {

    const dispatch = useDispatch()
    const currentUrl = window.location.href
    const { stays } = useSelector(state => state.stayModule)


    useEffect(() => {
        dispatch(loadPage(currentUrl))
        dispatch(loadStay())
    }, [])

    const onSetFilter = (tag) => {
        dispatch(setFilter(tag, null))
    }

    if (!stays) return
    return (
        <section>
            <StayFilter onSetFilter={onSetFilter} />
            <StayList stays={stays} />
        </section>
    )
}