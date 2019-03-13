import React from "react"
import { Link } from "gatsby"
import moment from "moment/moment"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

const SinglePost = props => {
  const {
    pageContext: {
      id,
      postId,
      title,
      excerpt,
      content,
      date,
      author,
      categories,
      tags,
      prev,
      next,
    },
  } = props

  return (
    <Layout>
      <SEO title={title} description={excerpt} />
      <article
        data-id={id}
        id={`post-${postId}`}
        className={`post-${postId} post type-post status-publish format-standard hentry category-react tag-accessibility tag-gatsby entry`}
      >
        <header className="entry-header">
          <h1 className="entry-title">{title}</h1>
          <div className="entry-meta">
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
            </span>{" "}
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
                href="http://localhost/mtwoblog.com/2019/02/04/using-react-context-api-with-gatsby/"
                rel="bookmark"
              >
                <time
                  className="entry-date published updated"
                  dateTime="2019-02-04T15:34:08+00:00"
                >
                  {moment(date).format(`MMMM D, YYYY`)}
                </time>
              </a>
            </span>
          </div>
        </header>

        <div
          className="entry-content"
          dangerouslySetInnerHTML={{ __html: content }}
        />
        {/* .entry-content */}

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
              <time
                className="entry-date published updated"
                dateTime="2019-02-25T17:37:06+00:00"
              >
                {moment(date).format(`MMMM D, YYYY`)}
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
        </footer>
      </article>
      {/* #post-${ID} */}
      <nav className="navigation post-navigation" role="navigation">
        <h2 className="screen-reader-text">Post navigation</h2>
        <div className="nav-links">
          {prev && (
            <div className="nav-previous">
              <Link to={`/blog/${prev.uri}`} rel="prev">
                <span className="meta-nav" aria-hidden="true">
                  Previous Post
                </span>
                <span className="screen-reader-text">Previous post:</span>{" "}
                <br />
                <span
                  className="post-title"
                  dangerouslySetInnerHTML={{ __html: prev.title }}
                />
              </Link>
            </div>
          )}
          {next && (
            <div className="nav-next">
              <Link to={`/blog/${next.uri}`} rel="next">
                <span className="meta-nav" aria-hidden="true">
                  Next Post
                </span>
                <span className="screen-reader-text">Next post:</span> <br />
                <span
                  className="post-title"
                  dangerouslySetInnerHTML={{ __html: next.title }}
                />
              </Link>
            </div>
          )}
        </div>
      </nav>
    </Layout>
  )
}

export default SinglePost
