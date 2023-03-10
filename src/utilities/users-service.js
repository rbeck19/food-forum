//handle functions
//import ALL as userAPI
import * as userAPI from "./users-api"

//waiting to get userData from SignUpForm
export async function signUp(userData) {
    const token = await userAPI.signUp(userData)

    //this will save the token in local storage
    // localStorage.setItem("token", token.user.token)
    // localStorage.setItem("userName", token.user.email)
    // localStorage.setItem("userId", token.user.id)
    // console.log(token)
    return logIn(userData)
}

export function getToken() {
    // get token from local storage
    //get tokens payload
    //check if the token has expired
    //if it hasnt return the token
    const token = localStorage.getItem("token")
    if (!token) return null
    //JWT token broken into 3 parts at '.'
    //1- is the header
    //2- is the payload
    //3- is the signature
    //split the string at the period and grab the second array element
    //const payload = token.split(".")[0]
    //JWT's are base64 encoded
    //we need to decode it to make it usable
    //JavaScript has a built in function for decoding base64 called:  atob()
    //const decodedPayload = atob(payload)
    //const parsedPayload = JSON.parse(decodedPayload)
    //JWTs exp is expressed in seconds not miliseconds so convert
    // if(parsedPayload.exp < Date.now() / 1000){
    //     //token has expired    remove it
    //     localStorage.removeItem("token")
    //     return null
    // } else {
    //     return token
    // }
    return token
}

export function getUser() {
    //use above function to obtain token
    const token = getToken()

    if (token) {
        // const payload = token.split(".")[1]
        // const decodedPayload = atob(payload)
        // const parsedPayload = JSON.parse(decodedPayload)
        // return parsedPayload.user
        return token
    } else {
        return null
    }
    //return token ? JSON.parse(atob(token.split('.')[1])).user : null;
    //this will do the above if else in one line
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

// export  function checkToken() {
//     return userAPI.checkToken()
//         .then(dateStr => new Date(dateStr))
// }