import { storageService } from "./async-storage.service"
import { gUsers } from "../storage/user.data"
import { httpService } from './http.service'


export const userService = {
    register,
    validate: login,
    removeUser
}

const STORAGE_KEY_LOGGEDIN_USER = 'loggedinUser'
const BASE_URL = "user/"
const BASE_URL_AUTH="auth/"

createHostUsers()
function createHostUsers() {
    let users = storageService.getUsers()
    if (!users) storageService._save("users", gUsers)
}

async function register(cred) {
    const user = await httpService.post(BASE_URL_AUTH+"signup",cred)
    console.log("userrrr",user);
    console.log(user,"return from storage");
    if(user)return saveLocalUser(user)
}

function removeUser(userId) {
    storageService.remove("users", userId)
}

async function login(cred) {
const user = await httpService.post(BASE_URL_AUTH+"login",cred)
if(user)return saveLocalUser(user)

}


function saveLocalUser(user) {
    sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user))
    return user
}
