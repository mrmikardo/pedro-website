/**
 * HomePageLayout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import Sidebar from "./sidebar"
import "./layout.css"

const HomePageLayout = ({ children }) => {
  const [isOpen, toggleSidebar] = React.useState(false)
  return (
    <>
      <Header
        toggleSidebar={toggleSidebar}
        siteTitle={`Pedro Younis Photography`}
      />
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <main>{children}</main>
    </>
  )
}

HomePageLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default HomePageLayout
