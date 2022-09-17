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

export function SearchModal() {


    return (

        <div className='anywhere-modal'>
            <p className='black bold title text-start'>Search by region</p>
            <div className='imgs-container '>
                {imgs.map(img => {
                    return (
                        <div className='flex-coulmn '>
                            <img className='modal-img' src={img.img} />
                            <p className='black bold text-start margin-buttom-5'>{img.text}</p>
                        </div>
                    )
                })}
            </div>
        </div>


    )


}