import React, { useState } from 'react'
import FacebookLogin from 'react-facebook-login';
import IgComments from './IgComments'
import Navbar from './Navbar'
import AutoResponder from './AutoResponder'
import { BrowserRouter as Router } from 'react-router-dom'

function Login() {
    const [userInfo, setUserInfo] = useState({})
    const [accessToken,] = useState('EAAJbQ5TUIvsBAIZCzmJJ7nnMxOm6CPVSC5RpQDKtMahGoGZCmcZCx1NeePJtv03wCSUiOdvk7AJZB5dQapfmQUQkjDpQR2uf4yn6pydMqSTEYkiW0JhRsFha1HmYZCjfwdDKuQJJWSdOXMF2rBLTq7FO3oxU4FQVAZBiJZBJ3GRLlq4lmDgMaSKpFTZBmJy75ceg8oZBE8xC1bklnm25ZCvbfJ')
    const [igPostIdArray, setIgPostIdArray] = useState([])
    const responseFacebook = (response) => {

        // console.log("User is currently logged in")
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
