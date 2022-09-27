const INITIAL_STATE = {
    stays: null,
    filterBy: null,
    currentUrl: "/"
}

export function stayReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'SET_STAY': {
            return {
                ...state,
                stays: [...action.stays]
            }
        }
        case 'UPDATE_STAY': {
            return { ...state, stays: state.stays.map(stay => stay._id === action.updatedStay._id ? action.updatedStay : stay) }
        }

        case 'SET_CURRENT_URL': {
            return {
                ...state,
                currentUrl: action.currentUrl
            }
        }

        case 'SET_FILTER_BY':
         return { ...state, filterBy: { ...action.filterMode } }

         case 'RESET-FILTER':
            return { ...state, filterBy:null }

        default:
            return state
    }
}



