import starIcon from '../../assets/imgs/starIcon.svg'
import shareIcon from '../../assets/imgs/share-icon.svg'
import heartIcon from '../../assets/imgs/heart-icon.svg'


export const StayTitle = ({ stay }) => {

    if (!stay) return

    return (
        <div className="room-info">
            <h1 className="room-info-title">{stay.name}</h1>

            <div className="subTitle">

                <div className='room-info-left' >
                    <div className="align-items flex ">
                        <img className='starIcon' src={starIcon} />
                        <p className="room-info-rating">4.75</p>
                    </div>
                    <p className="room-reviews-info">{stay.reviews.length} reviews</p>
                    <p className="room-location-info">, {stay.loc.city}, {stay.loc.country}</p>
                </div>
                <div className='room-info-right' style={{ display: 'flex' }}>

                    <div className="align-items flex ">
                        <img className='icons' src={shareIcon} />
                        <p className="room-info-share">Share</p>
                    </div>

                    <div className="align-items flex ">
                        <img className='icons' src={heartIcon} />
                        <p className="room-reviews-save">Save</p>
                    </div>
                </div>
            </div>
        </div>
    )
}