
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { stayService } from '../services/stay.service'
import { setCurrentUrl } from '../store/stay.action'

//Child CMP
import { StayTitle } from '../cmps/stay-details/title'
import { StayGallery } from '../cmps/stay-details/gallery'
import { StayDescription } from '../cmps/stay-details/description'
import { StayReviews } from '../cmps/stay-details/reviews'
import { GoogleMap } from '../cmps/map'

export const StayDetails = () => {
    const dispatch = useDispatch()
    const [stay, setStay] = useState(null)
    const params = useParams()
    const currentUrl = window.location.href

    useEffect(() => {
        dispatch(setCurrentUrl(currentUrl))
        window.scrollTo(0, 0)
        loadStay()
    }, [params.id])

    const loadStay = () => {
        const stayId = params.id
        stayService.getById(stayId).then(stay => {
            setStay(stay)
        })
    }

    if (!stay) return


    return (
        <div className='room'>
            <StayTitle stay={stay} />
            <StayGallery stay={stay} />
                <StayDescription stay={stay} />
            <StayReviews stay={stay} />
            <p className='map-title'>Where you’ll be</p>
            <GoogleMap stay={stay} />
        </div>
    )
}