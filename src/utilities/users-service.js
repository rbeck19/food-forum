//handle functions
//import ALL as userAPI
import * as userAPI from "./users-api"

//waiting to get userData from SignUpForm
export async function signUp(userData) {
    const token = await userAPI.signUp(userData)

    return logIn(userData)
}

export function getToken() {

    const token = localStorage.getItem("token")
    if (!token) return null

    return token
}

export function getUser() {
    //use above function to obtain token
    const token = getToken()

    if (token) {
        return token
    } else {
        return null
    }
}
export function getUserInfo(str) {
    const info = localStorage.getItem(str)
    if (info) {
        return info
    } else {
        return null
    }
}

export function logOut() {
    localStorage.removeItem("token")
    localStorage.removeItem("userName")
    localStorage.removeItem("userId")
}

export async function logIn(credentials) {
    const token = await userAPI.logIn(credentials)
    localStorage.setItem("token", token.user.token)
    localStorage.setItem("userName", token.user.email)
    localStorage.setItem("userId", token.user.id)
    console.log(token)
    console.log(token.user)
    console.log(token.user.token)
    console.log(token.user.email)
    return getUser()
}
