import { graphql, Link } from "gatsby"
import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const PortfolioPage = ({ data }) => (
  <Layout>
    <SEO title="Portfolio" />
    {/* Mobile */}
    <div className="md:hidden grid grid-flow-row grid-cols-1 gap-2 gap-y-1">
      {data.allStrapiGallery.nodes.map(node => {
        const img = getImage(node.Images[0].localFile)
        return (
          <div className="self-center" key={node.slug}>
            <Link to={"/gallery/" + node.slug}>
              <GatsbyImage
                image={img}
                style={{ cursor: "pointer" }}
                alt={node.slug}
              />
            </Link>
          </div>
        )
      })}
    </div>
    {/* Desktop */}
    <div className="hidden md:grid grid-flow-row grid-cols-2 gap-3 gap-y-20 my-20">
      {data.allStrapiGallery.nodes.map(node => {
        const img = getImage(node.Images[0].localFile)
        return (
          <div className="flex justify-center p-3" key={node.slug}>
            <Link to={"/gallery/" + node.slug}>
              <GatsbyImage
                image={img}
                style={{ cursor: "pointer" }}
                alt={node.slug}
              />
            </Link>
          </div>
        )
      })}
    </div>
  </Layout>
)

export const query = graphql`
  query TravelPageQuery {
    allStrapiGallery {
      nodes {
        slug
        Images {
          localFile {
            childImageSharp {
              gatsbyImageData(
                width: 400
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
      }
    }
  }
`

export default PortfolioPage
