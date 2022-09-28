
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { stayService } from '../services/stay.service'
import { setCurrentUrl } from '../store/stay.action'
import { addReviews } from '../store/stay.action'
import { useSelector } from 'react-redux'

//Child CMP
import { StayTitle } from '../cmps/stay-details/title'
import { StayGallery } from '../cmps/stay-details/gallery'
import { StayDescription } from '../cmps/stay-details/description'
import { StayReviews } from '../cmps/stay-details/reviews'
import { GoogleMap } from '../cmps/map'
import { resetFilter } from '../store/stay.action'

export const StayDetails = () => {
    const { loggedInUser } = useSelector(state => state.userModule)
    const dispatch = useDispatch()
    const [stay, setStay] = useState(null)
    const params = useParams()
    const currentUrl = window.location.href

    useEffect(() => {
        dispatch(setCurrentUrl(currentUrl))
        window.scrollTo(0, 0)
        loadStay()
    }, [params.id])


    useEffect(() => {
        dispatch(resetFilter(null))
    }, [])


    const loadStay = () => {
        const stayId = params.id
        stayService.getById(stayId).then(stay => {
            setStay(stay)
        })
    }

    const onAddReview = (ev) => {
        ev.preventDefault()
        const text = ev.target[1].value
        const review = {
            by: { fullname: loggedInUser.fullname, imgUrl: loggedInUser.imgUrl, id: loggedInUser._id },
            txt: text,
            rate: 1
        }
        stay.reviews.unshift(review)
        setStay({...stay})
        dispatch(addReviews(stay))
        ev.target[1].value=""
    }

    if (!stay) return

    return (
        <div className='room'>
            <StayTitle stay={stay} />
            <StayGallery stay={stay} />
            <StayDescription stay={stay} />
            <StayReviews stay={stay} onAddReview={onAddReview} />
            <p className='map-title'>Where you’ll be</p>
            <GoogleMap stays={[stay]} />
        </div>
    )
}