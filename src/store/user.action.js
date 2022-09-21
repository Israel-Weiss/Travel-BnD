import { userService } from "../services/user.service";

export function setUser(user) {

    return (dispatch, getState) => {
        if (!user) {
            sessionStorage.setItem("loggedinUser", null)
            dispatch({ type: 'SET_USER', user: null })
            window.location.href = "index.html/";
        }
        else userService.register(user)
            .then(user => {
                if(!user)return
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
        // if (user.username === "Ghost") userService.removeUser(user._id)
        sessionStorage.removeItem("logedInUser")
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
                        dispatch({ type: 'SET_USER', user: validtedUser })
                        // if(validtedUser.ishost)window.location.href = "index.html/#/dashboard";

                    }
                    else return
                })
                .catch(err => {
                    console.log('err:', err)
                })
        }
    }