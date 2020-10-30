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
    const [accessToken,] = useState('EAAJbQ5TUIvsBAMZBVqVDxZAIhNqEDrtUYfZCk7ZAkCJ5KIZC0M4XsL6nKZCklZC1SiZBHJb1La5wEjB7Q5tewWIpxQZBRGxVJi972PmvZCArvSlXuQpAxw5dSr5W2aWJZBJpjPWMM9nfUBgZBZCB804upyCyg72DCZANI6UMHuKui5naxErRDubyqb0KSejdaywxxOMDMMeJCRBjYZA78mGZAcBkvnRb')
    const [igPostIdArray, setIgPostIdArray] = useState([])
    const responseFacebook = async (response) => {
        setUserInfo({ ...userInfo, 'userId': response.id })
        await API.graphql({ query: createUser, variables: { input: userInfo } })
        // await API.graphql({ query: createNoteMutation, variables: { input: formData } });
        const userData = await API.graphql({ query: getUser })
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
            })
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
                <h4 style={{ color: "maroon", maxWidth: '370px' }}>You will need an Instagram Business Account to access this project due to Instgram Graph API restrictions</h4>
                <br />
                <h4>Preview <a href="https://github.com/exhlim/sei24-project4">here</a></h4>
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
