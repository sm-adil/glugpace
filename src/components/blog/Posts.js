import React from 'react'
import { Link } from 'react-router-dom'
import image from '../layout/images/chars.png'

const Posts = ({posts}) => {
  const postList = posts.length ? (
    posts.map(post => {
        console.log(post)
        return (
            <div className="blog-card" key={post.id}>
                <div className="blog-post-image">
                    <img src={image} alt="post" />
                </div>
                <div className="blog-post-data">
                    <Link to={'/blog/' + post.id}>
                        <p className="blog-post-title">{post.title}</p>
                    </Link>
                    <p className="blog-post-desc">Created by {post.username}</p>
                </div>
            </div>
        )
    })
  ) : (
      <div className="center">No posts yet!</div>
  )
  return (
    <React.Fragment>
        { postList }
    </React.Fragment>
  )
}
export default Posts;