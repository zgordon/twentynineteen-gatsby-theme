import React from "react"
import Layout from "../../components/layout"
import PostEntry from "../../components/post-entry"

const SingleTag = props => {
  const {
    pageContext: { name, posts },
  } = props
  return (
    <Layout classNames="archive">
      <header className="page-header">
        <h1 className="page-title">
          Tag Archives: <span className="page-description">{name}</span>
        </h1>
      </header>

      {posts.nodes &&
        posts.nodes.map(post => {
          return <PostEntry key={post.postId} post={post} />
        })}
    </Layout>
  )
}

export default SingleTag
