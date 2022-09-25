import { ReserveModal } from '../modal/modal-reserve'
import { Amenities } from './amenities'
//IMG
import icon1 from '../../assets/imgs/room-info/designedBy-Icon.svg'
import icon2 from '../../assets/imgs/room-info/featured-icon.svg'
import icon3 from '../../assets/imgs/room-info/cancellation-Icon.svg'
const icons =
[{ img: icon1, title: "Designed by", desc: "Cadaval & Solà-Morales" },
{ img: icon2, title: "Featured in", desc: `The New York Times, January 2014 Wallpaper*, May 2015` },
{ img: icon3, title: "Free cancellation for 48 hours." }]

export const StayDescription = ({ stay }) => {

    if (!stay) return
    const { bathrooms, bedrooms, capacity } = stay
    const { fullname,pictureUrl } = stay.host
    var key = 0
    var style = {}
    return (
        <section className='flex' style={{ width: "100%" }}>
            <div className='room-details'>

                <div className="title-sector">
                    <div className='flex-coulmn'>
                        <h1 className="room-details-title">Entire home hosted by {fullname}</h1>
                        <p className='room-details-desc'>{capacity} guests {capacity} bedrooms {bedrooms} beds {bathrooms} baths</p>
                    </div>
                    <img className='profile-img' src={pictureUrl} />
                </div>

                <div className="flex-coulmn" style={{width: "100%"}}>

                    {icons.map(icon => {
                        key++
                        if (key === 3) style = { paddingBottom: '20px' }
                        return <div className='icon-container' key={key}>
                            <img className='room-info-icons' src={icon.img} />
                            <div className='margin-right-20'>
                                <p className='text-start room-info-text bold' style={style}>{icon.title}</p>
                                {icon.desc && <p className=' gray'>{icon.desc}</p>}
                            </div>
                        </div>})}
                </div>
                <Amenities stay={stay} />
            </div>
            <div className="right"> <ReserveModal stay={stay} /></div>
        </section>
    )
}