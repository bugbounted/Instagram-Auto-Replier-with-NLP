# Instagram Auto Replier with Natural Language Processing

## About

Hosted [here](https://master.d6gka8ynhgxry.amplifyapp.com/) on AWS Amplify. (Preview below)

A web application targeted for Instagram business and creators account to automatically reply to comments to increase user engagement for Instagram's algorithm.
Comments from individual posts are passed into Google Clouds Platform's Natural Language Processing (NLP) to determine their sentiments.

Users will be able to define a standard set of postive targeted and negative targeted replies as well as the sentiment value which they want to reply to. (Sentiment value ranges from -1 to 1)

Example:
 - Positive targeted replies for sentiments > 0.7:
    - Thank you for your support!
    - 🔥🔥🔥
    - Do come and visit us again!
 - Negative targeted replies for sentiments < -0.5:
    - Thank you for your feedback, we will strive to achieve a better experience for you.

Replies can either be cycled through or randomized to reduce the presence of a bot and to make replies more human.

## Technologies Used

1. React
2. AWS hosting
3. GraphQL
4. DynamoDB
5. Facebook login API
6. Instagram Graph API
7. Google Cloud Platform Natural Language API

## Preview list
  * [Facebook login](#facebook-login-retreving-instagram-posts-and-comments)
  * [Replying to positive comments](#replying-to-positive-comments-above-a-specific-sentiment-value)
  * [Replying to negative comments](#replying-to-negative-comments-below-a-specific-sentiment-value)
  * [Replying to individual comments](#replying-to-individual-comments)

## Facebook login retreving Instagram Posts and Comments
![](./public/login.gif)

## Replying to positive comments above a specific sentiment value

 * ### Responding to all comments from a post with a sentiment value of > 0.7 

![](./public/positive.gif)

## Replying to negative comments below a specific sentiment value

 * ### Responding to all comments from a post with a sentiment value of < -0.5 

![](./public/negative.gif)

## Replying to individual comments

 * ### Responding to comments in a standard way 

![](./public/individual.gif)

## Credits

Developers: exhlim (Eugene Lim) © 2020