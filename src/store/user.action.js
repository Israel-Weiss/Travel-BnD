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
                if(!user)return
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
                .then(validtedUser => {
                    if (validtedUser) {
                        console.log(validtedUser,"validtedUser");
                        sessionStorage.setItem("logedInUser", JSON.stringify(validtedUser))
                        dispatch({ type: 'SET_USER', user: validtedUser })
                    }
                    else return
                })
                .catch(err => {
                    console.log('err:', err)
                })
        }
    }