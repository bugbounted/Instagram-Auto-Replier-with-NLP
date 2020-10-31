import React, { useState } from 'react'
function CommentForm({ comment, commentId, actualComment }) {
    const [indComment, setIndComment] = useState('')
    const [accessToken,] = useState('EAAJbQ5TUIvsBAADq9Unv7gZBqmbxVTfUmGrfdHFr3NOdpqFZBFW21u8Vb96D48hcuY0n8mZCYVP3f1SgU68mqtXFjnSwPnhZAhKRlN17sUwl4i4gTKQLszXPUf8RxFG701AnuDMB3j2XTdb1ARNYHjaQsWpVKatUghuvZAnEnkamAZCmMJ9FgeZBpVZCpOfHlny4QDwF3p5mujX9ZALmO2ZCZCl')
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
