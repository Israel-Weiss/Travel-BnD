import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { StayList } from '../cmps/stays/stay-list'
import { StayFilter } from '../cmps/stay-filter'
import { loadStay, setFilter } from '../store/stay.action'

export const StayApp = () => {
    const dispatch = useDispatch()
    const { stays } = useSelector(state => state.stayModule)

    useEffect(() => {
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