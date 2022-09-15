
import pic1 from "../assets/imgs/Filter Icons/1.png";
import pic2 from "../assets/imgs/Filter Icons/2.png";
import pic3 from "../assets/imgs/Filter Icons/3.png";
import pic4 from "../assets/imgs/Filter Icons/4.png";
import pic5 from "../assets/imgs/Filter Icons/5.png";
import pic6 from "../assets/imgs/Filter Icons/6.png";
import pic7 from "../assets/imgs/Filter Icons/7.png";
import pic8 from "../assets/imgs/Filter Icons/8.png";
import pic9 from "../assets/imgs/Filter Icons/9.png";
import pic10 from "../assets/imgs/Filter Icons/10.png";
import pic11 from "../assets/imgs/Filter Icons/11.png";
import filterIcon from "../assets/imgs/Filter Icons/filterIcon.svg";

var pics =
    [{ pic: pic1, text: 'OMG!' },
    { pic: pic2, text: 'Beach' },
    { pic: pic3, text: 'Amazing pools' },
    { pic: pic4, text: 'Islands' },
    { pic: pic5, text: 'National parks' },
    { pic: pic6, text: 'Amzing views' },
    { pic: pic7, text: 'Design' },
    { pic: pic8, text: 'Camping' },
    { pic: pic9, text: 'Cabins' },
    { pic: pic10, text: 'Lakefront' },
    { pic: pic11, text: 'Arctic' },
    ]


export const StayFilter = ({ onSetFilter, onSortBy }) => {

    var key = 0
    return (<div className="filter-tab">
        <div className="filterSection">
            {pics.map(img => {
                key++
                return (
                    <div className="filter-category" onClick={() => onSetFilter(img.text)}>
                        <img className="filter-icons" key={key} src={img.pic} />
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



