import { graphql, Link } from "gatsby"
import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const PortfolioPage = ({ data }) => (
  <Layout>
    <SEO title="Portfolio" />
    <div className="my-20 grid grid-flow-row grid-cols-2 gap-3 gap-y-20">
      {data.allStrapiGallery.nodes.map(node => {
        const img = getImage(node.coverimage.localFile)
        return (
          <div className="self-center p-3" key={node.slug}>
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
  query PortfolioPageQuery {
    allStrapiGallery {
      nodes {
        slug
        coverimage {
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
