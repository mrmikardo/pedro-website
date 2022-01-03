import { graphql, Link } from "gatsby"
import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const PortfolioPage = ({ data }) => (
  <Layout>
    <SEO title="Portfolio" />
    {/* Mobile */}
    <div className="md:hidden grid grid-flow-row grid-cols-1 gap-2 gap-y-1">
      <div className="mb-3 mt-6">
        <a href="/sophie">
          <GatsbyImage
            image={getImage(
              data.allStrapiPortraitPage.nodes[0].sophie.localFile
            )}
            alt={data.allStrapiPortraitPage.nodes[0].sophie.alternativeText}
          />
        </a>
      </div>
      <div className="my-3">
        <a href="/bea">
          <GatsbyImage
            image={getImage(data.allStrapiPortraitPage.nodes[0].bea.localFile)}
            alt={data.allStrapiPortraitPage.nodes[0].bea.alternativeText}
          />
        </a>
      </div>
      <div className="my-3">
        <a href="/miriam">
          <GatsbyImage
            image={getImage(
              data.allStrapiPortraitPage.nodes[0].miriam.localFile
            )}
            alt={data.allStrapiPortraitPage.nodes[0].miriam.alternativeText}
          />
        </a>
      </div>
      <div className="my-3">
        <a href="/fashion-week">
          <GatsbyImage
            image={getImage(
              data.allStrapiPortraitPage.nodes[0].fashionweek.localFile
            )}
            alt={
              data.allStrapiPortraitPage.nodes[0].fashionweek.alternativeText
            }
          />
        </a>
      </div>
      <div className="my-3">
        <a href="/owanj">
          <GatsbyImage
            image={getImage(
              data.allStrapiPortraitPage.nodes[0].owanj.localFile
            )}
            alt={data.allStrapiPortraitPage.nodes[0].owanj.alternativeText}
          />
        </a>
      </div>
      <div className="my-3">
        <a href="/odete">
          <GatsbyImage
            image={getImage(
              data.allStrapiPortraitPage.nodes[0].odete.localFile
            )}
            alt={data.allStrapiPortraitPage.nodes[0].odete.alternativeText}
          />
        </a>
      </div>
    </div>
    {/* Desktop */}
    <div className="hidden md:grid grid-flow-row grid-cols-4 gap-3 gap-y-20 my-20">
      {/* FIRST ROW */}
      <div className="mx-3">
        <a href="/sophie">
          <GatsbyImage
            image={getImage(
              data.allStrapiPortraitPage.nodes[0].sophie.localFile
            )}
            alt={data.allStrapiPortraitPage.nodes[0].sophie.alternativeText}
          />
        </a>
      </div>
      <div className="mx-3">
        <a href="/bea">
          <GatsbyImage
            image={getImage(data.allStrapiPortraitPage.nodes[0].bea.localFile)}
            alt={data.allStrapiPortraitPage.nodes[0].bea.alternativeText}
          />
        </a>
      </div>
      <div className="mx-3">
        <a href="/miriam">
          <GatsbyImage
            image={getImage(
              data.allStrapiPortraitPage.nodes[0].miriam.localFile
            )}
            alt={data.allStrapiPortraitPage.nodes[0].miriam.alternativeText}
          />
        </a>
      </div>
      <div className="mx-3">
        <a href="/fashion-week">
          <GatsbyImage
            image={getImage(
              data.allStrapiPortraitPage.nodes[0].fashionweek.localFile
            )}
            alt={
              data.allStrapiPortraitPage.nodes[0].fashionweek.alternativeText
            }
          />
        </a>
      </div>
      {/* /FIRST ROW */}
      <div></div>
      <div className="mx-3">
        <a href="/owanj">
          <GatsbyImage
            image={getImage(
              data.allStrapiPortraitPage.nodes[0].owanj.localFile
            )}
            alt={data.allStrapiPortraitPage.nodes[0].owanj.alternativeText}
          />
        </a>
      </div>
      <div className="mx-3">
        <a href="/odete">
          <GatsbyImage
            image={getImage(
              data.allStrapiPortraitPage.nodes[0].odete.localFile
            )}
            alt={data.allStrapiPortraitPage.nodes[0].odete.alternativeText}
          />
        </a>
      </div>
      <div></div>
    </div>
  </Layout>
)

export const query = graphql`
  {
    allStrapiPortraitPage {
      nodes {
        bea {
          alternativeText
          localFile {
            childImageSharp {
              gatsbyImageData(formats: [AUTO, WEBP, AVIF], placeholder: BLURRED)
            }
          }
        }
        fashionweek {
          alternativeText
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
            }
          }
        }
        miriam {
          alternativeText
          localFile {
            childImageSharp {
              gatsbyImageData(formats: [AUTO, WEBP, AVIF], placeholder: BLURRED)
            }
          }
        }
        odete {
          alternativeText
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
            }
          }
        }
        owanj {
          alternativeText
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
            }
          }
        }
        sophie {
          alternativeText
          localFile {
            childImageSharp {
              gatsbyImageData(formats: [AUTO, WEBP, AVIF], placeholder: BLURRED)
            }
          }
        }
      }
    }
  }
`

export default PortfolioPage
