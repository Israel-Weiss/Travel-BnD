import { StayPreview } from '../cmps/stay-preview'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { wishListService } from '../services/wish-list.service'
import { GoogleMap } from '../cmps/map'

export function WishlistList() {

    const [list, setList] = useState(null)
    const params = useParams()

    useEffect(() => {
        loadList()
    }, [params.id])

    const loadList = () => {
        const listId = params.id
        wishListService.getById(listId).then(list => {
            setList(list)
        })
    }
    console.log('list', list)


    if (!list) return


    return (
        <div className='wishlist-card-container'>
            <div className='left'>
                <h3 className='list-name'>{list.name}</h3>
                <div className="wishlist">
                    {list.stays.map(stay => {
                        return <StayPreview key={stay._id} stay={stay} />
                    })}
                </div>
            </div>
            <div className='right'>
                <GoogleMap className="google-map" stay={(list.stays[0])}/>
            </div>
        </div>
    )
}