import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"

const RECENT_POSTS_QUERY = graphql`
query GetRecentPosts {
  wpgraphql {
    posts(first: 5) {
      nodes {
        title
        slug
      }
    }
  }
}
`

const RecentPostsWidget = () => (
  <StaticQuery
    query={RECENT_POSTS_QUERY}
    render={data => {
      const { posts } = data.wpgraphql
      return (
        <section id="recent-posts-2" className="widget widget_recent_entries">
          <h2 className="widget-title">Recent Posts</h2>
          <ul>
            {posts.nodes.length
              ? posts.nodes.map(post => (
                  <li key={post.slug}>
                    <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                  </li>
                ))
              : null}
          </ul>
        </section>
      )
    }}
  />
)

export default RecentPostsWidget
