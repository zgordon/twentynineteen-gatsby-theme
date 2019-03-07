import React from "react"
import { Link, graphql, navigate } from "gatsby"
import Layout from "../components/layout"
import PostEntry from "../components/post-entry"

const IndexPage = props => {
  const {
    data,
    location,
    pageContext: { pageNumber },
  } = props

  return (
    <Layout location={location} classNames="home blog hfeed">
      <div>
        {data &&
          data.wpgraphql &&
          data.wpgraphql.posts.nodes.map(post => (
            <div key={post.id}>
              <PostEntry post={post} />
            </div>
          ))}
      </div>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query GET_POSTS($ids: [ID]) {
    wpgraphql {
      posts(where: { in: $ids }) {
        nodes {
          ...PostEntryFragment
        }
      }
    }
  }
`
