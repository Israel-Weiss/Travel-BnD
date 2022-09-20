
export const StayGallery = ({stay}) => {

   if(!stay)return
    var key =0
    return (
        <div className="room-images">
        {stay.imgUrls.map(imgUrl => {
            return <img className='room-image' src={imgUrl} key={key++} />
        })}
    </div>
    )
}