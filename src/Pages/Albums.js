import React, { Component } from 'react'
import axios from 'axios';
import AlbumShow from '../components/AlbumShow'


export default class Albums extends Component {

    constructor(props){
        super(props)
        this.state=({
            name:'',
            album:[]
        })
    }


    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/albums')
        .then(response => {
            this.setState({
                album:response.data
            })
        
        })
        
    }

    render() {
        return (
            <div className="row">

                {this.state.album.map((album)=>{
                    return(
                        <AlbumShow key={album.id} data={album} />
                    )
                })}
                

            </div>
        )
    }
}
