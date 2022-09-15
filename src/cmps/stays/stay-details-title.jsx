export const RoomInfo = ({stay}) => {



    if(!stay)return
    
    return (
        <div className="room-info">
        <h1 className="room-info-title">{stay.name}</h1>

        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>

            <div className='room-info-left' >
                <p className="room-info-rating">★4.75</p>
                <p className="room-reviews-info">{stay.reviews.length} reviews</p>
                <p className="room-location-info">, {stay.loc.city}, {stay.loc.country}</p>
            </div>
            <div className='room-info-right' style={{ display: 'flex' }}>
                <p className="room-info-share">Share</p>
                <p className="room-reviews-save">Save</p>
            </div>

        </div>

    </div>
    )
}