import icon1 from '../../assets/imgs/room-info/designedBy-Icon.svg'
import icon2 from '../../assets/imgs/room-info/featured-icon.svg'
import icon3 from '../../assets/imgs/room-info/cancellation-Icon.svg'
import { ReserveModal } from '../modal/modal-reserve'



export const StayDescription = ({ stay }) => {
    var profilePic = "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80"

    if (!stay) return
    const { guests, bedrooms, beds, baths } = stay.capacity
    const { fullname } = stay.host

    return (<div className='room-details'>

        <div className="title-sector">
            <div className='flex-coulmn'>
                <h1 className="room-details-title">Entire home hosted by {fullname}</h1>
                <p className='room-details-desc'>{guests} guests {bedrooms} bedrooms {beds} beds {baths} baths</p>
            </div>
          <img className='profile-img' src={stay.host.pictureUrl} />
        </div>

        <div className="flex" style={{ width: "100%" }}>
            <div className="left">

                <div className='icon-container' >
                    <img className='room-info-icons' src={icon1} />
                    <div className='margin-right-20'>
                        <p className='text-start room-info-text bold'>Designed by</p>
                        <p className=' gray'>Cadaval & Solà-Morales</p>
                    </div>
                </div>

                <div className='icon-container' >
                    <img className='room-info-icons' src={icon2} />
                    <div className='margin-right-20'>
                        <p className='text-start room-info-text bold'>Featured in</p>
                        <p className=' gray'>The New York Times, January 2014
                            Wallpaper*, May 2015</p>
                    </div>
                </div>

                <div className='icon-container' style={{ paddingBottom: '20px' }} >
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