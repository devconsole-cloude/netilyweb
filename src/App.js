import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Header from './Includes/Header'

import Home from './Pages/Home'
import Albums from './Pages/Albums'
import AlbumView from './Pages/AlbumView'
import Post from './Pages/Post'
import PostViewDetails from './components/PostViewDetails'

export default function App() {
  return (
    <>
      <Router>
        <Header />
        <div className="container mt-3">
        <Switch>

          <Route exact path="/" component={Home} />
          <Route exact path="/albums" component={Albums} />
          <Route exact path="/albums/:id" component={AlbumView} />
          <Route exact path="/post" component={Post} />
          <Route exact path="/post/:id" component={PostViewDetails} />
    

        </Switch>
        </div>        
      </Router>
    </>
  )
}
