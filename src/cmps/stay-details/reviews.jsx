import { stayService } from '../../services/stay.service'
import { useSelector } from 'react-redux'
import rightArrowImg from '../../assets/imgs/open-right.svg'
import $ from 'jquery'
import { useEffect } from 'react'


export const StayReviews = ({ stay, onAddReview }) => {
    const { loggedInUser } = useSelector(state => state.userModule)


    useEffect(() => {
        var reviewsText = $(".review-txt")
        if (reviewsText) {
            $('.review-txt').each(function (k, v) {
                if ($(v).outerHeight() < 70) {
                    $(v).removeClass("truncate")
                    $(v).next(".txtcol").css({ "display": "none" })
                }
            });
        }

    }, [stay])

    const showMore = (ev) => {
        ev.preventDefault()
        var text = ev.target.parentElement.parentElement.children[1]
        if (text.classList.contains("truncate")) {
            ev.target.innerText = "Show Less"
        } else {
            ev.target.innerText = "Show More";
        }
        text.classList.toggle("truncate")
    }

    if (stay) {
        const reviews = stay.reviews
        var rate = stayService.calcRate(reviews)
    }

    if (!stay) return
    var key = 0
    return (
        <section className="review-container flex Montserrat" >
            <div className="review-header">
                <h1 className="review-title fontSize-22 bold"> ★ {rate} · {stay.reviews.length} reviews </h1>
            </div>



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

                            <div className="review-txt truncate ">
                                {review.txt}

                            </div>
                            <div class="flex align-items txtcol " onClick={(event) => showMore(event)}><a>Show More</a>
                                <img src={rightArrowImg} style={{ width: "10px", marginLeft: "5px" }} />
                            </div>
                        </div>
                    )
                })}
            </div>

            <form className='flex-coulmn ' style={{ width: "100%" }} onSubmit={(event) => onAddReview(event)}>
                {loggedInUser && <button className='add-review-btn' >Add review</button>}
                {loggedInUser && <textarea name="" id="" cols="30" rows="7"></textarea>}
            </form>

        </section>
    )
}


