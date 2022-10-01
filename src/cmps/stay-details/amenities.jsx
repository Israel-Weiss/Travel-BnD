import { stayService } from '../../services/stay.service'

export const Amenities = ({ stay }) => {
    const amenities = stay.amenities
    const icon = stayService.mapIcon(amenities)
    var key =200
    return (
        <div className="amenities-container">
            <h1 className="black fontSize-22 text-start bold Montserrat">What this place offers</h1>
            <div className="amenities-list">

                <div className="left">
                    {icon[0].map(pic => {
                        return (
                            <div className='aminate   ' key={key++}>
                                <img className='room-info-icons' src={pic.img} />
                                <p className='black margin-right-20 Montserrat'>{pic.text}</p>
                            </div>)
                    })}
                </div>

                <div className="right">
                    {icon[1].map(pic => {
                        return (
                            <div className='aminate  'key={key++}>
                                <img className='room-info-icons' src={pic.img} />
                                <p className='black margin-right-20'>{pic.text}</p>
                            </div>)
                    })}
                </div>
            </div>
        </div>
    )
}