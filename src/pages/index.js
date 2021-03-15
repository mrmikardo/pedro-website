import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import HomePageLayout from "../components/homePageLayout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <HomePageLayout>
    <SEO title="Home" />
    {/* Mobile */}
    <div className="md:hidden grid wrap">
      <GatsbyImage
        image={
          data.strapiHomePage.image2.localFile.childImageSharp.gatsbyImageData
        }
        alt="Home page image 2"
      />
    </div>
    {/* Desktop */}
    <div className="hidden md:grid wrap">
      <GatsbyImage
        image={
          data.strapiHomePage.image1.localFile.childImageSharp.gatsbyImageData
        }
        alt="Home page image 1"
        style={{ objectFit: `fill` }}
      />
    </div>
  </HomePageLayout>
)

export const query = graphql`
  query HomePageQuery {
    strapiHomePage {
      image1 {
        localFile {
          childImageSharp {
            gatsbyImageData(
              width: 2056
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
              width: 2056
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
