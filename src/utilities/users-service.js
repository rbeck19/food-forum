import * as usersAPI from "./users-api"

export async function signUp(userData) {
    const token = await usersAPI.signUp(userData)
   
    localStorage.setItem("token", token)
    return getUser()
}

export function getToken() {
    //get token from localStorage
    const token = localStorage.getItem("token")
    if(!token) return null

    //get token's payload
    const payload = token.split(".")[1]
    //JWT's are base64 encoded
    //need to decode it to make it useable 
    //gives us a json user object
    const decodedPayload = atob(payload)

    const parsedPayload = JSON.parse(decodedPayload)
    //JWT exp is expressed in seconds, not milliseconds, need to convert ( / 1000 below )

    //check if expired
    if(parsedPayload.exp < Date.now(0) / 1000) {
        //the token has expired, remove it
        localStorage.removeItem("token")
        return null
    } else {
        return token
    }
}

export function getUser() {
    const token = getToken()

    if(token){
        const payload = token.split(".")[1]
        const decodedPayload = atob(payload)
        const parsedPayload = JSON.parse(decodedPayload)
        return parsedPayload.user
    } else {
        return null
    }
}

export function logOut() {
    localStorage.removeItem("token")
}

export async function login(credentials) {
    //call login from users-api
    //should be creating a token by loggin in 
    const token = await usersAPI.login(credentials)

    //save the token, return the user
    localStorage.setItem("token", token)
    return getUser()
}

export function checkToken() {
    return usersAPI.checkToken()
        .then(dateString => new Date(dateString))
}
