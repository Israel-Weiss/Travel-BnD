import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { StayList } from '../cmps/stay-list'
import { useEffect } from 'react'
import { wishListService } from '../services/wish-list.service'
import { NavLink } from 'react-router-dom'


export function Wishlist() {

    var [wishlist, setWishlist] = useState(false)

    useEffect(() => {
        loadWishlist()
    }, [])

    const loadWishlist = () => {
        wishListService.getByLogedInUser().then(list => {
            setWishlist(list)
        })
    }

    console.log(wishlist);

    if (!wishlist) return

    return (
        <section className="wishlist-container">
            <div className="title-container">
                <h1 className="title">Wishlists</h1>
            </div>
            <section className="wish-list">
                {wishlist.map(list => {
                    return <div className="flex-coulmn list ">
                        < NavLink to={`/wishlist/${list._id}`}>
                            <div className="wish-box">
                                <img className='wish-pic' src={list.imgUrls[0]} />
                                <img className='wish-pic' src={list.imgUrls[1]} />
                                <img className='wish-pic' src={list.imgUrls[2]} />
                            </div>
                        </ NavLink>
                        <h2 className="list-title">{list.name}</h2>
                    </div>
                })}
            </section>
        </section>)
}


