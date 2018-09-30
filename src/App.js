import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import EventList from './components/events/EventList'
import ReadEvent from './components/events/ReadEvent'
import BlogList from './components/blog/BlogList'
import ReadPost from './components/blog/ReadPost'
import TeamList from './components/team/TeamList'

import Navbar from './components/layout/Navbar'
import Home from './components/layout/Home'
import Footer from './components/layout/Footer'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
        <Navbar />
          <Switch>
            <Route exact path="/" component = { Home }></Route>
            <Route exact path="/events" component = { EventList }></Route>
            <Route exact path="/events/:event_id" component = { ReadEvent }></Route>
            <Route exact path="/blog" component = { BlogList }></Route>
            <Route exact path="/blog/:post_id" component = { ReadPost }></Route>
            <Route exact path="/team" component = { TeamList }></Route>
          </Switch>          
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;