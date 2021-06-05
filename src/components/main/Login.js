import React, { useState } from 'react'
import FacebookLogin from 'react-facebook-login';
import IgComments from './IgComments'
import Navbar from './Navbar'
import { BrowserRouter as Router } from 'react-router-dom'
import { API } from 'aws-amplify';
import { getUser } from '../../graphql/queries'
import { createUser } from '../../graphql/mutations'
import axios from 'axios'
// curl -X POST \
//   https://api.instagram.com/oauth/access_token \
//   -F client_id=766007274092705 \
//   -F client_secret=b82a30b9a1a48bb5c00c030d9f94927a \
//   -F grant_type=authorization_code \
//   -F redirect_uri=https://localhost:3000/ \
//   -F code=AQAvZiEVlza-NUuJ0TOqUKIcwA2H9XLD1x_ZGAv3QlRM9CNyccN0V_0Il5lrImMYS1AjEQnlQ81gzJIM1sT5LSthTGMhCrD719diVCSUbx030kTWlPrYqYzjknXJXyj748plEM0-Ergoj0D3bT2J1i4pP9bPuW_OJzjtVeHWBQ0q0Us0rVFdZ3nR-gVDgaQZZfVs8v24DkNLmCq06TapI1W05YmND_Jg1U8QhbEOekaUCA
// AQDKQLdlnaEtiHYvy9LkrP7mhTH0b2C9hBW33-6fSM9qUwcjH49fDFGNXOHJQUHaM01zVAZKXIiGNWNvC1aFPPyvHijV7d2Lr2b8aJfdeleCb_S3l8gl2FQvss79_-d1Icggux8yBc-SNSYy-FxkocQmy6XNqwmxKtU8Xtt2XVy_dPoqkCDCovzhm54APsONbfsuDQlK5bj3dDmOp6Wp7lLZHW34pTS3jfO5YJLOP8B-1A
const userTemplate = { userId: '', positiveReplies: [], negativeReplies: [] }

function Login() {
    const [userInfo, setUserInfo] = useState(userTemplate)

    const [accessToken,] = useState('EAAJbQ5TUIvsBAGXEHQkJNwwJ0CPhg0Wa5yZBJqzwryRw82ZByszb3a1NwGwjlFyDJveAw0CpgAgD77hIJ2hihZA6q1NEWErpkrCVpH7NVi5eMVZCUZB0LmQrN4Y82aAvO1ZBz6FmgkDLTA3sNB20A6mWBqHfnQAS6H3x6bIDTHQkxlkoCLmde5FYXNRDdZALw4kBSPc6kFWHZCTGG8jrrhCmia09RAPOMkYZD')
    const [igPostIdArray, setIgPostIdArray] = useState([])
    const responseFacebook = async (response) => {
        console.log(response)
        // setUserInfo({ ...userInfo, 'userId': response.id })
        // await API.graphql({ query: createUser, variables: { input: userInfo } })
        // await API.graphql({ query: createNoteMutation, variables: { input: formData } });
        // const userData = await API.graphql({ query: getUser })
        // console.log(userData)
        // await API.graphql({ query: createUser, varaibles: { input: response.id } })
        // console.log(userData)
        let facebookIdUrl = `https://graph.facebook.com/v10.0/me/accounts?access_token=${accessToken}`
        axios.get(facebookIdUrl)
            .then(function (response) {
                // handle success
                return response.data.data[0].id;
            }).then(instagramId => {
                let instaBizAccUrl = `https://graph.facebook.com/v10.0/${instagramId}?fields=instagram_business_account&access_token=${accessToken}`
                return instaBizAccUrl
            }).then(url => {
                getInstaBusinessId(url)
            })
            .catch(function (error) {
                console.log(error);
                alert("Instagram business account not configured.")
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
        fetch(`https://graph.facebook.com/v10.0/${igBizId}/media?access_token=${accessToken}`)
            .then(data => data.json())
            .then(data => {
                fetchCommentsObject(data.data)
            })
    }
    const fetchCommentsObject = (postIdArray) => {
        let promises = postIdArray.map(postId => {
            return fetch(`https://graph.facebook.com/v10.0/${postId.id}?fields=comments,media_url&access_token=${accessToken}`).then(promise => promise.json())
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
                <h4 style={{ color: "maroon", maxWidth: '430px', marginLeft: '-20px', marginRight: '-20px' }}>You will need an Instagram Business Account to access this project due to Instagram Graph API restrictions.</h4>
                <br />
                <h4>Preview <a href="https://github.com/exhlim/Instagram-Auto-Replier-with-NLP">here</a></h4>
                <br />
                <FacebookLogin
                    appId="350895355974560"
                    autoLoad={false}
                    fields="id"
                    callback={responseFacebook} />
            </div>
        )
    } else {
        return (
            <Router>
                <div className="navbar" ><Navbar igPostIdArrayProp={igPostIdArray} /></div>
                <div className="right-main-container">
                    <IgComments igPostIdArrayProp={igPostIdArray} fbToken={accessToken} />
                </div>
            </Router>

        )
    }

}

export default Login


// let authUserUrl = "https://api.instagram.com/oauth/authorize?client_id=766007274092705&redirect_uri=http://localhost:3000&scope=user_profile,user_media&response_type=code"

// axios.get("https://graph.instagram.com/me?fields=id,username&access_token=IGQVJVX200cm1UdzY4YzJZAWERpRW9fSmlWS1I0amttVlp5ZA2lDRDI0OU1hcnNhekJDdlI5aGNqN1hnWDRqSGQtX3pNc2ltR1loRU1lbU9GLUxpbXJVWS0ydi1JdWd2cFJ6bEJPamRyak8wZAXNWbDF0YjcwYU9MNWpTYzhF")
//     .then(function (response) {
//         // handle success
//         console.log(response);
//     })
//     .catch(function (error) {
//         // handle error
//         console.log(error);
//     })
//     .then(function () {
//         // always executed
//     });