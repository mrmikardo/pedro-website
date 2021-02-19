import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <div class="my-20 grid grid-flow-row grid-cols-2 grid-rows-2 gap-3 gap-y-20">
      <div class="self-center">
        <Img
          fluid={data.strapiHomePage.image1.localFile.childImageSharp.fluid}
        />
      </div>
      <div class="justify-self-center">
        <Img
          style={{ width: "360px" }}
          fluid={data.strapiHomePage.image2.localFile.childImageSharp.fluid}
        />
      </div>
      <div class="justify-self-center">
        <Img
          style={{ width: "360px" }}
          fluid={data.strapiHomePage.image3.localFile.childImageSharp.fluid}
        />
      </div>
      <div class="self-center">
        <Img
          fluid={data.strapiHomePage.image4.localFile.childImageSharp.fluid}
        />
      </div>
    </div>
  </Layout>
)

export const query = graphql`
  query HomePageQuery {
    strapiHomePage {
      image1 {
        localFile {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
      image2 {
        localFile {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
      image3 {
        localFile {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
      image4 {
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
`

export default IndexPage
