import React from "react"
import Layout from "../../components/layout"
import { Link } from "gatsby"

const renderPreviousLink = props => {
  const {
    pageContext: { pageNumber },
  } = props

  let previousLink = null

  if (!pageNumber || pageNumber === 1) {
    return null
  } else if (2 === pageNumber) {
    previousLink = `/`
  } else if (2 < pageNumber) {
    previousLink = `/page/${pageNumber - 1}`
  }

  return (
    <Link className="prev page-numbers" to={previousLink}>
      <svg
        className="svg-icon"
        width="22"
        height="22"
        aria-hidden="true"
        role="img"
        focusable="false"
        viewBox="0 0 24 24"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns="http://www.w3.org/1999/xlink"
      >
        <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
        <path d="M0 0h24v24H0z" fill="none" />
      </svg>
      <span className="nav-prev-text">Newer posts</span>
    </Link>
  )
}

const renderNextLink = props => {
  const {
    pageContext: { hasNextPage, pageNumber },
  } = props

  if (hasNextPage) {
    return (
      <Link className="next page-numbers" to={`/page/${pageNumber + 1}`}>
        <span className="nav-next-text">Older posts</span>
        <svg
          className="svg-icon"
          width="22"
          height="22"
          aria-hidden="true"
          role="img"
          focusable="false"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
          <path d="M0 0h24v24H0z" fill="none" />
        </svg>
      </Link>
    )
  } else {
    return null
  }
}

const BlogArchive = props => {
  const {
    pageContext: { nodes, pageNumber, hasNextPage },
  } = props

  return (
    <Layout classNames="home blog hfeed">
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
      <nav className="navigation pagination" role="navigation">
        <h2 className="screen-reader-text">Posts navigation</h2>
        <div className="nav-links">
          {renderPreviousLink(props)}
          <span aria-current="page" className="page-numbers current">
            {pageNumber}
          </span>
          {/*             
            <a
              className="page-numbers"
              href="http://localhost/mtwoblog.com/page/2/"
            >
              2
            </a>
            <a
              className="page-numbers"
              href="http://localhost/mtwoblog.com/page/3/"
            >
              3
            </a> */}
          {renderNextLink(props)}
        </div>
      </nav>
    </Layout>
  )
}

export default BlogArchive
