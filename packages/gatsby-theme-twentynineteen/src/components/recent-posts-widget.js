import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import axios from "axios"
import { wordPressUrl } from "../../config"

const RECENT_POSTS_QUERY = `
query GetRecentPosts {
  posts(first: 5) {
    nodes {
      title
      slug
    }
  }
}
`

const RecentPostsWidget = props => {
  //initialize the state
  const [posts, setPosts] = useState([])

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // call fetchPosts when the component mounts
    fetchPosts()
  }, [])

  const fetchPosts = async () => {
    if (typeof window !== "undefined" && window.recentPosts) {
      setPosts(window.recentPosts)
    }
    const results = await axios({
      url: `${wordPressUrl}/graphql`,
      method: "post",
      data: {
        query: RECENT_POSTS_QUERY,
      },
    })
    if (results.data.data.posts) {
      setPosts(results.data.data.posts.nodes)
      if (typeof window !== "undefined") {
        window.recentPosts = results.data.data.posts.nodes
      }
    }
  }

  return (
    <section id="recent-posts-2" className="widget widget_recent_entries">
      <h2 className="widget-title">Recent Posts</h2>
      <ul>
        {posts.length
          ? posts.map(post => (
              <li key={post.slug}>
                <Link to={`/blog/${post.slug}`}>{post.title}</Link>
              </li>
            ))
          : null}
      </ul>
    </section>
  )
}

export default RecentPostsWidget
