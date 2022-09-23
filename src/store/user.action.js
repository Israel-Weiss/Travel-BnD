import { userService } from "../services/user.service";

export function register(user) {

    return (dispatch, getState) => {
        if (!user) {
            sessionStorage.setItem("loggedinUser", null)
            dispatch({ type: 'SET_USER', user: null })
            window.location.href = "index.html/";
        }
        else userService.register(user)
            .then(user => {
                if (!user) return
                dispatch({ type: 'SET_USER', user: user })
            })
            .catch(err => {
                console.log('err:', err)
            })
    }
}

export function logout(user) {

    return (dispatch) => {
        sessionStorage.removeItem("loggedinUser")
        dispatch({ type: 'SET_USER', user: null })
        window.location.href = "index.html/";
    }
}

export function login(user) {
    return (dispatch) => {
        userService.login(user)
            .then(validtedUser => {
                if (validtedUser) {
                    dispatch({ type: 'SET_USER', user: validtedUser })
                }
                else return
            })
            .catch(err => {
                console.log('err:', err)
            })
    }
}

