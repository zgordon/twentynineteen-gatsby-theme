import React from "react"
import { StaticQuery, graphql } from "gatsby"

const Header = props => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={data => {
      return (
        <header id="masthead" className="site-header">
          <div className="site-branding-container">
            <div className="site-branding">
              <p className="site-title">
                <a href="http://localhost/mtwoblog.com/" rel="home">
                  {data.site.siteMetadata.title}
                </a>
              </p>

              <p className="site-description">
                {data.site.siteMetadata.description}
              </p>
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
