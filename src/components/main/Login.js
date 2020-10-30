import React, { useState } from 'react'
import FacebookLogin from 'react-facebook-login';
import IgComments from './IgComments'
import Navbar from './Navbar'
import AutoResponder from './AutoResponder'
import { BrowserRouter as Router } from 'react-router-dom'
import { API } from 'aws-amplify';
import { createUser } from '../../graphql/mutations'
import { getUser } from '../../graphql/queries'
function Login() {
    const [userInfo, setUserInfo] = useState({})
    const [accessToken,] = useState('EAAJbQ5TUIvsBAD8iu34QoWLiJUiBnvxOq2MERsknXzrjpakfYZAz3uSHgclWp9SWFF3ZBRwKEVtPSgRNSKGNBZArJQaPmDbcDmMyWZBF2MZBNc9CZBxstPRNHTwzDBcseOKuG8yJhvygRpW0KpOeH88ZBE4D1uRZCXk2PvL8wbJ5l7kWwqHHw4lNh0eyohEhG6VBIOmqpc92GopH1TqAZCtaZB')
    const [igPostIdArray, setIgPostIdArray] = useState([])
    const responseFacebook = async (response) => {
        // const userId = response.id
        // const userData = await API.graphql({ query: { userId } })
        // console.log(userData)
        let getFacebookIdUrl = `https://graph.facebook.com/v8.0/me/accounts?access_token=${accessToken}`
        fetch(getFacebookIdUrl)
            .then(data => data.json())
            .then(data => {
                setUserInfo({ ...userInfo, igId: data.data[0].id })
                return data.data[0].id
            }).then(instagramId => {
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
    async function getUser(userId) {
        const userData = await API.graphql({ query: { userId } })
        console.log("Here")
    }
    if (igPostIdArray.length === 0) {
        return (
            <div className="login-container">
                <h2 className="login-container__header">
                    Instagram Auto Responder
                </h2>
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
