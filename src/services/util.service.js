export const UtilService = {
    calcRate
}


function calcRate(reviews) {
    var rate = 0
    reviews.map((review) =>{
        rate += review.rate
    })
    rate = rate / reviews.length
    return rate.toFixed(2)
}