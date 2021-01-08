import React from 'react'
import {Link} from 'react-router-dom'



const PostView = myposts => {
    return (
        <div className="col-md-12 mt-3">
            <h5>{myposts.mypost.title}</h5>
            <p>{myposts.mypost.body}</p>
            <p><Link className="btn btn-info btn-sm" to={`/post/${myposts.mypost.id}`}>View</Link></p>
        </div>
    )
}


export default PostView;
