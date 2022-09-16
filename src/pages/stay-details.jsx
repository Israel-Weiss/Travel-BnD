import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { stayService } from '../services/stay.service'
import { Link, useNavigate, useParams } from 'react-router-dom'


//child cmp
import { PlaceOffer } from '../cmps/stays/stay-details-reserve'
import { RoomInfo } from '../cmps/stays/stay-details-title'
import { RoomImages } from '../cmps/stays/stay-details-img'
import { RoomDatails } from '../cmps/stays/stay-details-secondary'
import { ReserveModal } from '../cmps/modal/modal-reserve'


export const StayDetails = () => {

    const [stay, setStay] = useState(null)
    const params = useParams()

    useEffect(() => {
        loadStay()
    }, [params.id])

    const loadStay = () => {
        const stayId = params.id
        stayService.getById(stayId).then(stay => {
            console.log("return stay",stay);
            setStay(stay)
        })
    }

if(!stay)return


    return (
        <div className='room'>
            <RoomInfo stay={stay} />
            <RoomImages stay={stay} />
    

            <RoomDatails stay={stay} />
            <PlaceOffer stay={stay} />
        </div>
    )
}