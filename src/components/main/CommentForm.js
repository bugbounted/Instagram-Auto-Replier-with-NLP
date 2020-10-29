import React, { useState } from 'react'
function CommentForm({ comment, commentId, actualComment }) {
    const [indComment, setIndComment] = useState('')
    const [accessToken,] = useState('EAAJbQ5TUIvsBAD8iu34QoWLiJUiBnvxOq2MERsknXzrjpakfYZAz3uSHgclWp9SWFF3ZBRwKEVtPSgRNSKGNBZArJQaPmDbcDmMyWZBF2MZBNc9CZBxstPRNHTwzDBcseOKuG8yJhvygRpW0KpOeH88ZBE4D1uRZCXk2PvL8wbJ5l7kWwqHHw4lNh0eyohEhG6VBIOmqpc92GopH1TqAZCtaZB')
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
