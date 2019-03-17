import React from "react"
import { Link } from "gatsby"
import PostFooterMeta from "./post-footer-meta"

const PostEntry = ({
  post: {
    id,
    postId,
    title,
    excerpt,
    content,
    uri,
    author,
    date,
    categories,
    tags,
  },
}) => {
  // getting the excerpt to a variable
  let excerptText = excerpt

  // if excerpt does not exist
  if (!excerptText) {
    // getting the first 240 characters off content
    excerptText = content.substr(0, 240)

    // so that a word is not chopped off halfway
    excerptText = content
      .substr(0, Math.min(excerptText.length, excerptText.lastIndexOf(" ")))
      .concat("...")
  }
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
        <div dangerouslySetInnerHTML={{ __html: excerptText }} />
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
