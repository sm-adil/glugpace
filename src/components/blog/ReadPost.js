import React, { Component } from 'react'
const posts = require('./PostFile').posts; //Always use this standard

class ReadPost extends Component {
    state = {
        post: null
    }

    componentDidMount() {
        // Get the post id from route   
        let post_id = this.props.match.params.post_id;
        let selectedPost;
        posts.forEach(post => {
            if (post.id == post_id) {
                selectedPost = post;
            }
        });
        return (
            this.setState({
                post:selectedPost
            })
        )
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