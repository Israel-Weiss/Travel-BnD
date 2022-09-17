import { storageService } from "./async-storage.service"

export const userService = {
    register
}


function register(user) {
    storageService.post('users', user)
}