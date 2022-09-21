import { storageService } from "./async-storage.service"
import { gUsers } from "../storage/user.data"
import { httpService } from './http.service'


export const userService = {
    register,
    validate,
    removeUser
}

const BASE_URL = "user/"

createHostUsers()
function createHostUsers() {
    let users = storageService.getUsers()
    if (!users) storageService._save("users", gUsers)
}

async function register(user) {
    const users = await httpService.get(BASE_URL)
    if (!users.some((currUser) => currUser.username === user.username))
        return await httpService.post(BASE_URL, user)
}

function removeUser(userId) {
    storageService.remove("users", userId)
}

async function validate(user) {
    const users = await httpService.get(BASE_URL)
    var filterUser = users.filter((currUser) => (currUser.username === user.username) && (currUser.password === user.password))
    return filterUser[0]
}

