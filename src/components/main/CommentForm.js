import React, { useState } from 'react'
function CommentForm({ comment, commentId, actualComment, fbToken }) {
    const [indComment, setIndComment] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        if (indComment.length !== 0) {
            let postCommentUrl = `https://graph.facebook.com/v10.0/${commentId}/replies?message=${indComment}&access_token=${fbToken}`
            fetch(postCommentUrl, {
                method: 'POST',
            }).then(response => {
                alert(`Replied to comment: \n '${actualComment}' \n with \n '${indComment}'`)
                setIndComment('')
            })
        } else {
            alert('Empty input field.')
        }
    }
    const handleChange = (e) => {
        setIndComment(e.target.value)
    }
    return (
        <>
            <form onSubmit={handleSubmit} >
                <input value={indComment} name="comment" onChange={handleChange} placeholder="Input message here" className="reply-field" />
                <input type="submit" value="Send ➤" className="submit-button" />
            </form>
        </>
    )
}

export default CommentForm
