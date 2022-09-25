import { orderService } from "../services/order.service";

export function setOrder(stay, user,startDate,endDate,nights,stayImg) {

    return (dispatch, getState) => {
        orderService.createOrder(stay,startDate,endDate,nights,stayImg)
            .then(orders => {
                
                dispatch({ type: 'SET_ORDER', orders: orders })
            })
            .catch(err => {
                console.log('err:', err)
            })
    }
}



