import React, { useState } from 'react'
function CommentForm({ comment, commentId, actualComment }) {
    const [indComment, setIndComment] = useState('')
    const [accessToken,] = useState('EAAJbQ5TUIvsBAIZCzmJJ7nnMxOm6CPVSC5RpQDKtMahGoGZCmcZCx1NeePJtv03wCSUiOdvk7AJZB5dQapfmQUQkjDpQR2uf4yn6pydMqSTEYkiW0JhRsFha1HmYZCjfwdDKuQJJWSdOXMF2rBLTq7FO3oxU4FQVAZBiJZBJ3GRLlq4lmDgMaSKpFTZBmJy75ceg8oZBE8xC1bklnm25ZCvbfJ')
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
