import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
function AutoResponder({ sentiments, comments }) {
    let responsePositive = []
    let responseNegative = []
    const [accessToken,] = useState('EAAJbQ5TUIvsBAFqyIZCbkpnwURS5rZB2DQtqMGPQdflwbEiLKjzFUWxcGyi626RlcEIycUf07TZCt6SNNiQOFIQ5qZAWluOVRly8RqSeKvnUk7KV8oyqZBZAeUCqK0ZAvAoizn7jidaGX83xjCAycmfHtP72PW9OUIaPtEMo3a0To3j55XBHg3KfWFUjjZAttJkBR0Bq1rez0ajchI3GORGLN2CgCadI26QZD')
    console.log(sentiments)
    console.log(comments)
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
                <h3 >Auto Responder</h3>
                <span style={{ color: "green" }}>Replied when sentiments > 0.7</span>
                <ul>
                    <li>Thank you for your support! We have something new coming up soon, so do check us out regularly!</li>
                    <li>🔥🔥🔥</li>
                    <li>Dont forget to recommend us to your friends!</li>
                </ul>
                <Button onClick={submitPositiveComments}>Auto reply</Button>
                <br />
                <br />
                <br />
                <span style={{ color: "red" }}>{badResponse}</span>
                <ul>
                    <li>Hi thank you for your feed back. We will strive to improve!</li>
                </ul>
                <Button onClick={submitNegativeComments}>Auto reply</Button>
            </div>

        </>
    )
}

export default AutoResponder
