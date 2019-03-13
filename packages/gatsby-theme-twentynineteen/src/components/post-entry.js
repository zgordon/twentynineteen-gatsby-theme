import React from "react"
import { Link, graphql } from "gatsby"
import moment from "moment/moment"

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
          <svg
            className="svg-icon"
            width="16"
            height="16"
            aria-hidden="true"
            role="img"
            focusable="false"
            viewBox="0 0 24 24"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            <path d="M0 0h24v24H0z" fill="none" />
          </svg>
          <span className="screen-reader-text">Posted by</span>
          <span className="author vcard">
            <Link className="url fn n" to={`/blog/author/${author.slug}`}>
              {author.name}
            </Link>
          </span>
        </span>
        <span className="posted-on">
          <svg
            className="svg-icon"
            width="16"
            height="16"
            aria-hidden="true"
            role="img"
            focusable="false"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <defs>
              <path id="a" d="M0 0h24v24H0V0z" />
            </defs>
            <clipPath id="b">
              <use href="#a" overflow="visible" />
            </clipPath>
            <path
              clipPath="url(#b)"
              d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4.2 14.2L11 13V7h1.5v5.2l4.5 2.7-.8 1.3z"
            />
          </svg>
          <a
            href="http://localhost/mtwoblog.com/2019/02/25/hello-world/"
            rel="bookmark"
          >
            <time className="entry-date published updated" dateTime={date}>
              {moment(date).format(`MMMM D, YYYY`)}
            </time>
          </a>
        </span>
        {categories.nodes.length ? (
          <span className="cat-links">
            <svg
              className="svg-icon"
              width="16"
              height="16"
              aria-hidden="true"
              role="img"
              focusable="false"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z" />
              <path d="M0 0h24v24H0z" fill="none" />
            </svg>
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
            <svg
              className="svg-icon"
              width="16"
              height="16"
              aria-hidden="true"
              role="img"
              focusable="false"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7z" />
              <path d="M0 0h24v24H0z" fill="none" />
            </svg>
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

// export const query = graphql`
//   fragment PostEntryFragment on WPGraphQL_Post {
//     id
//     title
//     uri
//     slug
//     date
//     content
//     excerpt
//     author {
//       name
//       slug
//       avatar(size: 100) {
//         url
//       }
//     }
//     tags {
//       nodes {
//         slug
//         name
//       }
//     }
//     categories {
//       nodes {
//         slug
//         name
//       }
//     }
//   }
// `
