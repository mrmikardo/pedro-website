import { graphql } from "gatsby"
import React from "react"
import Img from "gatsby-image"
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox"

import Layout from "../components/layout"
import SEO from "../components/seo"

const GalleryPage = ({ data }) => (
  <SimpleReactLightbox>
    <Layout>
      <SEO title="Gallery" />
      <div className="my-20 grid grid-flow-row grid-cols-5 gap-3 gap-y-20">
        {console.log(data)}
        {/* There is one Gallery node for each gallery page */}
        {data.allStrapiGallery.nodes[0].images.map(image => {
          return (
            <div className="self-center p-3" key={image.id}>
              <SRLWrapper>
                <Img
                  fluid={image.image.localFile.childImageSharp.fluid}
                  style={{ cursor: "pointer" }}
                />
              </SRLWrapper>
            </div>
          )
        })}
      </div>
    </Layout>
  </SimpleReactLightbox>
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
          id
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
