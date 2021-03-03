import { graphql } from "gatsby"
import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox"

import Layout from "../components/layout"
import SEO from "../components/seo"

const GalleryPage = ({ data }) => (
  <SimpleReactLightbox>
    <Layout>
      <SEO title="Gallery" />
      <SRLWrapper>
        <div className="my-20 grid grid-flow-row grid-cols-5 gap-3 gap-y-20">
          {/* There is one Gallery node for each gallery page */}
          {data.allStrapiGallery.nodes[0].images.map(image => {
            const img = getImage(image.image.localFile)
            console.log(img)
            return (
              <div className="self-center p-3" key={image.id}>
                <GatsbyImage image={img} />
              </div>
            )
          })}
        </div>
      </SRLWrapper>
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
  }
`

export default GalleryPage
