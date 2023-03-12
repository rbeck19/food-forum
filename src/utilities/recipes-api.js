
import sendRequest from "./users-api";

const BASE_URL = "http://127.0.0.1:8000/api/recipes/"

//GET Recipe
export function getALL() {
    return sendRequest(BASE_URL)
}

// POST Recipe
export async function create(recipeData) {
    return sendRequest(`${BASE_URL}`, 'POST', recipeData)
}

// SHOW Recipe
export async function show(data_Id) {
    try {
        const recipe = await sendRequest(`${BASE_URL}${data_Id}/`)
        return recipe
    } catch(err) {
        console.error(err)
    }
}

// DELETE Recipe
export async function remove(recipeId) {
    return sendRequest(`${BASE_URL}${recipeId}`, "DELETE")
}

// UPDATE Recipe