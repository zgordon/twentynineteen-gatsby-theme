import React from "react"
import { Link } from "gatsby"
import PostFooterMeta from "./post-footer-meta"

const PostEntry = ({
  post: { id, postId, title, excerpt, uri, author, date, categories, tags },
}) => {
  return (
    <article
      className="post type-post status-publish format-standard hentry entry"
      data-id={id}
      id={`post-preview-${postId}`}
    >
      <header className="entry-header">
        <h2 className="entry-title">
          <Link
            dangerouslySetInnerHTML={{ __html: title }}
            to={`/blog/${uri}`}
          />
        </h2>
      </header>
      <div className="entry-content">
        <div dangerouslySetInnerHTML={{ __html: excerpt }} />
        <Link to={`/blog/${uri}`} className="more-link">
          Continue reading
          <span className="screen-reader-text">{title}</span>
        </Link>
      </div>
      <PostFooterMeta
        date={date}
        author={author}
        categories={categories}
        tags={tags}
      />
    </article>
  )
}

export default PostEntry
