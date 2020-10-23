import React, { useState } from 'react'
function CommentForm({ comment, commentId, actualComment }) {
    const [indComment, setIndComment] = useState('')
    const [accessToken,] = useState('EAAJbQ5TUIvsBAIWZAl2Cv2cZB3vOXU0vAyuwJfDIJBDPIO2kOnw7ITLk0a320syicGiwCqZBWWZCQtO7skAnZAHMPT2SmpGACHZBFN7J6fp79b1lquZCFZBgPKiHtAzOYxZAiMZBmklT4n5IjSZAUrx3vLzXfhaDZCZAikSOZBNCikJkPVQbDgftSZAzR4PwfyRYhpatJgDBCuZChP7kFYf5ZAHfllabk')
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
