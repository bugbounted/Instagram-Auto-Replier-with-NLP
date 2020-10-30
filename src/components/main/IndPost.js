import React, { useState, useEffect } from 'react'
import CommentForm from './CommentForm'
import AutoResponder from './AutoResponder'
function IndPost({ comments, postImage }) {
    console.log(postImage)
    const [sortedComments, setSortedComments] = useState(comments)
    const [commentSentiments, setCommentSentiments] = useState([])
    useEffect(() => {
        if (sortedComments.length) {
            let fetchSentimentsUrl = `https://language.googleapis.com/v1/documents:analyzeSentiment?key=AIzaSyAYOP4jg1hjb3v1ntD9OzVw10FweEjOK68`
            let promises = comments.map(post => {
                return fetch(fetchSentimentsUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        "document": {
                            "type": "PLAIN_TEXT",
                            "content": post.text
                        },
                        "encodingType": "UTF8"
                    })
                }).then(promise => promise.json()).catch(err => console.log("Errorr", err))
            })
            Promise.all(promises).then(resultingSentiments => resultingSentiments).then(data => {
                let reverseData = data.slice(0).reverse()
                console.log(reverseData)
                setCommentSentiments(reverseData)
            })
        }
    }, [])
    return commentSentiments.length ?
        <div className="post-container">
            <img src={(/video/gi).test(postImage) ? postImage + '.gif' : postImage} style={{ maxHeight: '300px' }} />
            <div className="responder-container">
                <div className="comments-container">
                    <ul>
                        {sortedComments.slice(0).reverse().map((comment, index) => {
                            return <div key={index}>
                                <li >{comment.text} | <span
                                    style={commentSentiments[index].sentences[0].sentiment.score > 0.5 ? { color: 'green' } : commentSentiments[index].sentences[0].sentiment.score < -0.5 ? { color: "red" } : { color: "#D4AF37" }}>
                                    Sentiment Score : {commentSentiments[index].sentences[0].sentiment.score}</span></li>
                                <CommentForm comment={comment.text} commentId={comment.id} actualComment={comment.text} />
                            </div>
                        })}
                    </ul>
                </div>
                <AutoResponder comments={sortedComments} sentiments={commentSentiments.slice(0).reverse()} />
            </div>
        </div> : <div className="loading">Loading.....</div>

}

export default IndPost
