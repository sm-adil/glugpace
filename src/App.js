import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ScrollToTop from './ScrollToTop';

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
        <ScrollToTop>
        <div className="App">
        <Navbar />
          <Switch>
            <Route exact path="/glugpace/" component = { Home }></Route>
            <Route exact path="/glugpace/events" component = { EventList }></Route>
            <Route exact path="/glugpace/events/:event_id" component = { ReadEvent }></Route>
            <Route exact path="/glugpace/blog" component = { BlogList }></Route>
            <Route exact path="/glugpace/blog/:post_id" component = { ReadPost }></Route>
            <Route exact path="/glugpace/team" component = { TeamList }></Route>
          </Switch>          
          <Footer />
        </div>
        </ScrollToTop>
      </BrowserRouter>
    );
  }
}

export default App;