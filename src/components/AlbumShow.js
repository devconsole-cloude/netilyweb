import React from 'react'
import {Link} from 'react-router-dom'


export default function AlbumShow(props) {
    return (
        <div className="col-md-3 mt-3">
            <div className="card">
                <div className="card-body text-center">
                    <h6>{props.data.title}</h6>
                    <p>User ID: {props.data.userId}</p>
                    <Link to={`albums/${props.data.id}`} className="btn btn-primary btn-sm">View</Link>
                </div>
             </div>
        </div>
    )
}
