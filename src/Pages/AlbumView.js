import React, { Component } from 'react'
import AlbumShowImage from '../components/AlbumShowImage'
import axios from 'axios'

export default class AlbumView extends Component {

    state={
        photos:[]
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/photos')
        .then(response=>{
            this.setState({
                photos:response.data
            })
            console.log(this.state.photos)
        })
    }

    render() {
        return (
            <>
                <h2>Album ID is- {this.props.match.params.id}</h2> 

                <div className="row mt-5">
                    {this.state.photos.map((photo) => {

                        
                        
                        photo.id===1
                        ?
                            <p key={photo.id}>{photo.id}</p>
                        :
                        <>
                            <p>ss</p>
                        </>

                    })}
                </div>
            </>
        )
    }
}
