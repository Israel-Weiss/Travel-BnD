import { storageService } from "./async-storage.service"

export const userService = {
    register,
    validate,
    removeUser
}


function register(user) {
    return storageService.query('users')
        .then(users => {
            if (!users.some((currUser) => currUser.username === user.username)) return storageService.post('users', user)
        })
}


function removeUser(userId){
 storageService.remove("users",userId)
}

function validate(user) {
    return storageService.query('users').then(users => {
       return users.some((currUser) =>  (currUser.username === user.username) && (currUser.password === user.password) )
    })
}

