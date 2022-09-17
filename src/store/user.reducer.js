const INITIAL_STATE = {
    loggedInUser:sessionStorage.getItem("logedInUser")
}


export function userReducer(state = INITIAL_STATE, action){
    
    switch (action.type) {

        case 'SET_USER':

            return {
                ...state,
                loggedInUser: action.user
            }


        default:
            return state 
          }

}