
export const StayGallery = ({stay}) => {

   if(!stay)return
    var key =0
    return (
        <div className="gallery">
        {stay.imgUrls.map(imgUrl => {
         return <img className='gallery-img' src={imgUrl} key={key++} />
        })}
    </div>
    )
}