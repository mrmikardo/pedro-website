import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const OwanjPage = ({ data }) => (
  <Layout>
    <SEO title="Owanj" />
    <div className="md:hidden grid grid-flow-row grid-cols-1 gap-2 gap-y-1">
      <div className="self-center" style={{ height: "4rem" }}>
        <GatsbyImage
          image={getImage(data.allStrapiOwanj.nodes[0].image1.localFile)}
          alt={data.allStrapiOwanj.nodes[0].image1.alternativeText}
        />
      </div>
    </div>
    <div className="hidden md:grid grid-flow-row grid-cols-2 gap-3 gap-y-20 my-20">
      {/* FIRST ROW */}
      <div className="col-span-2 flex justify-center">
        <GatsbyImage
          style={{ width: "900px" }}
          image={getImage(data.allStrapiOwanj.nodes[0].image1.localFile)}
          alt={data.allStrapiOwanj.nodes[0].image1.alternativeText}
        />
      </div>
      {/* /FIRST ROW */}
      {/* SECOND ROW */}
      <div className="col-span-2 flex justify-center">
        <GatsbyImage
          style={{ width: "450px" }}
          image={getImage(data.allStrapiOwanj.nodes[0].image2.localFile)}
          alt={data.allStrapiOwanj.nodes[0].image2.alternativeText}
        />
      </div>
      {/* /SECOND ROW */}
      {/* THIRD ROW */}
      <div className="col-span-2 flex justify-center">
        <GatsbyImage
          style={{ width: "826px" }}
          image={getImage(data.allStrapiOwanj.nodes[0].image3.localFile)}
          alt={data.allStrapiOwanj.nodes[0].image3.alternativeText}
        />
      </div>
      {/* /THIRD ROW */}
      {/* FOURTH ROW */}
      <div className="col-span-2 flex justify-center">
        <GatsbyImage
          style={{ width: "826px" }}
          image={getImage(data.allStrapiOwanj.nodes[0].image4.localFile)}
          alt={data.allStrapiOwanj.nodes[0].image4.alternativeText}
        />
      </div>
      {/* /FOURTH ROW */}
      {/* FIFTH ROW */}
      <div className="col-span-2 flex justify-center">
        <GatsbyImage
          style={{ width: "826px" }}
          image={getImage(data.allStrapiOwanj.nodes[0].image5.localFile)}
          alt={data.allStrapiOwanj.nodes[0].image5.alternativeText}
        />
      </div>
      {/* /FIFTH ROW */}
      {/* SIXTH ROW */}
      <div className="col-span-2 flex justify-center">
        <div className="mr-3">
          <GatsbyImage
            style={{ width: "400px" }}
            image={getImage(data.allStrapiOwanj.nodes[0].image6.localFile)}
            alt={data.allStrapiOwanj.nodes[0].image6.alternativeText}
          />
        </div>
        <div className="ml-3">
          <GatsbyImage
            style={{ width: "400px" }}
            image={getImage(data.allStrapiOwanj.nodes[0].image7.localFile)}
            alt={data.allStrapiOwanj.nodes[0].image7.alternativeText}
          />
        </div>
      </div>
      {/* /SIXTH ROW */}
      {/* EIGHTH ROW */}
      <div className="col-span-2 flex justify-center">
        <GatsbyImage
          style={{ width: "826px" }}
          image={getImage(data.allStrapiOwanj.nodes[0].image8.localFile)}
          alt={data.allStrapiOwanj.nodes[0].image8.alternativeText}
        />
      </div>
      {/* /EIGHTH ROW */}
      {/* NINTH ROW */}
      <div className="col-span-2 flex justify-center">
        <GatsbyImage
          style={{ width: "450px" }}
          image={getImage(data.allStrapiOwanj.nodes[0].image10.localFile)}
          alt={data.allStrapiOwanj.nodes[0].image10.alternativeText}
        />
      </div>
      {/* /NINTH ROW */}
      {/* TENTH ROW */}
      <div className="col-span-2 flex justify-center">
        <div className="mr-3">
          <GatsbyImage
            image={getImage(data.allStrapiOwanj.nodes[0].image11.localFile)}
            alt={data.allStrapiOwanj.nodes[0].image11.alternativeText}
          />
        </div>
        <div className="ml-3">
          <GatsbyImage
            image={getImage(data.allStrapiOwanj.nodes[0].image12.localFile)}
            alt={data.allStrapiOwanj.nodes[0].image12.alternativeText}
          />
        </div>
        <div className="ml-3">
          <GatsbyImage
            image={getImage(data.allStrapiOwanj.nodes[0].image13.localFile)}
            alt={data.allStrapiOwanj.nodes[0].image13.alternativeText}
          />
        </div>
      </div>
      {/* /TENTH ROW */}
      {/* ELEVENTH ROW */}
      <div className="col-span-2 flex justify-center">
        <GatsbyImage
          style={{ width: "450px" }}
          image={getImage(data.allStrapiOwanj.nodes[0].image14.localFile)}
          alt={data.allStrapiOwanj.nodes[0].image14.alternativeText}
        />
      </div>
      {/* /ELEVENTH ROW */}
      {/* ELEVENTH ROW */}
      <div className="col-span-2 flex justify-center">
        <GatsbyImage
          style={{ width: "826px" }}
          image={getImage(data.allStrapiOwanj.nodes[0].image15.localFile)}
          alt={data.allStrapiOwanj.nodes[0].image15.alternativeText}
        />
      </div>
      {/* /ELEVENTH ROW */}
      {/* ELEVENTH ROW */}
      <div className="col-span-2 flex justify-center">
        <GatsbyImage
          style={{ width: "450px" }}
          image={getImage(data.allStrapiOwanj.nodes[0].image16.localFile)}
          alt={data.allStrapiOwanj.nodes[0].image16.alternativeText}
        />
      </div>
      {/* /ELEVENTH ROW */}
      {/* THIRTEENTH ROW */}
      <div className="col-span-2 flex justify-center">
        <GatsbyImage
          style={{ width: "900px" }}
          image={getImage(data.allStrapiOwanj.nodes[0].image17.localFile)}
          alt={data.allStrapiOwanj.nodes[0].image17.alternativeText}
        />
      </div>
      {/* /THIRTEENTH ROW */}
    </div>
  </Layout>
)

/**
 * Grab the relevant Gallery collection for this page.
 * Return its title and all the images it contains.
 */
export const query = graphql`
  query OwanjPageQuery {
    allStrapiOwanj {
      nodes {
        image1 {
          alternativeText
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
            }
          }
        }
        image2 {
          alternativeText
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
            }
          }
        }
        image3 {
          alternativeText
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
            }
          }
        }
        image4 {
          alternativeText
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
            }
          }
        }
        image5 {
          alternativeText
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
            }
          }
        }
        image6 {
          alternativeText
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
            }
          }
        }
        image7 {
          alternativeText
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
            }
          }
        }
        image8 {
          alternativeText
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
            }
          }
        }
        image9 {
          alternativeText
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
            }
          }
        }
        image10 {
          alternativeText
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
            }
          }
        }
        image11 {
          alternativeText
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
            }
          }
        }
        image12 {
          alternativeText
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
            }
          }
        }
        image13 {
          alternativeText
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
            }
          }
        }
        image14 {
          alternativeText
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
            }
          }
        }
        image15 {
          alternativeText
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
            }
          }
        }
        image16 {
          alternativeText
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
            }
          }
        }
        image17 {
          alternativeText
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
            }
          }
        }
      }
    }
  }
`

export default OwanjPage
