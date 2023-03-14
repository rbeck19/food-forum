export default function Comment({ comment, userId, userName, handleDelete }) {

    const commentId = comment.id

    const user = comment.owner.split("@")
    

    return (
        <>
        <div><h2>{comment.note}</h2>  <p>posted by: {user[0]}</p></div>
        {userName == comment.owner ? <button className='delete-comment button' onClick={() => handleDelete(commentId)}>Delete</button> : null}
        </>
    )
}