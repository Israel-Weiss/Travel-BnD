import { setFilterBy,loadStay} from '../../store/stay.action'
import { useDispatch } from 'react-redux'

import pic1 from '../../assets/imgs/anywhere/1.png'
import pic2 from '../../assets/imgs/anywhere/2.webp'
import pic3 from '../../assets/imgs/anywhere/3.webp'
import pic4 from '../../assets/imgs/anywhere/4.webp'
import pic5 from '../../assets/imgs/anywhere/5.webp'
import pic6 from '../../assets/imgs/anywhere/6.webp'

var imgs = [{ img: pic1, text: 'I’m flexible' },
{ img: pic2, text: 'Middle East' },
{ img: pic3, text: 'Italy' },
{ img: pic4, text: 'United States' },
{ img: pic5, text: 'Greece' },
{ img: pic6, text: 'South America' }
]


export function SearchModal( {setAnywhereM}) {

    const onSetFilter =(region)=>{
        var filterBy = {}
        if(region !=="I’m flexible") filterBy.region = region
        else filterBy={}
        document.querySelector('.dark-screen').style.display = 'none'
        document.querySelector('.dark-screen').style.top = '0'
        document.querySelector('.dark-screen').style.height = '100%'

        dispatch(setFilterBy(filterBy))
        dispatch(loadStay())
    }
    
    const dispatch = useDispatch()

    var key=0
    return (
        <div className='anywhere-modal'>
            <p className='black bold title text-start'>Search by region</p>
            <div className='imgs-container '>
                {imgs.map(img => {
                    key++
                    return (
                        <div className='flex-coulmn ' key={key}>
                            <img className='modal-img' src={img.img} onClick={()=>onSetFilter(img.text)} />
                            <p className='black text-start modal-text'>{img.text}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}