import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <div className="my-20 grid grid-flow-row grid-cols-2 grid-rows-2 gap-3 gap-y-20">
      <div className="self-center">
        <GatsbyImage
          image={
            data.strapiHomePage.image1.localFile.childImageSharp.gatsbyImageData
          }
          alt="Home page image 1"
        />
      </div>
      <div className="justify-self-center">
        <GatsbyImage
          style={{ width: "360px" }}
          image={
            data.strapiHomePage.image2.localFile.childImageSharp.gatsbyImageData
          }
          alt="Home page image 2"
        />
      </div>
      <div className="justify-self-center">
        <GatsbyImage
          style={{ width: "360px" }}
          image={
            data.strapiHomePage.image3.localFile.childImageSharp.gatsbyImageData
          }
          alt="Home page image 3"
        />
      </div>
      <div className="self-center">
        <GatsbyImage
          image={
            data.strapiHomePage.image4.localFile.childImageSharp.gatsbyImageData
          }
          alt="Home page image 4"
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
            gatsbyImageData(
              width: 800
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
      image2 {
        localFile {
          childImageSharp {
            gatsbyImageData(
              width: 800
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
      image3 {
        localFile {
          childImageSharp {
            gatsbyImageData(
              width: 800
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
      image4 {
        localFile {
          childImageSharp {
            gatsbyImageData(
              width: 800
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    }
  }
`

export default IndexPage
