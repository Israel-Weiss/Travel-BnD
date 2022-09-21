import { storageService } from "../services/async-storage.service"

const INITIAL_STATE = {
    loggedInUser:storageService.getLogedInUser()
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