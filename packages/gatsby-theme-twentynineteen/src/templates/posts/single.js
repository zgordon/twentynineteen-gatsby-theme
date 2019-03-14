import React from "react"
import { Link } from "gatsby"
import moment from "moment/moment"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import AuthorIcon from "../../components/icons/author"
import DateIcon from "../../components/icons/date"
import CategoryIcon from "../../components/icons/category"
import TagIcon from "../../components/icons/tag"

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
              <AuthorIcon />
              <span className="screen-reader-text">Posted by</span>
              <span className="author vcard">
                <Link className="url fn n" to={`/blog/author/${author.slug}`}>
                  {author.name}
                </Link>
              </span>
            </span>{" "}
            <span className="posted-on">
              <DateIcon />
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
