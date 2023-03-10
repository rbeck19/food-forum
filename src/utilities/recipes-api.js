import sendRequest from "./users-api";

const BASE_URL = "http://127.0.0.1:8000/api/recipes/"

//GET Recipe
export function getALL() {
    return sendRequest(BASE_URL)
}

