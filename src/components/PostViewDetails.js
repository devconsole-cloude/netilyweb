import React, { Component } from 'react'
import axios from 'axios'
import PostViewDetailsComment from '../components/PostViewDetailsComment'

export default class PostViewDetails extends Component {

    constructor(props){
        super(props)
        this.state={
            postdetail:[],
            showcomments:[]
        }
    }

    componentDidMount(){
        axios.get(`https://jsonplaceholder.typicode.com/posts/${this.props.match.params.id}`)
        .then(response=>{
            this.setState({
                postdetail:response.data
            })
        })
    }

    handleShow = () => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${this.props.match.params.id}/comments`)
        .then(response=>{
            this.setState({
                showcomments:response.data
            })
            console.log(this.state.showcomments)
        })
    }

    render() {
        
        return (
            <>
                <div className="row mt-5">
                    <div className="col-md-12">
                        <h3>{this.state.postdetail.title}</h3>
                        <h6>{this.state.postdetail.body}</h6>
                    </div>

                    <div className="col-md-12 mt-5">
                        <button className="btn btn-danger btn-sm" onClick={this.handleShow}>Get Comments</button>
                    </div>


                    <div className="col-md-12 mt-5 mb-5">
                        <h3 className="p-1">Comments</h3>

                        {this.state.showcomments.map((comment)=>{
                            return(
                                <PostViewDetailsComment key={comment.id} data={comment} />

                            )
                        })}
                            
                    </div>
                    

                    

                    

                    


                </div>
            </>
        )
    }
}
