import React, { useState } from 'react'
function CommentForm({ comment, commentId, actualComment }) {
    const [indComment, setIndComment] = useState('')
    const [accessToken,] = useState('EAAJbQ5TUIvsBAMZBVqVDxZAIhNqEDrtUYfZCk7ZAkCJ5KIZC0M4XsL6nKZCklZC1SiZBHJb1La5wEjB7Q5tewWIpxQZBRGxVJi972PmvZCArvSlXuQpAxw5dSr5W2aWJZBJpjPWMM9nfUBgZBZCB804upyCyg72DCZANI6UMHuKui5naxErRDubyqb0KSejdaywxxOMDMMeJCRBjYZA78mGZAcBkvnRb')
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
