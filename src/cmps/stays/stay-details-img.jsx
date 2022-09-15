
import pic1 from '../../assets/imgs/house/1.webp'
import pic2 from '../../assets/imgs/house/2.webp'
import pic3 from '../../assets/imgs/house/3.webp'
import pic4 from '../../assets/imgs/house/4.webp'
import pic5 from '../../assets/imgs/house/5.webp'
var pics = [pic1, pic2, pic3, pic4, pic5]
export const RoomImages = ({stay}) => {


   if(!stay)return
    
    return (
        <div className="room-images">
        {stay.imgUrls.map(imgUrl => {
            return <img className='room-image' src={imgUrl} />
        })}

    </div>

    )

}