import icon1 from '../../assets/imgs/room-info/designedBy-Icon.svg'
import icon2 from '../../assets/imgs/room-info/featured-icon.svg'
import icon3 from '../../assets/imgs/room-info/cancellation-Icon.svg'
import { ReserveModal } from '../../cmps/modal/modal-reserve'



export const RoomDatails = ({ stay }) => {
    if (!stay) return
    const { guests, bedrooms, beds, baths } = stay.capacity
    const { fullname } = stay.host

    return (<div className='room-details'>

        <h1 className="room-details-title">Entire home hosted by {fullname}</h1>
        <p className='room-details-desc'>{guests} guests {bedrooms} bedrooms {beds} beds {baths} baths</p>

<div className="flex" style={{width:"100%"}}>
        <div className="left">

            <div className='flex margin-top-30' >
                <img className='room-info-icons' src={icon1} />
                <div className='margin-right-20'>
                    <p className='text-start room-info-text bold'>Designed by</p>
                    <p className=' gray'>Cadaval & Solà-Morales</p>
                </div>
            </div>

            <div className='flex margin-top-30' >
                <img className='room-info-icons' src={icon2} />
                <div className='margin-right-20'>
                    <p className='text-start room-info-text bold'>Featured in</p>
                    <p className=' gray'>The New York Times, January 2014
                        Wallpaper*, May 2015</p>
                </div>
            </div>

            <div className='flex margin-top-30 ' style={{ paddingBottom: '20px' }} >
                <img className='room-info-icons' src={icon3} />
                <div className='margin-right-20'>
                    <p className='text-start room-info-text bold'>Free cancellation for 48 hours.</p>
                </div>
            </div>
        </div>

       <div className="right"> <ReserveModal stay={stay} /></div>

        </div>

    </div>)

}