import sendRequest from "./users-api";

const BASE_URL = "https://recipe-forum.onrender.com/api/comment/"
// const BASE_URL = "http://localhost:8000/api/comment/"

//GET comment
export function getComments() {
    
    return sendRequest(BASE_URL)
}

// POST comment
export async function createComment(comment) {
    try {
        const recipe = await sendRequest(`${BASE_URL}`, 'POST', comment)
        return recipe
    } catch(err) {
        console.error(err)
    }
}


// DELETE comment
export async function deleteComment(commentId) {
    try {
        await sendRequest(`${BASE_URL}${commentId}/`, 'DELETE')
        return 
    } catch (err) {
        console.error(err)
    }
}