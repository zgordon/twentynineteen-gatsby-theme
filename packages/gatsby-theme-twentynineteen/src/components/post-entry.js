import React from "react"
import { Link } from "gatsby"
import moment from "moment/moment"
import AuthorIcon from "./icons/author"
import DateIcon from "./icons/date"
import CategoryIcon from "./icons/category"
import TagIcon from "./icons/tag"

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
      <footer className="entry-footer">
        <span className="byline">
          <AuthorIcon />
          <span className="screen-reader-text">Posted by</span>
          <span className="author vcard">
            <Link className="url fn n" to={`/blog/author/${author.slug}`}>
              {author.name}
            </Link>
          </span>
        </span>
        <span className="posted-on">
          <DateIcon />
          <Link to={`/blog/${uri}`} rel="bookmark">
            <time className="entry-date published updated" dateTime={date}>
              {moment(date).format(`MMMM D, YYYY`)}
            </time>
          </Link>
        </span>
        {categories.nodes.length ? (
          <span className="cat-links">
            <CategoryIcon />
            <span className="screen-reader-text">Posted in</span>
            {categories.nodes
              .map(category => (
                <Link
                  key={category.name}
                  to={`/blog/category/${category.slug}`}
                  rel="category"
                >
                  {category.name}
                </Link>
              ))
              .reduce((accu, elem) => {
                return accu === null ? [elem] : [...accu, ", ", elem]
              }, null)}
          </span>
        ) : (
          ""
        )}
        {tags.nodes.length ? (
          <span className="tags-links">
            <TagIcon />
            <span className="screen-reader-text">Tags: </span>
            {tags.nodes
              .map(tag => (
                <Link key={tag.name} to={`/blog/tag/${tag.slug}`} rel="tag">
                  {tag.name}
                </Link>
              ))
              .reduce((accu, elem) => {
                return accu === null ? [elem] : [...accu, ", ", elem]
              }, null)}
          </span>
        ) : (
          ""
        )}
      </footer>
    </article>
  )
}

export default PostEntry
