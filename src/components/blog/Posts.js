import React from 'react'
import { Link } from 'react-router-dom'

const Posts = ({posts}) => {
  const postList = posts.length ? (
    posts.map(post => {
        return (
            <div key={post.id}>
                <div className="blog-card" >
                    <div className="blog-post-image">
                        <Link to={'/glugpace/blog/' + post.title.replace(/\s+/g, '-').toLowerCase()}>
                            <img src={require(`${post.imageURl}`)} alt="post" />
                        </Link>
                    </div>
                    <div className="blog-post-data">
                        <h2 className="blog-post-title">
                            <Link to={'/glugpace/blog/' + post.title.replace(/\s+/g, '-').toLowerCase()}>{post.title}</Link>
                        </h2>
                        <p className="blog-post-desc">Published by <b>{post.username}</b></p>
                    </div>
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