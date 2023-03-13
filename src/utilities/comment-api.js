import sendRequest from "./users-api";

const BASE_URL = "http://127.0.0.1:8000/api/comment/"

//GET comment
export function getComments() {
    
    return sendRequest(BASE_URL)
}

// POST comment
export async function createComment(recipeId, comment) {
    try {
        const recipe = await sendRequest(`${BASE_URL}${recipeId}/`, 'POST', comment)
        return recipe
    } catch(err) {
        console.error(err)
    }
}


// DELETE comment
export async function deleteComment(recipeId, commentId) {
    try {
        await sendRequest(`${BASE_URL}${recipeId}/`, 'DELETE', commentId)
        return 
    } catch (err) {
        console.error(err)
    }
}