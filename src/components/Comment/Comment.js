import * as commentAPI from "../../utilities/comment-api";

export default function Comment({ comment, userId }) {
    console.log(comment)
    console.log(comment.id)
    console.log(comment.owner)
    console.log(userId)
    const commentId = comment.id

    
    async function handleDelete(commentId){
        try{
            await commentAPI.deleteComment(commentId)
        }catch(err){
            console.log(err)
        }
    }

    return (
        <>
        <div><h2>{comment.note}</h2>  <p>posted by:{comment.owner}</p></div>
        {userId == comment.owner ? <button className='delete-comment button' onClick={() => handleDelete(commentId)}>Delete</button> : null}
        </>
    )
}