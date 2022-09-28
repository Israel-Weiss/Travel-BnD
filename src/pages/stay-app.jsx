import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { StayList } from '../cmps/stay-list'
import { StayFilter } from '../cmps/stay-filter'
import { loadStay, setFilterBy, setCurrentUrl,resetFilter } from '../store/stay.action'
import { AppFooter } from '../cmps/app-footer'
import { socketService, SOCKET_EVENT_STAY_ADDED } from '../services/socket.service.js'
import { useState } from 'react'
import { GoogleMap } from '../cmps/map'
export const StayApp = () => {

    const dispatch = useDispatch()
    const currentUrl = window.location.href
    const { stays } = useSelector(state => state.stayModule)
    const { filterBy } = useSelector(state => state.stayModule)

    console.log("filter by by by ",filterBy);
    // const [explorerMode, setExplorerMode] = useState(false)

    useEffect(() => {
        dispatch(setCurrentUrl(currentUrl))
        dispatch(loadStay())
    }, [currentUrl])

    useEffect(() => {
        socketService.on(SOCKET_EVENT_STAY_ADDED, ((stay) => {
            console.log(stay, "git form socket");
            dispatch(loadStay())
        }
        ))
    }, [])

    useEffect(() => {
        dispatch(resetFilter(null))
    }, [])

    const onSetFilter = (filterBy) => {
        dispatch(setFilterBy(filterBy))
        dispatch(loadStay())
    }



    if (!stays) return
    return (
        <section>
            <div className="flex-column">
                {filterBy && <GoogleMap stays={stays} />}
                <StayFilter onSetFilter={onSetFilter} filterBy={filterBy} stays={stays} />

                <StayList stays={stays} filterBy={filterBy} />

            </div>

            < AppFooter />
        </section>
    )
}