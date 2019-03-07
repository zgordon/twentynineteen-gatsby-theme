import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import Menu from "./menu"

const HEADER_QUERY =  graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`

const Header = props => (
  <StaticQuery
    query={HEADER_QUERY}
    render={data => {
      return (
        <header id="masthead" className="site-header">
          <div className="site-branding-container">
            <div className="site-branding">
              <p className="site-title">
                <Link to="/" rel="home">
                  {data.site.siteMetadata.title}
                </Link>
              </p>

              <p className="site-description">
                {data.site.siteMetadata.description}
              </p>
              <Menu />
            </div>
            {/* .site-branding */}
          </div>
          {/* .layout-wrap */}
        </header>
      )
    }}
  />
)

export default Header
