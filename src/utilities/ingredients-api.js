import sendRequest from "./send-request";

const BASE_URL = "/api/ingredients/"


export async function index(id) {
    return sendRequest(`${BASE_URL}/${id}`, "GET")
}

export async function create(ingredientData) {
    return sendRequest(BASE_URL + "/new", "POST", ingredientData)
}

export async function remove(ingredientId) {
    return sendRequest(`${BASE_URL}/${ingredientId}`, "DELETE")
}
