import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"

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

const CategoriesWidget = () => (
  <StaticQuery
    query={ALL_CATEGORIES_QUERY}
    render={data => {
      const { categories } = data.wpgraphql
      return (
        <section id="categories-2" className="widget widget_categories">
          <h2 className="widget-title">Categories</h2>
          <ul>
            {categories.nodes.length
              ? categories.nodes.map(category => (
                  <li key={category.slug}>
                    <Link to={`/blog/category/${category.slug}`}>{category.name}</Link>
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
