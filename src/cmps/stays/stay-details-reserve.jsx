import icon1 from '../../assets/imgs/house/place-offer/1.svg'
import icon2 from '../../assets/imgs/house/place-offer/2.svg'
import icon3 from '../../assets/imgs/house/place-offer/3.svg'
import icon4 from '../../assets/imgs/house/place-offer/4.svg'
import icon5 from '../../assets/imgs/house/place-offer/5.svg'
import icon6 from '../../assets/imgs/house/place-offer/6.svg'
import icon7 from '../../assets/imgs/house/place-offer/7.svg'
import icon8 from '../../assets/imgs/house/place-offer/8.svg'
import icon9 from '../../assets/imgs/house/place-offer/9.svg'
import icon10 from '../../assets/imgs/house/place-offer/10.svg'
import pool from '../../assets/imgs/house/place-offer/pool.svg'
import tv from '../../assets/imgs/house/place-offer/tv.svg'
import beach from '../../assets/imgs/house/place-offer/beach.svg'
import dryer from '../../assets/imgs/house/place-offer/dryer.svg'
import fireplace from '../../assets/imgs/house/place-offer/fireplace.svg'
import hottub from '../../assets/imgs/house/place-offer/hottub.svg'
import kitchen from '../../assets/imgs/house/place-offer/kitchen.svg'
import mountain from '../../assets/imgs/house/place-offer/mountain.svg'
import parking from '../../assets/imgs/house/place-offer/parking.svg'
import patio from '../../assets/imgs/house/place-offer/patio.svg'
import pets from '../../assets/imgs/house/place-offer/pets.svg'
import smokeallowed from '../../assets/imgs/house/place-offer/smokeallowed.svg'
import washer from '../../assets/imgs/house/place-offer/washer.svg'
import wifi from '../../assets/imgs/house/place-offer/wifi.svg'
import workspace from '../../assets/imgs/house/place-offer/workspace.svg'
import aircondition from '../../assets/imgs/house/place-offer/aircondition.svg'
import crib from '../../assets/imgs/house/place-offer/crib.svg'







var picsleft = [
    { img: icon1, text: 'Park view' },
    { img: icon2, text: 'Kitchen' },
    { img: icon3, text: 'Free parking on premises' },
    { img: icon4, text: 'TV with standard cable' },
    { img: icon5, text: 'Carbon monoxide alarm' },
]




export const PlaceOffer = ({ stay }) => {

    const  amenities = stay.amenities 
    var picright = []
    var picleft2 = []
    let icon = {}
    amenities.map((amentitie) => {
        switch(amentitie) {
            case('Shared pool' || 'Pool' || 'Pool view' || 'Private pool'):
                icon ={img:pool, text: amentitie}  
                return (picleft2.length < 5)?picleft2.push(icon):picright.push(icon)
            case('TV' || 'HDTV'):
                icon ={img: tv, text: amentitie}  
                return (picleft2.length < 5)?picleft2.push(icon):picright.push(icon)
            case('Wifi'):
                icon ={img: wifi, text: amentitie}  
                return (picleft2.length < 5)?picleft2.push(icon):picright.push(icon)
            case('Kitchen' || 'Cooking basics'):
                icon ={img: kitchen, text: amentitie}  
                return (picleft2.length < 5)?picleft2.push(icon):picright.push(icon)
            case('Washer' ): 
                icon ={img: washer, text: amentitie}  
                return (picleft2.length < 5)?picleft2.push(icon):picright.push(icon)
            case('Hot tub'):
                icon ={img: hottub, text: amentitie}  
                return (picleft2.length < 5)?picleft2.push(icon):picright.push(icon)
            case('Dryer'):
                icon ={img: dryer, text: amentitie}  
                return (picleft2.length < 5)?picleft2.push(icon):picright.push(icon)
            case('Free parking on premises' || 'Free street parking'):
                icon ={img: parking, text: amentitie}  
                return (picleft2.length < 5)?picleft2.push(icon):picright.push(icon)
            case('Mountain view' || 'River view'):
                icon ={img: mountain, text: amentitie}  
                return (picleft2.length < 5)?picleft2.push(icon):picright.push(icon)
            case('Patio or balcony' || 'Private patio or balcony'):
                icon ={img: patio, text: amentitie} 
                return (picleft2.length < 5)?picleft2.push(icon):picright.push(icon)
            case('Air conditioning'):
                icon ={img: aircondition, text: amentitie}  
                return (picleft2.length < 5)?picleft2.push(icon):picright.push(icon)
            case('Crib'):
                icon ={img: crib, text: amentitie}
                return (picleft2.length < 5)?picleft2.push(icon):picright.push(icon)
            case('Beach access – Beachfront' || 'Beach view' || 'Beach access Beachfront' || 'Sea view'):
                icon ={img: beach, text: amentitie} 
                return (picleft2.length < 5)?picleft2.push(icon):picright.push(icon)
            case('Pets allowed'):
                icon ={img: pets, text: amentitie}  
                return (picleft2.length < 5)?picleft2.push(icon):picright.push(icon)
            case('Indoor fireplace'):
                icon ={img: fireplace, text: amentitie}  
                return (picleft2.length < 5)?picleft2.push(icon):picright.push(icon)
            case('Dedicated workspace'):
                icon ={img: workspace, text: amentitie}  
                return (picleft2.length < 5)?picleft2.push(icon):picright.push(icon)
            case('Smoking allowed'):
                icon ={img: smokeallowed, text: amentitie}  
                return (picleft2.length < 5)?picleft2.push(icon):picright.push(icon)
        } 
    }
)


    return (
        <div className="place-offer">
            <h1 className="black fontSize-22 text-start bold">What this place offers</h1>
            <div className="place-offer-list">

                <div className="left">
                    {picleft2.map(pic => {
                        return (
                            <div className='flex margin-buttom-5'>
                                <img className='room-info-icons' src={pic.img} />
                                <p className='black margin-right-20'>{pic.text}</p>
                            </div>)
                    })}
                </div>
                
                <div className="right">
                {picright.map(pic => {
                        return (

                            <div className='flex margin-buttom-5'>
                                <img className='room-info-icons' src={pic.img} />
                                <p className='black margin-right-20'>{pic.text}</p>
                            </div>)
                    })}
                </div>

            </div>

        </div>
    )
}