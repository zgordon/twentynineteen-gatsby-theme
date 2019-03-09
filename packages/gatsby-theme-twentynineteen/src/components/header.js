import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'

import Menus from './menus'

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
                <Link to="/" rel="home">
                  {data.site.siteMetadata.title}
                </Link>
              </p>

              <p className="site-description">
                {data.site.siteMetadata.description}
              </p>
              <Menus />
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
