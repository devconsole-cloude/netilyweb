import React from 'react'

export default function PostViewDetailsComment(props) {
    return (
        <div className="col-md-12 mt-5">
                <h5>{props.data.name}</h5>
                <h5>{props.data.email}</h5>
                <p>{props.data.body}</p>
        </div>
    )
}
