import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Header extends Component {

    // componentDidMount(){
    //     alert('Header');
    // }

    render() {
        return (
            <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" exact to="/">Navbar</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item active">
                    <Link className="nav-link" exact to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" exact to="/albums">Albums</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" exact to="/post">Posts</Link>
                </li>
                </ul>
            </div>
            </nav>

            </>
        )
    }
}
