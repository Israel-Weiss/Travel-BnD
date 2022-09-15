

const INITIAL_STATE = {
    stays: null,
    filterBy: null,
    user:null
    // isLoading: false
}


export function stayReducer(state = INITIAL_STATE, action) {

    switch (action.type) {
        case 'SET_TOYS':
            return {
                ...state,
            stays: action.toys
            }

        case 'REMOVE_TOY':
            return {
                ...state,
                stays: state.toys.filter(toy => toy._id !== action.toyId)
            }

        case 'ADD_REVIEW':
            return {
                ...state,
                stays: { ...state.toys, reviews: action.reviews }
            }

        case 'ADD_TOY':
            return {
                ...state,
                stays: [ ...state.toys, action.toy ]
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



