import React, { Component } from 'react'
import postFile from './PostFile.json'
import Posts from './Posts'

class BlogList extends Component {
  state = {
    posts: postFile
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