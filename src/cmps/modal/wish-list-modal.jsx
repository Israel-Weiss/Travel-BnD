import addIcon from '../../assets/imgs/addIcon.png'
import React, { useState } from 'react'
import { wishListService } from '../../services/wish-list.service'
import { useEffect } from 'react'


export const WishListModal = ({ stay, closeModal }) => {
    var [editMode, setEditMode] = useState(false)
    var [wishlist, setWishlist] = useState(false)

    useEffect(() => {
        loadWishlist()
    }, [editMode])

    const loadWishlist = () => {
        wishListService.getByLogedInUser().then(list => {
            setWishlist(list)
        })
    }

    const createWishList = (ev) => {
        console.log("im work");
        ev.preventDefault()
        const listName = ev.target[0].value
        wishListService.createOrder(listName, stay)
        setEditMode(false)
    }

    const addStay = (listID) => {
        wishListService.addStayToList(listID, stay)
    }

    return (<div className="wishlist-modal">

        <div className="header">
            <button className='exitBtn' onClick={() => closeModal()}>x</button >
            <p className='title'>Your wishlists</p>
        </div>

        {!editMode ? <section>
            <div className="list" onClick={() => { setEditMode(true) }}>
                <img src={addIcon} />
                <p className='text'>Create new wishlist</p>
            </div>
            {wishlist && wishlist.map(list => {
                return <div className="list" >
                    <img className='wish-list-img' src={list.imgUrls[0]} onClick={() => addStay(list._id)} />
                    <p className='text' style={{ fontSize: "20px" }}>{list.name}</p>
                </div>
            })}

        </section> :
            <form className="editor" onSubmit={(event) => createWishList(event)}>
                <input type="text" placeholder='Name' />
                <button className="createBtn">
                    <p className='text'>Create</p>
                </button>
            </form>}
    </div>
    )
}