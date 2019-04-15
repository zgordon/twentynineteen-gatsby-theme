import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import PostHeaderMeta from "../../components/post-header-meta"
import PostFooterMeta from "../../components/post-footer-meta"

const SinglePost = props => {
  const {
    pageContext: {
      id,
      postId,
      title,
      excerpt,
      content,
      uri,
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
        <PostHeaderMeta uri={uri} title={title} date={date} author={author} />

        <div
          className="entry-content"
          dangerouslySetInnerHTML={{ __html: content }}
        />
        {/* .entry-content */}

        <PostFooterMeta
          uri={uri}
          date={date}
          author={author}
          categories={categories}
          tags={tags}
        />
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
