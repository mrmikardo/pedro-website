/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Sidebar from "./sidebar"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const [isOpen, toggleSidebar] = React.useState(false)
  return (
    <>
      <Header
        toggleSidebar={toggleSidebar}
        siteTitle={data.site.siteMetadata?.title || `Title`}
      />
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 1250,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            marginTop: `2rem`,
          }}
          className="flex justify-center font-sans text-sm"
        >
          © {new Date().getFullYear()} Pedro Younis Photography
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
