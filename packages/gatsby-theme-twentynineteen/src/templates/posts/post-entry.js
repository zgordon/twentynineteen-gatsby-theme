import React from "react"
import { Link } from "gatsby"

function formatDate(date) {
  var monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]

  var day = date.getDate()
  var monthIndex = date.getMonth()
  var year = date.getFullYear()

  return `${monthNames[monthIndex]} ${day}, ${year}`
}

const PostEntry = ({
  post: { id, postId, title, excerpt, uri, author, date, categories },
}) => {
  const dateObject = new Date(date)
  const displayDate = formatDate(dateObject)
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
      <div
        className="entry-content"
        dangerouslySetInnerHTML={{ __html: excerpt }}
      />
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
            <a
              className="url fn n"
              href="http://localhost/mtwoblog.com/author/admin/"
            >
              {author.name}
            </a>
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
              {displayDate}
            </time>
          </a>
        </span>
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
          <a
            href="http://localhost/mtwoblog.com/category/uncategorized/"
            rel="category tag"
          >
            {categories.nodes[0].name}
          </a>
        </span>
      </footer>
    </article>
  )
}

export default PostEntry
