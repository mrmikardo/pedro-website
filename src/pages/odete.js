import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const OdetePage = ({ data }) => (
  <Layout>
    <SEO title="Mum" />
    <div className="md:hidden grid grid-flow-row grid-cols-1 gap-2 gap-y-1">
      <div className="mt-6 mb-3">
        <GatsbyImage
          image={getImage(data.allStrapiOdete.nodes[0].image1.localFile)}
          alt={data.allStrapiOdete.nodes[0].image1.alternativeText}
        />
      </div>
      <div className="my-3">
        <GatsbyImage
          image={getImage(data.allStrapiOdete.nodes[0].image2.localFile)}
          alt={data.allStrapiOdete.nodes[0].image2.alternativeText}
        />
      </div>
      <div className="my-3">
        <GatsbyImage
          image={getImage(data.allStrapiOdete.nodes[0].image3.localFile)}
          alt={data.allStrapiOdete.nodes[0].image3.alternativeText}
        />
      </div>
      <div className="my-3">
        <GatsbyImage
          image={getImage(data.allStrapiOdete.nodes[0].image4.localFile)}
          alt={data.allStrapiOdete.nodes[0].image4.alternativeText}
        />
      </div>
      <div className="my-3">
        <GatsbyImage
          image={getImage(data.allStrapiOdete.nodes[0].image5.localFile)}
          alt={data.allStrapiOdete.nodes[0].image5.alternativeText}
        />
      </div>
      <div className="my-3">
        <GatsbyImage
          image={getImage(data.allStrapiOdete.nodes[0].image6.localFile)}
          alt={data.allStrapiOdete.nodes[0].image6.alternativeText}
        />
      </div>
      <div className="my-3">
        <GatsbyImage
          image={getImage(data.allStrapiOdete.nodes[0].image7.localFile)}
          alt={data.allStrapiOdete.nodes[0].image7.alternativeText}
        />
      </div>
      <div className="my-3">
        <GatsbyImage
          image={getImage(data.allStrapiOdete.nodes[0].image8.localFile)}
          alt={data.allStrapiOdete.nodes[0].image8.alternativeText}
        />
      </div>
      <div className="my-3">
        <GatsbyImage
          image={getImage(data.allStrapiOdete.nodes[0].image9.localFile)}
          alt={data.allStrapiOdete.nodes[0].image9.alternativeText}
        />
      </div>
      <div className="my-3">
        <GatsbyImage
          image={getImage(data.allStrapiOdete.nodes[0].image10.localFile)}
          alt={data.allStrapiOdete.nodes[0].image10.alternativeText}
        />
      </div>
      <div className="my-3">
        <GatsbyImage
          image={getImage(data.allStrapiOdete.nodes[0].image11.localFile)}
          alt={data.allStrapiOdete.nodes[0].image11.alternativeText}
        />
      </div>
      <div className="my-3">
        <GatsbyImage
          image={getImage(data.allStrapiOdete.nodes[0].image12.localFile)}
          alt={data.allStrapiOdete.nodes[0].image12.alternativeText}
        />
      </div>
      <div className="my-3">
        <GatsbyImage
          image={getImage(data.allStrapiOdete.nodes[0].image13.localFile)}
          alt={data.allStrapiOdete.nodes[0].image13.alternativeText}
        />
      </div>
      <div className="my-3">
        <GatsbyImage
          image={getImage(data.allStrapiOdete.nodes[0].image14.localFile)}
          alt={data.allStrapiOdete.nodes[0].image14.alternativeText}
        />
      </div>
      <div className="my-3">
        <GatsbyImage
          image={getImage(data.allStrapiOdete.nodes[0].image15.localFile)}
          alt={data.allStrapiOdete.nodes[0].image15.alternativeText}
        />
      </div>
    </div>
    <div className="hidden md:grid grid-flow-row grid-cols-2 gap-3 gap-y-20 my-20">
      {/* FIRST ROW */}
      <div className="col-span-2 flex justify-center">
        <GatsbyImage
          style={{ width: "826px" }}
          image={getImage(data.allStrapiOdete.nodes[0].image1.localFile)}
          alt={data.allStrapiOdete.nodes[0].image1.alternativeText}
        />
      </div>
      {/* /FIRST ROW */}
      {/* SECOND ROW */}
      <div className="col-span-2 flex justify-center">
        <GatsbyImage
          style={{ width: "450px" }}
          image={getImage(data.allStrapiOdete.nodes[0].image2.localFile)}
          alt={data.allStrapiOdete.nodes[0].image2.alternativeText}
        />
      </div>
      {/* /SECOND ROW */}
      {/* THIRD ROW */}
      <div className="col-span-2 flex justify-center">
        <GatsbyImage
          style={{ width: "826px" }}
          image={getImage(data.allStrapiOdete.nodes[0].image3.localFile)}
          alt={data.allStrapiOdete.nodes[0].image3.alternativeText}
        />
      </div>
      {/* /THIRD ROW */}
      {/* FOURTH ROW */}
      <div className="col-span-2 flex justify-center">
        <GatsbyImage
          style={{ width: "826px" }}
          image={getImage(data.allStrapiOdete.nodes[0].image4.localFile)}
          alt={data.allStrapiOdete.nodes[0].image4.alternativeText}
        />
      </div>
      {/* /FOURTH ROW */}
      {/* FIFTH ROW */}
      <div className="col-span-2 flex justify-center">
        <GatsbyImage
          style={{ width: "450px" }}
          image={getImage(data.allStrapiOdete.nodes[0].image5.localFile)}
          alt={data.allStrapiOdete.nodes[0].image5.alternativeText}
        />
      </div>
      {/* /FIFTH ROW */}
      {/* SIXTH ROW */}
      <div className="col-span-2 flex justify-center">
        <GatsbyImage
          style={{ width: "826px" }}
          image={getImage(data.allStrapiOdete.nodes[0].image6.localFile)}
          alt={data.allStrapiOdete.nodes[0].image6.alternativeText}
        />
      </div>
      {/* /SIXTH ROW */}
      {/* SEVENTH ROW */}
      <div className="col-span-2 flex justify-center">
        <GatsbyImage
          style={{ width: "450px" }}
          image={getImage(data.allStrapiOdete.nodes[0].image7.localFile)}
          alt={data.allStrapiOdete.nodes[0].image7.alternativeText}
        />
      </div>
      {/* /SEVENTH ROW */}
      {/* EIGHTH ROW */}
      <div className="col-span-2 flex justify-center">
        <GatsbyImage
          style={{ width: "826px" }}
          image={getImage(data.allStrapiOdete.nodes[0].image8.localFile)}
          alt={data.allStrapiOdete.nodes[0].image8.alternativeText}
        />
      </div>
      {/* /EIGHTH ROW */}
      {/* NINTH ROW */}
      <div className="my-8 col-span-2 flex justify-center">
        <div className="mr-3">
          <GatsbyImage
            style={{ width: "550px" }}
            image={getImage(data.allStrapiOdete.nodes[0].image9.localFile)}
            alt={data.allStrapiOdete.nodes[0].image9.alternativeText}
          />
        </div>
        <div className="ml-3">
          <GatsbyImage
            style={{ width: "550px" }}
            image={getImage(data.allStrapiOdete.nodes[0].image10.localFile)}
            alt={data.allStrapiOdete.nodes[0].image10.alternativeText}
          />
        </div>
      </div>
      {/* /NINTH ROW */}
      {/* TENTH ROW */}
      <div className="col-span-2 flex justify-center">
        <GatsbyImage
          style={{ width: "450px" }}
          image={getImage(data.allStrapiOdete.nodes[0].image11.localFile)}
          alt={data.allStrapiOdete.nodes[0].image11.alternativeText}
        />
      </div>
      {/* /TENTH ROW */}
      {/* ELEVENTH ROW */}
      <div className="col-span-2 flex justify-center">
        <GatsbyImage
          style={{ width: "450px" }}
          image={getImage(data.allStrapiOdete.nodes[0].image12.localFile)}
          alt={data.allStrapiOdete.nodes[0].image12.alternativeText}
        />
      </div>
      {/* /ELEVENTH ROW */}
      {/* TWELFTH ROW */}
      <div className="col-span-2 flex justify-center">
        <GatsbyImage
          style={{ width: "800px" }}
          image={getImage(data.allStrapiOdete.nodes[0].image13.localFile)}
          alt={data.allStrapiOdete.nodes[0].image13.alternativeText}
        />
      </div>
      {/* /TWELFTH ROW */}
      {/* THIRTEENTH ROW */}
      <div className="col-span-2 flex justify-center">
        <GatsbyImage
          style={{ width: "800px" }}
          image={getImage(data.allStrapiOdete.nodes[0].image14.localFile)}
          alt={data.allStrapiOdete.nodes[0].image14.alternativeText}
        />
      </div>
      {/* /THIRTEENTH ROW */}
      {/* FOURTEENTH ROW */}
      <div className="col-span-2 flex justify-center">
        <GatsbyImage
          style={{ width: "800px" }}
          image={getImage(data.allStrapiOdete.nodes[0].image15.localFile)}
          alt={data.allStrapiOdete.nodes[0].image15.alternativeText}
        />
      </div>
      {/* /FOURTEENTH ROW */}
    </div>
  </Layout>
)

/**
 * Grab the relevant Gallery collection for this page.
 * Return its title and all the images it contains.
 */
export const query = graphql`
  query OdetePageQuery {
    allStrapiOdete {
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
      }
    }
  }
`

export default OdetePage
