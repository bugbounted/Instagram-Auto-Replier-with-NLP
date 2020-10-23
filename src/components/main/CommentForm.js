import React, { useState } from 'react'
function CommentForm({ comment, commentId, actualComment }) {
    const [indComment, setIndComment] = useState('')
    const [accessToken,] = useState('EAAJbQ5TUIvsBAPqz8eBzuuOrEkK5yKgjojNPZBA5V6ZBVGghCxn8IFnmVQJyDjZBZCBBUC6QzfYmS3ZByxvuiHSwiE2SP4G1FLdyLSJhSOOlKf4MA7baeJUcDBGcolVtTrEkDXIAbl3HFuBYwSFNQS6uwQcGqrl8fp6WlP8aZC2fTMxfcpw97eLK93MNs0Y1lQ35ECHAuYSyvprR5B4JRZCjCAoXVST91EZD')
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
