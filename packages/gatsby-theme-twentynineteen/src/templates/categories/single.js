import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import PostEntry from "../../components/post-entry"
import SEO from "../../components/seo"

const SingleCategory = props => {
  const {
    data: { 
      wpgraphql: { 
        category: { 
          name, posts 
        }
      } 
    },
  } = props

  return (
    <Layout classNames="archive">
      <SEO
        title={`Category - ${name}`}
        description={`A collection of posts from the ${name} category.`}
      />
      <header className="page-header">
        <h1 className="page-title">
          Category Archives: <span className="page-description">{name}</span>
        </h1>
      </header>

      {posts.nodes &&
        posts.nodes.map(post => {
          return <PostEntry key={post.id} post={post} />
        })}
    </Layout>
  )
}

export default SingleCategory

// export const pageQuery = graphql`
//   query GET_CATEGORY($id: ID!) {
//     wpgraphql {
//       category(id: $id) {
//         id
//         name
//         slug
//         posts(first: 100) {
//           nodes {
//             ...PostEntryFragment
//           }
//         }
//       }
//     }
//   }
// `