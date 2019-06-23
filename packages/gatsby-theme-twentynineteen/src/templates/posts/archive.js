import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/layout"
import PostEntry from "../../components/post-entry"
import SEO from "../../components/seo"
import NextIcon from "../../components/icons/next"
import PreviousIcon from "../../components/icons/previous"

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
      <PreviousIcon />
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
        <NextIcon />
      </Link>
    )
  } else {
    return null
  }
}

const BlogArchive = props => {
  const {
    pageContext: { nodes, pageNumber },
  } = props

  return (
    <Layout classNames="home blog hfeed">
      <SEO title="Home" description="Welcome to the Twenty Nineteen Theme." />
      {nodes && nodes.map(post => <PostEntry key={post.postId} post={post} />)}
      <nav className="navigation pagination" role="navigation">
        <h2 className="screen-reader-text">Posts navigation</h2>
        <div className="nav-links">
          {renderPreviousLink(props)}
          <span aria-current="page" className="page-numbers current">
            {pageNumber}
          </span>
          {renderNextLink(props)}
        </div>
      </nav>
    </Layout>
  )
}

export default BlogArchive
