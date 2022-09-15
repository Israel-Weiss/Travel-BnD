export const RoomInfo = () => {

    return (
        <div className="room-info">
        <h1 className="room-info-title">Sunflower House</h1>

        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>

            <div className='room-info-left' >
                <p className="room-info-rating">★4.75</p>
                <p className="room-reviews-info">134 reviews</p>
                <p className="room-location-info">El Port de la Selva, Catalonia, Spain</p>
            </div>
            <div className='room-info-right' style={{ display: 'flex' }}>
                <p className="room-info-share">Share</p>
                <p className="room-reviews-save">Save</p>
            </div>

        </div>

    </div>
    )
}