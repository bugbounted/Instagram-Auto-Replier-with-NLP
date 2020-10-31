import React, { useState } from 'react'
import FacebookLogin from 'react-facebook-login';
import IgComments from './IgComments'
import Navbar from './Navbar'
import AutoResponder from './AutoResponder'
import { BrowserRouter as Router } from 'react-router-dom'
import { API } from 'aws-amplify';
import { getUser } from '../../graphql/queries'
import { createUser } from '../../graphql/mutations'

const userTemplate = { userId: '', positiveReplies: [], negativeReplies: [] }

function Login() {
    const [userInfo, setUserInfo] = useState(userTemplate)
    const [accessToken,] = useState('EAAJbQ5TUIvsBAADq9Unv7gZBqmbxVTfUmGrfdHFr3NOdpqFZBFW21u8Vb96D48hcuY0n8mZCYVP3f1SgU68mqtXFjnSwPnhZAhKRlN17sUwl4i4gTKQLszXPUf8RxFG701AnuDMB3j2XTdb1ARNYHjaQsWpVKatUghuvZAnEnkamAZCmMJ9FgeZBpVZCpOfHlny4QDwF3p5mujX9ZALmO2ZCZCl')
    const [igPostIdArray, setIgPostIdArray] = useState([])
    const responseFacebook = async (response) => {
        // setUserInfo({ ...userInfo, 'userId': response.id })
        // await API.graphql({ query: createUser, variables: { input: userInfo } })
        // await API.graphql({ query: createNoteMutation, variables: { input: formData } });
        // const userData = await API.graphql({ query: getUser })
        // console.log(userData)
        // await API.graphql({ query: createUser, varaibles: { input: response.id } })
        // console.log(userData)
        let getFacebookIdUrl = `https://graph.facebook.com/v8.0/me/accounts?access_token=${accessToken}`
        fetch(getFacebookIdUrl)
            .then(data => data.json())
            .then(data =>
                data.data[0].id
            ).then(instagramId => {
                let instaBizAccUrl = `https://graph.facebook.com/v8.0/${instagramId}?fields=instagram_business_account&access_token=${accessToken}`
                return instaBizAccUrl
            }).then(url => {
                getInstaBusinessId(url)
            }).catch(error => alert("Instagram business account not configured."))
    }
    const getInstaBusinessId = (url) => {
        fetch(url)
            .then(data => data.json())
            .then(data => data.instagram_business_account.id)
            .then(igBizId => {
                fetchMediaIdArray(igBizId)
            })
    }
    const fetchMediaIdArray = (igBizId) => {
        fetch(`https://graph.facebook.com/v8.0/${igBizId}/media?access_token=${accessToken}`)
            .then(data => data.json())
            .then(data => {
                fetchCommentsObject(data.data)
            })
    }
    const fetchCommentsObject = (postIdArray) => {
        let promises = postIdArray.map(postId => {
            return fetch(`https://graph.facebook.com/v8.0/${postId.id}?fields=comments,media_url&access_token=${accessToken}`).then(promise => promise.json())
        })
        Promise.all(promises).then(result =>
            setIgPostIdArray(result)
        )
    }
    async function getUser1(userId) {
        const userData = await API.graphql({ query: { userId } })
        console.log("Here")
    }
    if (igPostIdArray.length === 0) {
        return (
            <div className="login-container">
                <h2 className="login-container__header">
                    Instagram Auto Responder
                </h2>
                <br />
                <h4 style={{ color: "maroon", maxWidth: '430px', marginLeft: '-20px', marginRight: '-20px' }}>You will need an Instagram Business Account to access this project due to Instgram Graph API restrictions.</h4>
                <br />
                <h4>Preview <a href="https://github.com/exhlim/Instagram-Auto-Replier-with-NLP">here</a></h4>
                <br />
                <FacebookLogin
                    appId="663295771288315"
                    autoLoad={false}
                    fields="id"
                    callback={responseFacebook} />,
            </div>
        )
    } else {
        return (
            <Router>
                <div className="navbar" ><Navbar igPostIdArrayProp={igPostIdArray} /></div>
                <div className="right-main-container">
                    <IgComments igPostIdArrayProp={igPostIdArray} />
                    {/* <AutoResponder /> */}
                </div>
            </Router>

        )
    }

}

export default Login
