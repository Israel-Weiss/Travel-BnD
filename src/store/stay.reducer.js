

const INITIAL_STATE = {
    stays: null
}


export function stayReducer(state = INITIAL_STATE, action) {
let filterStays=[]

    switch (action.type) {
        case 'SET_STAY':{
        console.log(action.stays,"action.stays");
            return {
                ...state,
            stays: [...action.stays]
            }

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



