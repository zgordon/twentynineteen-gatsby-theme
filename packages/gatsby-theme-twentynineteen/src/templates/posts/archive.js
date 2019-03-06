import React from "react"
import Layout from "../../components/layout"
import { Link } from "gatsby"

const BlogArchive = props => {
  const {
    pageContext: { nodes, pageNumber, hasNextPage },
  } = props

  return (
    <Layout classNames="home blog hfeed">
      <h1>Blog Page {pageNumber}</h1>
      <div>
        {nodes &&
          nodes.map(post => {
            const { id, postId, title, excerpt, uri, author } = post
            return (
              <article
                className="post type-post status-publish format-standard hentry entry"
                data-id={id}
                id={`post-preview-${postId}`}
              >
                <header className="entry-header">
                  <Link to={`/blog/${uri}`}>
                    <h2 dangerouslySetInnerHTML={{ __html: title }} />
                  </Link>
                </header>
                <div
                  className="entry-content"
                  dangerouslySetInnerHTML={{ __html: excerpt }}
                />
              </article>
            )
          })}
      </div>
    </Layout>
  )
}

export default BlogArchive
