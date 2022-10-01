import { stayService } from '../../services/stay.service'
import {  useSelector } from 'react-redux'


export const StayReviews = ({ stay, onAddReview}) => {
    const { loggedInUser } = useSelector(state => state.userModule)

    console.log(stay, "staysss");
    if (stay) {
        const reviews = stay.reviews
        var rate = stayService.calcRate(reviews)
    }

    if (!stay) return
    var key = 0
    return (
        <section className="review-container flex Montserrat" >

            <form style={{ width: "100%" }} onSubmit={(event) => onAddReview(event)}>
                <div className="review-header">
                    <h1 className="review-title fontSize-22 bold"> ★ {rate} · {stay.reviews.length} reviews </h1>
                    {loggedInUser && <button className='add-review-btn' >Add review</button>}
                </div>
                {loggedInUser && <textarea name="" id="" cols="30" rows="7"></textarea>}
            </form>


            <div className="flex-wrap" style={{ width: "100%" }}>

                {stay.reviews.map((review) => {
                    return (
                        <div className="review-card" key={key++}>
                            <div className="review-details flex">

                                <img className='user-pic' src={review.by.imgUrl} />
                                <div className="user-col">
                                    <span className='review-name bold'>{review.by.fullname}</span>
                                    <span className="review-date ">August 2022</span>
                                </div>
                            </div>

                            <div className="review-txt">
                                {review.txt}
                            </div>
                        </div>
                    )
                })}
            </div>


        </section>
    )
}


