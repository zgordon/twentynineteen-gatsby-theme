import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import Header from "./header";
import Footer from "./footer";
import "../style.scss";

const Layout = ({ children }) => (
  <>
    <Header siteTitle={"M2 Blog"} />
    <div
      style={{
        margin: `0 auto`,
        paddingTop: 0
      }}
    >
      <main>{children}</main>
      <Footer />
    </div>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
