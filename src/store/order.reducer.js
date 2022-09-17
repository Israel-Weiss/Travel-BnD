

const INITIAL_STATE = {
    orders: JSON.parse(localStorage.getItem("orders"))
}


export function orderReducer(state = INITIAL_STATE, action) {

    switch (action.type) {
        case 'SET_ORDER':
            return {
                ...state,
                orders: action.orders
            }
            
        default:
            return state
    }

}



