import searchIcon from "../assets/imgs/serachIcon.png"
import { setFilter } from "../store/stay.action"
import { useDispatch, useSelector } from 'react-redux'

export function SubHeader() {
    const dispatch = useDispatch()

    const onSearch = (ev) => {
        const text = ev.target.value
        dispatch(setFilter(null, text))
    }

    return (
        <div className="subheader-container">
            <div className="search-bar flex">

                <ul>
                    <p className="title">Where</p>
                    <input type="text" placeholder="Search destination" onChange={(event) => onSearch(event)} />
                </ul>
                <ul>
                    <div className="border-right">
                        <p className="title">Check in</p>
                        <p className="text">Add dates</p>
                    </div>
                </ul>
                <ul>
                    <p className="title">Check out</p>
                    <p className="text">Add dates</p>
                </ul>
                <ul>
                    <p className="title">Who</p>
                    <p className="text">Add guests</p>
                </ul>

                <div className="search-btn">
                    <img className="saerch-icon" src={searchIcon} />
                    <p className="btn-text">Search</p>
                </div>
            </div>
        </div>
    )
}