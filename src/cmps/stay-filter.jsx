import { filterIcons } from "../storage/icon-storage"
import filterIcon from "../assets/imgs/Filter Icons/filterIcon.svg";

export const StayFilter = ({ onSetFilter}) => {
    var key = 0
    return (<div className="filter-tab">
        <div className="filterSection">
            {filterIcons.map(img => {
                key++
                return (
                    <div className="filter-category" key={key++} onClick={() => onSetFilter(img.text)}>
                        <img className="filter-icons"  src={img.pic} />
                        <p className="filter-icons-text">{img.text}</p>
                    </div>)
            })}
        </div>
        <div className="filter-btn">
            <img className="filter-btn-img" src={filterIcon} />
            <p className="filter-btn-text">Filters</p>
        </div>
    </div>)
}