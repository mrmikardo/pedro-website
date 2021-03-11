import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    {/* Mobile */}
    <div className="md:hidden grid grid-flow-row grid-cols-1 gap-2 gap-y-1">
      <div className="self-center">
        <GatsbyImage
          image={
            data.strapiHomePage.image1.localFile.childImageSharp.gatsbyImageData
          }
          alt="Home page image 1"
        />
      </div>
      <div className="self-center">
        <GatsbyImage
          image={
            data.strapiHomePage.image2.localFile.childImageSharp.gatsbyImageData
          }
          alt="Home page image 2"
        />
      </div>
      <div className="self-center">
        <GatsbyImage
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
    {/* Desktop */}
    <div className="hidden md:grid grid-flow-row grid-cols-3 gap-3 gap-y-20 my-20 ">
      <div className="self-center">
        <GatsbyImage
          image={
            data.strapiHomePage.image1.localFile.childImageSharp.gatsbyImageData
          }
          alt="Home page image 1"
        />
      </div>
      <div className="">
        <GatsbyImage
          image={
            data.strapiHomePage.image2.localFile.childImageSharp.gatsbyImageData
          }
          alt="Home page image 2"
        />
      </div>
      <div className="">
        <GatsbyImage
          image={
            data.strapiHomePage.image3.localFile.childImageSharp.gatsbyImageData
          }
          alt="Home page image 3"
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
