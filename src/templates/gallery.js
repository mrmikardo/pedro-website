import { graphql } from "gatsby"
import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const GalleryPage = ({ data }) => (
  <Layout>
    <SEO title="Gallery" />
    <div className="md:hidden grid grid-flow-row grid-cols-1 gap-2 gap-y-1">
      {/* There is one Gallery node for each gallery page */}
      {data.allStrapiGallery.nodes[0].Images.map(image => {
        const img = getImage(image.localFile)
        return (
          <div className="self-center" key={image.id}>
            <GatsbyImage image={img} alt={image.alternativeText} />
          </div>
        )
      })}
    </div>
    <div className="hidden md:grid grid-flow-row grid-cols-2 gap-3 gap-y-20 my-20">
      {/* There is one Gallery node for each gallery page */}
      {data.allStrapiGallery.nodes[0].Images.map(image => {
        const img = getImage(image.localFile)
        return (
          <div className="flex justify-center p-3" key={image.id}>
            <GatsbyImage image={img} alt={image.alternativeText} />
          </div>
        )
      })}
    </div>
  </Layout>
)

/**
 * Grab the relevant Gallery collection for this page.
 * Return its title and all the images it contains.
 */
export const query = graphql`
  query($slug: String!) {
    allStrapiGallery(filter: { slug: { eq: $slug } }) {
      nodes {
        Title
        Images {
          alternativeText
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
  }
`

export default GalleryPage
