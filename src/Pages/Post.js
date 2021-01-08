import React, { Component } from 'react'
import PostView from '../components/PostView'
import axios from 'axios'

export default class Post extends Component {

    constructor(props){
        super(props)
        this.state={
            posts:[]
        }
    }

    handleShow = () => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
       .then(response => {
           this.setState({
               posts:response.data
           })
       })
    }

    
    render() {
        return (
            <>
                <h2>Posts <button className="btn btn-success" onClick={this.handleShow}>Show All Posts</button> </h2>
                <div className="row mt-2">
                    {this.state.posts.map((post)=>{
                        return(
                            <PostView key={post.id} mypost={post} />
                        )
                    })}
                    
                </div> 
            </>
        )
    }
}
