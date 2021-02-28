import { graphql, Link } from "gatsby"
import React from "react"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const GalleryPage = ({ data }) => (
  <Layout>
    <SEO title="Portfolio" />
    <div className="my-20 grid grid-flow-row grid-cols-5 gap-3 gap-y-20">
      <p>Not much to see, right now...</p>
      {console.log(data)}
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
        title
        images {
          image {
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
  }
`

export default GalleryPage
