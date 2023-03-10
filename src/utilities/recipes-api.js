import sendRequest from "./send-request";

const BASE_URL = "/api/recipe/"


export async function show() {
    return sendRequest(BASE_URL, "GET")
}

// sending request to api to create recipe
export async function create(recipeData) {
    return sendRequest(BASE_URL + "/new", "POST", recipeData)
}

// 
export async function remove(recipeId) {
    return sendRequest(`${BASE_URL}/${recipeId}`, "DELETE")
}

export async function update(recipeId, recipeData) {
    return sendRequest(`${BASE_URL}/${recipeId}`, "PATCH", recipeData)
}
