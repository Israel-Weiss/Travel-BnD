import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { StayList } from '../cmps/stays/stay-list'
import { StayFilter } from '../cmps/stay-filter'
<<<<<<< HEAD
//import { loadStay, setFilterBy } from '../store/actions/stay.action'
import { stayService } from '../services/stay.service'
import { loadStay, setFilter,loadPage } from '../store/stay.action'
=======
import { loadStay, setFilter } from '../store/stay.action'
>>>>>>> dfecbed827974239b0d5a99b85e25a260b2eebea

export const StayApp = () => {

    const dispatch = useDispatch()
<<<<<<< HEAD
    const currentUrl = window.location.href
    const { stays } = useSelector(state => state.stayModule)

=======
    const { stays } = useSelector(state => state.stayModule)
>>>>>>> dfecbed827974239b0d5a99b85e25a260b2eebea

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