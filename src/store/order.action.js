import { orderService } from "../services/order.service";

// export function setOrder(stay, user) {

//     return (dispatch, getState) => {
//         orderService.createOrder(stay, user)
//             .then(orders => {

//                 dispatch({ type: 'SET_ORDER', orders: orders })
//             })
//             .catch(err => {
//                 console.log('err:', err)
//             })
//     }
// }

export function setOrder(stay, user) {
    return async (dispatch) => {
        try {
            const orders = await orderService.createOrder(stay, user)
            dispatch({ type: 'SET_ORDER', orders })
        } catch (err) {
            console.log('err:', err)
        }
    }
}



