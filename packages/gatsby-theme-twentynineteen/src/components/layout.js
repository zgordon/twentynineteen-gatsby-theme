import React from "react"
import PropTypes from "prop-types"
// import { StaticQuery, graphql } from "gatsby";
import Header from "./header"
import Footer from "./footer"
import "../style.scss"

const Layout = ({ children, classNames }) => (
  <div id="page" className={`site ${classNames}`}>
    <a className="skip-link screen-reader-text" href="#content">
      Skip to content
    </a>
    <Header siteTitle={"M2 Blog"} />
    <div id="content" className="site-content">
      <section id="primary" className="content-area">
        <main id="main" className="site-main">
          {children}
        </main>
        {/* #main */}
      </section>
      {/* #primary */}
    </div>
    <div
      style={{
        margin: `0 auto`,
        paddingTop: 0,
      }}
    >
      <Footer />
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
