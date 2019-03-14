import React from "react"
import Layout from "../../components/layout"
import PostEntry from "../../components/post-entry"
import SEO from "../../components/seo"

const TagArchive = props => {
  const {
    pageContext: { name, posts },
  } = props

  return (
    <Layout classNames="archive">
      <SEO
        title={`Tag - ${name}`}
        description={`A collection of posts from the ${name} tag.`}
      />
      <header className="page-header">
        <h1 className="page-title">
          Tag Archives: <span className="page-description">{name}</span>
        </h1>
      </header>

      {posts.nodes &&
        posts.nodes.map(post => {
          return <PostEntry key={post.id} post={post} />
        })}
    </Layout>
  )
}

export default TagArchive
