import { storageService } from "./async-storage.service"
import { gUsers } from "../storage/user.data"


export const userService = {
    register,
    validate,
    removeUser
}

createHostUsers()
function createHostUsers(){
let users =storageService.getUsers()
if(!users)storageService._save("users",gUsers)
}


function register(user) {
    return storageService.query('users')
        .then(users => {
            if (!users.some((currUser) => currUser.username === user.username)) return storageService.post('users', user)
        })
}


function removeUser(userId) {
    storageService.remove("users", userId)
}

function validate(user) {
    return storageService.query('users').then(users => {
        var filterUser = users.filter((currUser) => (currUser.username === user.username) && (currUser.password === user.password))
        return filterUser[0]
    })
}

