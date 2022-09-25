import { httpService } from './http.service'

export const userService = {
    register,
    login
}

const STORAGE_KEY_LOGGEDIN_USER = 'loggedinUser'
const BASE_URL = "auth/"

async function register(cred) {
    const user = await httpService.post(BASE_URL + "signup", cred)
    if (user) return saveLocalUser(user)
}

async function login(cred) {
    const user = await httpService.post(BASE_URL + "login", cred)
    if (user) return saveLocalUser(user)

}

function saveLocalUser(user) {
    sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user))
    return user
}
