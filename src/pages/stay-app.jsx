import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { StayList } from '../cmps/stay-list'
import { StayFilter } from '../cmps/stay-filter'
import { loadStay, setFilterBy, setCurrentUrl, resetFilter } from '../store/stay.action'
import { AppFooter } from '../cmps/app-footer'
import { socketService, SOCKET_EVENT_STAY_ADDED } from '../services/socket.service.js'
import { GoogleMap } from '../cmps/map'
import { storageService } from '../services/async-storage.service'

export const StayApp = () => {
    const loadingGif = "https://res.cloudinary.com/dlnmbz1bt/image/upload/v1664367311/loading_ckzbbd.gif"
    const dispatch = useDispatch()
    const currentUrl = window.location.href
    const { stays } = useSelector(state => state.stayModule)
    const { filterBy } = useSelector(state => state.stayModule)



    useEffect(() => {
        document.querySelector(".loction-btn").click()
    }, [])


    useEffect(() => {
        dispatch(setCurrentUrl(currentUrl))
        const filterBy = storageService.getFilterFromStorage()
        //In case search was done from stay details 
        if (filterBy) {
            dispatch(setFilterBy(filterBy))
            dispatch(loadStay())
            sessionStorage.removeItem('filterBy');
        }
        else dispatch(loadStay())
    }, [currentUrl])

    useEffect(() => {
        socketService.on(SOCKET_EVENT_STAY_ADDED, ((stay) => {
            console.log(stay, "git form socket");
            dispatch(loadStay())
        }
        ))
    }, [])

    useEffect(() => {
        // Remove filter from state only on type filtering
        if (filterBy) {
            if (filterBy.type) dispatch(resetFilter(null))
        }
    }, [])

    const onSetFilter = (filterBy) => {
        dispatch(setFilterBy(filterBy))
        dispatch(loadStay())
    }

    const getLocation = () => {
        console.log("im got a click");
        navigator.geolocation.getCurrentPosition(
            function (position) {
                console.log(position)
                sessionStorage.setItem("location", JSON.stringify({ lat: position.coords.latitude, lng: position.coords.longitude }))
            }.bind(this),
            function (error) {
                sessionStorage.setItem("location", JSON.stringify({ lat:32.08 , lng:34.78  }))

            })

    }

    return (
        <section>
            <button className='loction-btn' onClick={() => getLocation()} style={{display:"none"}}></button>
            {!stays ? <img className='loading-gif' src={loadingGif} /> :
                <div className="flex-column">
                    {filterBy && <GoogleMap stays={stays} />}
                    <StayFilter onSetFilter={onSetFilter} filterBy={filterBy} stays={stays} />

                    <StayList stays={stays} filterBy={filterBy} />

                </div>}

            {!filterBy && < AppFooter />}
        </section>
    )
}