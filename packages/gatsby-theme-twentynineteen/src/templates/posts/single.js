import React from "react"
import Layout from "../../components/layout"
import moment from "moment/moment"

const SinglePost = props => {
  const {
    pageContext: { id, postId, title, content, date, author, categories, tags },
  } = props

  return (
    <Layout>
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
                <a
                  className="url fn n"
                  href="http://localhost/mtwoblog.com/author/muhammad-muhsin/"
                >
                  {author.name}
                </a>
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

        <footer className="entry-footer" />
      </article>
      {/* #post-${ID} */}
    </Layout>
  )
}

export default SinglePost
