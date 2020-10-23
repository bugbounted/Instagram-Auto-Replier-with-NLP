import React, { useState } from 'react'
function CommentForm({ comment, commentId, actualComment }) {
    const [indComment, setIndComment] = useState('')
    const [accessToken,] = useState('EAAJbQ5TUIvsBAFqyIZCbkpnwURS5rZB2DQtqMGPQdflwbEiLKjzFUWxcGyi626RlcEIycUf07TZCt6SNNiQOFIQ5qZAWluOVRly8RqSeKvnUk7KV8oyqZBZAeUCqK0ZAvAoizn7jidaGX83xjCAycmfHtP72PW9OUIaPtEMo3a0To3j55XBHg3KfWFUjjZAttJkBR0Bq1rez0ajchI3GORGLN2CgCadI26QZD')
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
