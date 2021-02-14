import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#323234`,
      marginBottom: `1.45rem`,
    }}
    className="grid grid-cols-2 gap-4"
  >
    <div
      style={{
        maxWidth: 960,
        padding: `0.4rem`,
        paddingBottom: `0.7rem`,
      }}
      className="ml-2"
    >
      <h1
        style={{
          margin: 0,
          maxWidth: `20rem`,
          lineHeight: 0.9,
        }}
      >
        <Link
          to="/"
          style={{
            color: `#F5C4FF`,
            textDecoration: `none`,
            fontFamily: `Quicksand`,
            fontSize: `2.1rem`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
    <div
      style={{
        color: `#F5C4FF`,
        fontFamily: `Quicksand`,
        fontSize: `1.4rem`,
      }}
      className="space-x-4 justify-self-end self-center font-sans font-extrabold mr-4"
    >
      <Link to="/">Home</Link>
      <span style={{ color: `#A8ECFF` }}>|</span>
      <Link to="/portfolio">Portfolio</Link>
      <span style={{ color: `#A8ECFF` }}>|</span>
      <Link to="/contact">Contact</Link>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Pedro Younis Photography`,
}

export default Header
