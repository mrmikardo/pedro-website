import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <Img fluid={data.strapiHomePage.image1.localFile.childImageSharp.fluid} />
    <Img fluid={data.strapiHomePage.image2.localFile.childImageSharp.fluid} />
    <div className="max-w-lg "></div>
  </Layout>
)

export const query = graphql`
  query HomePageQuery {
    strapiHomePage {
      image1 {
        localFile {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      image2 {
        localFile {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default IndexPage
