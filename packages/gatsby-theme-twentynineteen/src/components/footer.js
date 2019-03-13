import React from "react"
import RecentPostsWidget from "./recent-posts-widget"
import CategoriesWidget from "./categories-widget"
import { Link } from "gatsby"

const Footer = props => (
  <footer id="colophon" className="site-footer">
    <aside className="widget-area" aria-label="Footer">
      <div className="widget-column footer-widget-1">
        <RecentPostsWidget />
        <CategoriesWidget />
      </div>
    </aside>
    {/* .widget-area */}

    <div className="site-info">
      <Link className="site-name" to="/" rel="home">
        Twenty Nineteen Gatsby Theme
      </Link>
      ,{" "}
      <a href="https://GatsbyWPThemes.com/" className="imprint">
        Proudly powered by GatsbyWPThemes.com
      </a>
    </div>
    {/* .site-info */}
  </footer>
)

export default Footer
