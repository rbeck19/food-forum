import * as commentAPI from "../../utilities/comment-api";
import "./Comment.css"

export default function Comment({ comment, userId, userName, handleDelete }) {
 
    const commentId = comment.id
    const user = comment.owner.split("@")

    return (
        <>
        <div className="comment-container">
            <div className="comment-body-container">
                <div className="comment-text-area"><p>&nbsp;&nbsp;{comment.note}</p></div>
                <div className="comment-by-area">
                    <p>By:&nbsp; {user[0]}&nbsp;</p>
                    {userName == comment.owner ? <button className='delete-comment button' onClick={() => handleDelete(commentId)}>Delete</button> : null}
                </div>
            </div>  
        </div>
        </>
    )
}