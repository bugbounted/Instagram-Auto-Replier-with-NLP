import React, { useEffect } from 'react'
import IndPost from './IndPost'
import { Route, Switch, useHistory } from 'react-router-dom'
function IgComments({ igPostIdArrayProp }) {
    const history = useHistory()
    useEffect(() => {
        history.push("/post/0")
    }, [igPostIdArrayProp])
    return (
        <div className="data-container">
            <Switch>
                {igPostIdArrayProp.map((post, index) =>
                    <Route path={`/post/${index}`} key={index}>
                        <IndPost comments={post.comments.data} postImage={post.media_url} />
                    </Route>
                )}
            </Switch>
        </div>
    )
}

export default IgComments
