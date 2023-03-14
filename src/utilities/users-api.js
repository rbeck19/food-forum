//handle API calls here
import { getToken } from "./users-service"

const BASE_URL = 'http://127.0.0.1:8000/api/'


export async function signUp(userData) {

    return sendRequest(BASE_URL + "sign-up/", "POST", userData)
}

export async function logIn(credentials) {

    return sendRequest(BASE_URL + "sign-in/", "POST", credentials)
}

export default async function sendRequest(url, method="GET", payload=null) {
    const options = { method }
    if (payload){
        options.headers = { "Content-Type": "application/json" }
        options.body = JSON.stringify(payload)
    }
    //if there is a token inlucucde it in request
    const token = getToken()
    //console.log("this is it: " + token)
    if(token) {
        //make sure we have headers on our options
        options.headers = options.headers || {}
        //add in our token with an authorization header
        options.headers.Authorization = `Token ${token}`
        //make sure you capitalize Authorization
        //best practice is to begin with "Bearer "
    }
    const res = await fetch(url, options)
    if(res.ok) {
        return res.json()
    } else {
        throw new Error("Bad Request")
    }
}
