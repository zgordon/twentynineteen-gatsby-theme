import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

const SinglePage = props => {
  const {
    pageContext: { id, postId },
    location,
    data: {
      wpgraphql: { page },
    },
  } = props

  const { title, content } = page

  return (
    <Layout location={location}>
      <article
        data-id={id}
        id={`post-${postId}`}
        className={`post-${postId} post type-post status-publish format-standard hentry category-react tag-accessibility tag-gatsby entry`}
      >
        <header className="entry-header">
          <h1 className="entry-title">{title}</h1>
          <div className="entry-meta" />
          {/* .meta-info */}
        </header>

        <div
          className="entry-content"
          dangerouslySetInnerHTML={{ __html: content }}
        />
        {/* .entry-content */}

        <footer className="entry-footer" />
      </article>
      {/* #post-${ID} */}
    </Layout>
  )
}

export default SinglePage

export const pageQuery = graphql`
  query GET_PAGE($id: ID!) {
    wpgraphql {
      page(id: $id) {
        title
        content
        uri
      }
    }
  }
`
