import React from "react"

const Sidebar = props => {
  return (
    <div className="md:hidden">
      <div
        className={`fixed z-30 inset-y-0 right-0 w-56 px-8 py-4
        overflow-auto
          transform ${
            props.isOpen
              ? "translate-x-0 ease-out transition-medium"
              : "translate-x-full ease-in transition-medium"
          }`}
        style={{ background: "#58585C" }}
      >
        <div className="-mx-3 pl-3 pr-1 flex items-center justify-end">
          <button
            onClick={() => props.toggleSidebar(false)}
            className="text-gray-700 justify-self-end lg:hidden"
          >
            {/* Close menu svg 'X' */}
            <svg
              stroke="#A8ECFF"
              fill="#A8ECFF"
              viewBox="0 0 24 24"
              className="h-6 w-6"
            >
              <path
                d="M6 18L18 6M6 6L18 18"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                stroke="#A8ECFF"
              />
            </svg>
          </button>
        </div>
        <nav
          className="mt-8 font-sans font-extrabold"
          style={{
            color: `#F5C4FF`,
            fontFamily: `Quicksand`,
            fontSize: `1.4rem`,
          }}
        >
          <div className="my-1">
            <span style={{ color: `#A8ECFF` }}>&#8212;&nbsp;</span>
            <Link to="/">Home</Link>
          </div>
          <div className="my-1">
            <span style={{ color: `#A8ECFF` }}>&#8212;&nbsp;</span>
            <Link to="/portfolio">Portfolio</Link>
          </div>
          <div className="my-1">
            <span style={{ color: `#A8ECFF` }}>&#8212;&nbsp;</span>
            <Link to="/contact">Contact</Link>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Sidebar
