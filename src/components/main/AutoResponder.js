import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
function AutoResponder({ sentiments, comments }) {
    let responsePositive = []
    let responseNegative = []
    const [accessToken,] = useState('EAAJbQ5TUIvsBAADq9Unv7gZBqmbxVTfUmGrfdHFr3NOdpqFZBFW21u8Vb96D48hcuY0n8mZCYVP3f1SgU68mqtXFjnSwPnhZAhKRlN17sUwl4i4gTKQLszXPUf8RxFG701AnuDMB3j2XTdb1ARNYHjaQsWpVKatUghuvZAnEnkamAZCmMJ9FgeZBpVZCpOfHlny4QDwF3p5mujX9ZALmO2ZCZCl')
    // console.log(sentiments)
    // console.log(comments)
    const [positiveArray, setPositiveArray] = useState(["Thank you for your support! We have something new coming up soon, so do check us out regularly!", "🔥🔥🔥", "Dont forget to recommend us to your friends!"])
    const [negativeArray, setNegativeArray] = useState(["Hi thank you for your feed back. We will strive to improve!"])
    const badResponse = "Replied when sentiments < -0.5"
    const submitPositiveComments = () => {
        sentiments.forEach((comment, index) => {
            if (comment.documentSentiment.score > 0.7) {
                responsePositive.push(index)
            }
        })
        if (responsePositive.length) {
            let promises = responsePositive.map((id, index) => {
                return fetch(`https://graph.facebook.com/v8.0/${comments[id].id}/replies?message=${positiveArray[index % positiveArray.length]}&access_token=${accessToken}`, {
                    method: "POST"
                }).then(promise => promise.json())
            })
            Promise.all(promises).then(response => alert("Responded! Check your instagram"))
        } else {
            alert("No matching comments found")
        }
    }
    const submitNegativeComments = () => {
        sentiments.forEach((comment, index) => {
            if (comment.documentSentiment.score < -0.5) {
                responseNegative.push(index)
            }
        })
        if (responseNegative.length) {
            let promises = responseNegative.map((id, index) => {
                return fetch(`https://graph.facebook.com/v8.0/${comments[id].id}/replies?message=${negativeArray[index % negativeArray.length]}&access_token=${accessToken}`, {
                    method: "POST"
                }).then(promise => promise.json())
            })
            Promise.all(promises).then(response => alert("Responded! Check your instagram"))
        } else {
            alert("No matching comments found")
        }
    }
    return (
        <>
            <div>
                <h2 style={{ textDecoration: "underline" }}>Auto Responder</h2>
                <span style={{ color: "green" }}>Replied when sentiments > 0.7</span>
                <ul>
                    {positiveArray.map((positiveReply, index) => {
                        return <li key={index}>{positiveReply}</li>
                    })}
                    {/* <li>Thank you for your support! We have something new coming up soon, so do check us out regularly!</li>
                    <li>🔥🔥🔥</li>
                    <li>Dont forget to recommend us to your friends!</li> */}
                </ul>
                <Button onClick={submitPositiveComments}>Auto reply</Button>
                <br />
                <br />
                <br />
                <span style={{ color: "red" }}>{badResponse}</span>
                <ul>
                    {negativeArray.map((negativeReply, index) => {
                        return <li key={index}>{negativeReply}</li>
                    })}
                    {/* <li>Hi thank you for your feed back. We will strive to improve!</li> */}
                </ul>
                <Button onClick={submitNegativeComments}>Auto reply</Button>
            </div>

        </>
    )
}

export default AutoResponder
