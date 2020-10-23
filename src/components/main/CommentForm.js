import React, { useState } from 'react'
function CommentForm({ comment, commentId, actualComment }) {
    const [indComment, setIndComment] = useState('')
    const [accessToken,] = useState('EAAJbQ5TUIvsBAOJbZCgWXFAR1v3ZCRq5ZBHQA7NzYUfhDc0bLQuBzbX2Fm9RMtWinpqo0IvwcCq3ZBIYZAXZAioHX29V4R9puJBZCrSaEqXmesZCaUCJjKL7twxuDKY8inFo7ZBKQjr3PxZCQQXobzvmvx87Ij8UtCmvuZCdEk0JMaTQ2f3lB6ZBwLHZC6eCFwKM3avaLuyAxCfiGZBsEP4XhAZBvJh')
    const handleSubmit = (e) => {
        e.preventDefault()
        if (indComment.length !== 0) {
            let postCommentUrl = `https://graph.facebook.com/v8.0/${commentId}/replies?message=${indComment}&access_token=${accessToken}`
            fetch(postCommentUrl, {
                method: 'POST',
            }).then(response => {
                alert(`Replied to comment: \n '${actualComment}' \n with \n '${indComment}'`)
                setIndComment('')
            })
        } else {
            alert('Empty input field')
        }
    }
    const handleChange = (e) => {
        setIndComment(e.target.value)
    }
    return (
        <>
            <form onSubmit={handleSubmit} >
                <input value={indComment} name="comment" onChange={handleChange} placeholder="Input message here" className="reply-field" />
                <input type="submit" value="Submit" />
            </form>
        </>
    )
}

export default CommentForm
