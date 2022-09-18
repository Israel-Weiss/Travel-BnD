import icon1 from '../../assets/imgs/house/place-offer/1.svg'
import icon2 from '../../assets/imgs/house/place-offer/2.svg'
import icon3 from '../../assets/imgs/house/place-offer/3.svg'
import icon4 from '../../assets/imgs/house/place-offer/4.svg'
import icon5 from '../../assets/imgs/house/place-offer/5.svg'
import icon6 from '../../assets/imgs/house/place-offer/6.svg'
import icon7 from '../../assets/imgs/house/place-offer/7.svg'
import icon8 from '../../assets/imgs/house/place-offer/8.svg'
import icon9 from '../../assets/imgs/house/place-offer/9.svg'
import icon10 from '../../assets/imgs/house/place-offer/10.svg'

import { stayService } from '../../services/stay.service'


export const PlaceOffer = ({ stay }) => {
    var picright = []
    var picleft2 = []
    const amenities = stay.amenities
    const icon = stayService.mapIcon(amenities)
    var key =200
    return (
        <div className="place-offer">
            <h1 className="black fontSize-22 text-start bold">What this place offers</h1>
            <div className="place-offer-list">

                <div className="left">
                    {icon[0].map(pic => {
                        return (
                            <div className='flex margin-buttom-5' key={key++}>
                                <img className='room-info-icons' src={pic.img} />
                                <p className='black margin-right-20'>{pic.text}</p>
                            </div>)
                    })}
                </div>

                <div className="right">
                    {icon[1].map(pic => {
                        return (
                            <div className='flex margin-buttom-5'key={key++}>
                                <img className='room-info-icons' src={pic.img} />
                                <p className='black margin-right-20'>{pic.text}</p>
                            </div>)
                    })}
                </div>

            </div>

        </div>
    )
}