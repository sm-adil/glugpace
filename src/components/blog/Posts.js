import React from 'react'
import { Link } from 'react-router-dom'

const Posts = ({posts}) => {
  const postList = posts.length ? (
    posts.map(post => {
        return (
            <div key={post.id}>
                <Link to={'/glugpace/blog/' + post.id}>
                <div className="blog-card" >
                    <div className="blog-post-image">
                        <img src={require(`${post.imageURl}`)} alt="post" />
                    </div>
                    <div className="blog-post-data">
                            <p className="blog-post-title">{post.title}</p>
                        <p className="blog-post-desc">Published by <b>{post.username}</b></p>
                    </div>
                </div>
                </Link>
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