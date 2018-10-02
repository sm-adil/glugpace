import React, { Component } from 'react'
import Posts from './Posts';

const posts = require('./PostFile').posts;

class BlogList extends Component {
  state = {
    posts: posts
  }
  
  render() {
    return (
      <div className="padding container">
        <Posts posts={this.state.posts}/>
      </div>
    )
  }
}
export default BlogList;