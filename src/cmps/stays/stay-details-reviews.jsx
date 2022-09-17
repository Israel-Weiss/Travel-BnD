import { stayService } from '../../services/stay.service'

export const RoomReviews = ({stay}) => {
    const reviews =  stay.reviews

    var rate = stayService.calcRate(reviews)

    if(!stay)return
    
    return (
        <section className="review-container flex" >
        <h1 className="review-title fontSize-22 bold"> ★ {rate} · {reviews.length} Reviews </h1>
                {reviews.map((review) => {
                    return (
                        <div className="review-card">
                            <div className="review-details flex">
                                
                                <img className='user-pic' src={review.by.imgUrl} />
                                <div className="user-col">    
                                    <span className='review-name bold'>{review.by.fullname}</span>
                                    <span className="review-date ">August 2022</span>
                                </div>
                            </div>

                            <div className="review-txt">
                                <span>{review.txt} </span>
                            </div>
                            
                        </div>
                    )})}

        </section>
)
}


