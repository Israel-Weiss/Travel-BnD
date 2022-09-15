import searchIcon from "../assets/imgs/serachIcon.png"

export function SubHeader() {
    return (
        <div className="subheader-container">
            <div className="search-bar flex">

                <div className="flex align-items" style={{ height: '100%' }}>
                    <ul>
                        <p className="title">Where</p>
                        <input type="text" placeholder="search destination" />
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

                </div>

                <div className="search-btn">
                    <img className="saerch-icon" src={searchIcon} />
                    <p className="btn-text">Search</p>
                </div>
            </div>

        </div>
    )


}