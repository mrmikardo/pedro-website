import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const Sidebar = props => {
  const data = useStaticQuery(graphql`
    query CatImageQuery {
      file(relativePath: { eq: "cat-sidebar.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 300
            placeholder: BLURRED
            formats: [AUTO, WEBP]
          )
        }
      }
    }
  `)
  return (
    <div className="md:hidden">
      <div
        className={`fixed z-50 inset-y-0 right-0 w-56 px-8 py-4
        overflow-auto flex flex-col justify-start
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
            <span className="text-cyan-250">&#8212;&nbsp;</span>
            <Link to="/">Home</Link>
          </div>
          <div className="my-1">
            <span className="text-cyan-250">&#8212;&nbsp;</span>
            <Link to="/portraits">Portraits</Link>
          </div>
          <div className="my-1">
            <span className="text-cyan-250">&#8212;&nbsp;</span>
            <Link to="/store">Store</Link>
          </div>
          <div className="my-1">
            <span className="text-cyan-250">&#8212;&nbsp;</span>
            <Link to="/contact">Contact</Link>
          </div>
        </nav>
        <div className="w-32 self-left mt-40">
          <GatsbyImage
            image={data.file.childImageSharp.gatsbyImageData}
            alt="Cyber Kitty!"
          />
        </div>
      </div>
    </div>
  )
}

export default Sidebar
