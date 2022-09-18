import { useEffect } from 'react'
// import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { StayList } from '../cmps/stays/stay-list'

import { StayFilter } from '../cmps/stay-filter'
import { loadStay } from '../store/stay.action'
// import { stayService } from '../services/stay.service'


// export const StayApp = () => {

//     const [stays, setStays] = useState(null)

//     useEffect(() => {
//         loadStay()
//     }, [])

//     const loadStay = () => {
//         const stays = stayService.query().then(stays => { setStays(stays) })
//     }

//     const onSetFilter = (tag) => {
//         stayService.query(tag).then(stays => { setStays(stays) })
//     }

//     if (!stays) return
//     return (
//         <section>
//             <StayFilter onSetFilter={onSetFilter} />
//             <StayList stays={stays} />
//         </section>
//     )
// }

export const StayApp = () => {
    const stays = useSelector(state => state.stayModule.stays)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadStay())
    }, [])

    const onSetFilter = (tag) => {
        dispatch(loadStay(tag))
    }

    if (!stays) return
    return (
        <section>
            <StayFilter onSetFilter={onSetFilter} />
            <StayList stays={stays} />
        </section>
    )
}