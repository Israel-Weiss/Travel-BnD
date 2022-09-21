import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { StayList } from '../cmps/stay-list'
import { useEffect } from 'react'
import { wishListService } from '../services/wish-list.service'

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
                        <div className="wish-box">
                            <img className='wish-pic' src={list.imgUrls[0]} />
                            <img className='wish-pic' src={list.imgUrls[1]} />
                            <img className='wish-pic' src={list.imgUrls[2]} />
                        </div>
                        <h2 className="list-title">{list.name}</h2>
                    </div>
                })}
            </section>
        </section>)
}







// <div className="wishlist-edit-modal" style={{ display: modalFlag ? 'flex' : 'none' }}>
//     <div className="setting-title-sector flex"  >
//         <p className="setting-title black bold">Settings</p>
//         <button className="exit-btn" onClick={() => closeModal('Save')}>x</button>
//     </div>

//     <form className="rename-layout" onSubmit={(event) => onRename(event)}>
//         <h1 className="header black text-start">New wishlist name</h1>
//         <input className="name-input" type="text" />
//         <p className="lower-text text-start black">Max 20 characters</p>
//         <button className="continue-btn">Save</button>
//     </form>
// </div>
// </div>
// </section>
// </section> */

