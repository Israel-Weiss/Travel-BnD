import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { StayList } from '../cmps/stay-list'
import { StayFilter } from '../cmps/stay-filter'
import { loadStay, setFilter, setCurrentUrl,  } from '../store/stay.action'
import { AppFooter } from '../cmps/app-footer'
import { socketService, SOCKET_EVENT_STAY_ADDED} from '../services/socket.service.js'

export const StayApp = () => {

    const dispatch = useDispatch()
    const currentUrl = window.location.href
    const { stays } = useSelector(state => state.stayModule)

    useEffect(() => {
        dispatch(setCurrentUrl(currentUrl))
        dispatch(loadStay())
    }, [currentUrl])

    useEffect(() => {
        socketService.on(SOCKET_EVENT_STAY_ADDED, ((stay) => {
            console.log(stay,"git form socket");
            dispatch(loadStay())
        }
        ))
    }, [])

    const onSetFilter = (tag) => {
        dispatch(setFilter(tag, null))
    }

    // const onChangeFilter = (filterBy) => {
    //     dispatch(setFilterBy(filterBy))
    //     dispatch(loadStay())
    // }


    if (!stays) return
    return (
        <section>
            <StayFilter onSetFilter={onSetFilter} />
            <StayList stays={stays} />
            < AppFooter/>
        </section>
    )
}