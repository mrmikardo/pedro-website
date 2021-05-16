import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = props => {
  return (
    <header
      style={{
        background: `#323234`,
      }}
      className="grid grid-cols-3 md:grid-cols-2 gap-4"
    >
      <div
        style={{
          paddingTop: `0.4rem`,
          paddingBottom: `0.7rem`,
        }}
        className="ml-2 col-span-2 md:col-span-1 max-w-sm md:max-w-xs pl-0 md:pl-1"
      >
        <h1
          style={{
            margin: 0,
            lineHeight: 0.9,
          }}
          className="max-w-sm md:max-w-xs"
        >
          <Link
            to="/"
            style={{
              color: `#F5C4FF`,
              textDecoration: `none`,
              fontFamily: `Quicksand`,
              fontSize: `1.95rem`,
            }}
          >
            {props.siteTitle}
          </Link>
        </h1>
      </div>
      <button
        id="hamburgerbtn"
        class="md:hidden justify-self-end mr-4"
        onClick={() => props.toggleSidebar(true)}
      >
        {/* Hamburger menu svg */}
        <svg
          viewBox="0 0 100 80"
          width="30"
          height="30"
          stroke="#A8ECFF"
          fill="#A8ECFF"
        >
          <rect width="100" height="10" rx="10"></rect>
          <rect y="30" width="100" height="10" rx="10"></rect>
          <rect y="60" width="100" height="10" rx="10"></rect>
        </svg>
      </button>
      <nav
        style={{
          color: `#F5C4FF`,
          fontFamily: `Quicksand`,
          fontSize: `1.4rem`,
        }}
        className="hidden md:inline-flex space-x-4 justify-self-end self-center font-sans font-extrabold mr-4"
      >
        <Link to="/portraits">Portraits</Link>
        <span style={{ color: `#A8ECFF` }}>|</span>
        <span
          title="Coming soon!"
          style={{ cursor: "default", color: `#84848A` }}
        >
          Shop
        </span>
        <span style={{ color: `#A8ECFF` }}>|</span>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Pedro Younis Photography`,
}

export default Header
