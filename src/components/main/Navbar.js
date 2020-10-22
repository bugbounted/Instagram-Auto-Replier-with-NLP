import React from 'react'
import { Link, useLocation } from 'react-router-dom'
function Navbar({ igPostIdArrayProp }) {
    const location = useLocation()
    const postId = parseInt(location.pathname.split('/')[2])
    let olderPost = "Older Post --->"
    let earlierPost = "<--- Earlier Post"
    if (postId === 0) {
        return (
            <>
                <div></div>
                <Link to={`/post/${postId + 1}`}>{olderPost}</Link>
            </>)
    } else if (postId === igPostIdArrayProp.length - 1) {
        return (
            <>
                <Link to={`/post/${postId - 1}`}>{earlierPost}</Link>
                <div></div>
            </>)
    } else {
        return (
            <>
                <Link to={`/post/${postId - 1}`}>{earlierPost}</Link>
                <Link to={`/post/${postId + 1}`}>{olderPost}</Link>
            </>
        )
    }
}

export default Navbar
