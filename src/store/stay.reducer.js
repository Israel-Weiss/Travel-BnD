const INITIAL_STATE = {
    stays: null
}

export function stayReducer(state = INITIAL_STATE, action) {

    switch (action.type) {
        case 'SET_STAYS':
            return {
                ...state,
                stays: action.stays
            }
        case 'SET_FILTER':
            return {
                ...state,
                filterBy: action.filterBy
            }
        default:
            return state
    }
}



