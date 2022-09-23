import { NavLink} from "react-router-dom";
import searchIcon from "../../assets/imgs/serachIcon.png"

export function NavBar({openModal, currentCmp }) {

    return (
        <div className={currentCmp  !== "stayDetails" ? 'stay-list-margin header-nav ' : 'stay-details-margin header-nav '}>
        {currentCmp !== "stayDetails" ?
            <section className="flex">
                <NavLink className="navlink" to='#' onClick={() => openModal('anywhere')}>Anywhere</NavLink>
                <NavLink className="navlink" to='#'>Any week</NavLink>
                <NavLink className="navlink" to='#' >Add guests</NavLink>
            </section> :
            <NavLink className=" navlink " to='#' onClick={() => openModal('anywhere')}>Start your search</NavLink>}
        <div className="search-icon"><img className="search-icon-img" src={searchIcon} /></div>
    </div>
    )
}
