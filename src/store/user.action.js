import { userService } from "../services/user.service";

export function setUser(user) {

    return (dispatch, getState) => {
        if (!user) {
            sessionStorage.setItem("logedInUser", null)
            dispatch({ type: 'SET_USER', user: null })
            window.location.href = "index.html/";
        }
        else userService.register(user)
            .then(user => {
                sessionStorage.setItem("logedInUser", JSON.stringify(user))
                dispatch({ type: 'SET_USER', user: user })
            })
            .catch(err => {
                console.log('err:', err)
            })
    }
}

export function logout(user) {

    return (dispatch, getState) => {
        //Remove ghost user after logout
        if (user.username === "Ghost") userService.removeUser(user._id)
        sessionStorage.setItem("logedInUser", null)
        dispatch({ type: 'SET_USER', user: null })
        window.location.href = "index.html/";

    }
}


    export function validUser(user) {

        return (dispatch, getState) => {

            userService.validate(user)
                .then(validate => {
                    if (validate) {
                        sessionStorage.setItem("logedInUser", JSON.stringify(user))
                        dispatch({ type: 'SET_USER', user: user })
                    }
                    else return
                })
                .catch(err => {
                    console.log('err:', err)
                })
        }
    }