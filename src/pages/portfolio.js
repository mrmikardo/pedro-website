import { graphql, Link } from "gatsby"
import React from "react"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const PortfolioPage = ({ data }) => (
  <Layout>
    <SEO title="Portfolio" />
    <div className="my-20 grid grid-flow-row grid-cols-2 gap-3 gap-y-20">
      {data.allStrapiGallery.nodes.map(node => {
        return (
          <div className="self-center p-3">
            <Link to={"/gallery/" + node.slug}>
              <Img
                fluid={node.coverimage.localFile.childImageSharp.fluid}
                style={{ cursor: "pointer" }}
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
              fluid {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  }
`

export default PortfolioPage
