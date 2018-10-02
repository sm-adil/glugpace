import React from 'react'
import { Link } from 'react-router-dom'
import image from '../layout/images/chars.png'

const Posts = ({posts}) => {
  const postList = posts.length ? (
    posts.map(post => {
        return (
            <Link to={'/glugpace/blog/' + post.id}>
                <div className="blog-card" key={post.id}>
                    <div className="blog-post-image">
                        <img src={image} alt="post" />
                    </div>
                    <div className="blog-post-data">
                            <p className="blog-post-title">{post.title}</p>
                        <p className="blog-post-desc">Published by {post.username}</p>
                    </div>
                </div>
            </Link>
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