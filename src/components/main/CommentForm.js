import React, { useState } from 'react'
function CommentForm({ comment, commentId, actualComment }) {
    const [indComment, setIndComment] = useState('')
    const [accessToken,] = useState('EAAJbQ5TUIvsBAPSIWZC6eLV7jsqgIidxC9ZArAWgT5h0VC5bsXB9Acl8ZBpworBICGpQn6LHn6vcJC4F7B9ZCpKtatDFnC8APKpbQOXGcV7iOSsNC2DBha4EZCAi0tCZAuMs6M31EcQJyJns7IoRbNLCrDVJdUDP1E7q8FuoF6vd3v9RkwZCg9w8QKG0LqjDdJcZBVA1rhH7gpsfMIwSZAIuA')
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
                <input type="submit" value="Send ➤" className="submit-button" />
            </form>
        </>
    )
}

export default CommentForm
