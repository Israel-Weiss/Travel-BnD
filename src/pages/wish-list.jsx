import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'



import { StayList } from '../cmps/stays/stay-list'
export function Wishlist() {

    const {stays}=  useSelector(state => state.stayModule)
    const [filteredStays, setfilteredStays] = useState(null)


if(!filteredStays)
    // useEffect(() => {
        
    // }, [])

    return <StayList stays={filteredStays} />
}