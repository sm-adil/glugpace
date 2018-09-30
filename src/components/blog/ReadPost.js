import React, { Component } from 'react'
import postFile from './PostFile.json'

class ReadPost extends Component {
  state = {
      post: null
  }

  componentDidMount() {
      // Get the post id from route   
    //   let post_id = this.props.match.params.post_id;
      
      postFile.filter(postData => {
        // Need some functionality to filter single blog post and update the state
        console.log(postData)
        return (
             this.setState({
                post: postData
            })
        )
    })
           
    
  }
  render() {
      const post = this.state.post ? (
        <div className="data-content">
            <h4 className="data-heading">{this.state.post.title}</h4>
            <p>{this.state.post.body}</p>
        </div>
      ) : (
          <div className="center">Loading post...</div>
      )
      return (
        <div className="padding container">
            {post}
        </div>
      )
  }
}
export default ReadPost;