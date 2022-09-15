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

var picsleft = [
    { img: icon1, text: 'Park view' },
    { img: icon2, text: 'Kitchen' },
    { img: icon3, text: 'Free parking on premises' },
    { img: icon4, text: 'TV with standard cable' },
    { img: icon5, text: 'Carbon monoxide alarm' },
]


export const PlaceOffer = () => {

    return (
        <div className="place-offer">
            <h1 className="black fontSize-22 text-start bold">What this place offers</h1>
            <div className="place-offer-list">

                <div className="left">
                    {picsleft.map(pic => {
                        return (
                            <div className='flex margin-buttom-5'>
                                <img className='room-info-icons' src={pic.img} />
                                <p className='black margin-right-20'>{pic.text}</p>
                            </div>)
                    })}
                </div>
                
                <div className="right">
                {picsleft.map(pic => {
                        return (
                            <div className='flex margin-buttom-5'>
                                <img className='room-info-icons' src={pic.img} />
                                <p className='black margin-right-20'>{pic.text}</p>
                            </div>)
                    })}
                </div>

            </div>

        </div>
    )
}