import React from "react"
import { Link, graphql } from "gatsby"
import config from "../../config"
// import PostEntryMeta from "../PostEntryMeta"

const PostEntry = ({ post: { id, postId, title, uri, content, excerpt } }) => {
  return (
    <article
      key={postId}
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
        dangerouslySetInnerHTML={{ __html: excerpt ? excerpt : content }}
      />
    </article>
  )
}

export default PostEntry

export const query = graphql`
  fragment PostEntryFragment on WPGraphQL_Post {
    id
    title
    uri
    slug
    date
    content
    excerpt
    author {
      name
      slug
      avatar(size: 100) {
        url
      }
    }
  }
`
