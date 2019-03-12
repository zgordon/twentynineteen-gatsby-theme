import React, { useState, useEffect } from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import axios from "axios"
import { wordPressUrl } from "../../config"

const ALL_CATEGORIES_QUERY = graphql`
  query GetCategories {
    wpgraphql {
      categories(first: 100) {
        nodes {
          name
          slug
        }
      }
    }
  }
`

// const CategoriesWidget1 = props => {
//   //initialize the state
//   const [categories, setCategories] = useState([])

//   // Similar to componentDidMount and componentDidUpdate:
//   useEffect(() => {
//     // call fetchPosts when the component mounts
//     fetchCategories()
//   }, [])

//   const fetchCategories = async () => {
//     if (typeof window !== "undefined" && window.allCategories) {
//       setCategories(window.allCategories)
//     }
//     const results = await axios({
//       url: `${wordPressUrl}/graphql`,
//       method: "post",
//       data: {
//         query: ALL_CATEGORIES_QUERY,
//       },
//     })
//     if (results.data.data.categories) {
//       setCategories(results.data.data.categories.nodes)
//       if (typeof window !== "undefined") {
//         window.allCategories = results.data.data.categories.nodes
//       }
//     }
//   }

//   return (
//     <section id="categories-2" className="widget widget_categories">
//       <h2 className="widget-title">Categories</h2>
//       <ul>
//         {categories.length
//           ? categories.map(category => (
//               <li key={category.slug}>
//                 <Link to={`/blog/${category.slug}`}>{category.name}</Link>
//               </li>
//             ))
//           : null}
//       </ul>
//     </section>
//   )
// }

const CategoriesWidget = () => (
  <StaticQuery
    query={ALL_CATEGORIES_QUERY}
    render={data => {
      const { categories } = data.wpgraphql
      return (
        <section id="categories-2" className="widget widget_categories">
          <h2 className="widget-title">Categories</h2>
          <ul>
            {categories.length
              ? categories.nodes.map(category => (
                  <li key={category.slug}>
                    <Link to={`/blog/${category.slug}`}>{category.name}</Link>
                  </li>
                ))
              : null}
          </ul>
        </section>
      )
    }}
  />
)

export default CategoriesWidget
