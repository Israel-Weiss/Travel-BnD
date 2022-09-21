import { orderService } from "../services/order.service";

export function setOrder(stay, user,startDate,endDate) {

    return (dispatch, getState) => {
        orderService.createOrder(stay,startDate,endDate)
            .then(orders => {
                
                dispatch({ type: 'SET_ORDER', orders: orders })
            })
            .catch(err => {
                console.log('err:', err)
            })
    }
}