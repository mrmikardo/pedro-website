import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const FashionWeekPage = ({ data }) => (
  <Layout>
    <SEO title="Fashion Week" />
    <div className="md:hidden grid grid-flow-row grid-cols-1 gap-2 gap-y-1">
      <div className="mb-3 mt-6">
        <GatsbyImage
          image={getImage(data.allStrapiFashionWeek.nodes[0].image1.localFile)}
          alt={data.allStrapiFashionWeek.nodes[0].image1.alternativeText}
        />
      </div>
      <div className="my-3">
        <GatsbyImage
          image={getImage(data.allStrapiFashionWeek.nodes[0].image2.localFile)}
          alt={data.allStrapiFashionWeek.nodes[0].image2.alternativeText}
        />
      </div>
      <div className="my-3">
        <GatsbyImage
          image={getImage(data.allStrapiFashionWeek.nodes[0].image3.localFile)}
          alt={data.allStrapiFashionWeek.nodes[0].image3.alternativeText}
        />
      </div>
      <div className="my-3">
        <GatsbyImage
          image={getImage(data.allStrapiFashionWeek.nodes[0].image4.localFile)}
          alt={data.allStrapiFashionWeek.nodes[0].image4.alternativeText}
        />
      </div>
      <div className="my-3">
        <GatsbyImage
          image={getImage(data.allStrapiFashionWeek.nodes[0].image5.localFile)}
          alt={data.allStrapiFashionWeek.nodes[0].image5.alternativeText}
        />
      </div>
      <div className="my-3">
        <GatsbyImage
          image={getImage(data.allStrapiFashionWeek.nodes[0].image6.localFile)}
          alt={data.allStrapiFashionWeek.nodes[0].image6.alternativeText}
        />
      </div>
      <div className="my-3">
        <GatsbyImage
          image={getImage(data.allStrapiFashionWeek.nodes[0].image7.localFile)}
          alt={data.allStrapiFashionWeek.nodes[0].image7.alternativeText}
        />
      </div>
      <div className="my-3">
        <GatsbyImage
          image={getImage(data.allStrapiFashionWeek.nodes[0].image8.localFile)}
          alt={data.allStrapiFashionWeek.nodes[0].image8.alternativeText}
        />
      </div>
      <div className="my-3">
        <GatsbyImage
          image={getImage(data.allStrapiFashionWeek.nodes[0].image9.localFile)}
          alt={data.allStrapiFashionWeek.nodes[0].image9.alternativeText}
        />
      </div>
      <div className="my-3">
        <GatsbyImage
          image={getImage(data.allStrapiFashionWeek.nodes[0].image10.localFile)}
          alt={data.allStrapiFashionWeek.nodes[0].image10.alternativeText}
        />
      </div>
      <div className="my-3">
        <GatsbyImage
          image={getImage(data.allStrapiFashionWeek.nodes[0].image11.localFile)}
          alt={data.allStrapiFashionWeek.nodes[0].image11.alternativeText}
        />
      </div>
      <div className="my-3">
        <GatsbyImage
          image={getImage(data.allStrapiFashionWeek.nodes[0].image12.localFile)}
          alt={data.allStrapiFashionWeek.nodes[0].image12.alternativeText}
        />
      </div>
      <div className="my-3">
        <GatsbyImage
          image={getImage(data.allStrapiFashionWeek.nodes[0].image13.localFile)}
          alt={data.allStrapiFashionWeek.nodes[0].image13.alternativeText}
        />
      </div>
      <div className="my-3">
        <GatsbyImage
          image={getImage(data.allStrapiFashionWeek.nodes[0].image14.localFile)}
          alt={data.allStrapiFashionWeek.nodes[0].image14.alternativeText}
        />
      </div>
      <div className="my-3">
        <GatsbyImage
          image={getImage(data.allStrapiFashionWeek.nodes[0].image15.localFile)}
          alt={data.allStrapiFashionWeek.nodes[0].image15.alternativeText}
        />
      </div>
      <div className="my-3">
        <GatsbyImage
          image={getImage(data.allStrapiFashionWeek.nodes[0].image16.localFile)}
          alt={data.allStrapiFashionWeek.nodes[0].image16.alternativeText}
        />
      </div>
      <div className="my-3">
        <GatsbyImage
          image={getImage(data.allStrapiFashionWeek.nodes[0].image17.localFile)}
          alt={data.allStrapiFashionWeek.nodes[0].image17.alternativeText}
        />
      </div>
      <div className="my-3">
        <GatsbyImage
          image={getImage(data.allStrapiFashionWeek.nodes[0].image18.localFile)}
          alt={data.allStrapiFashionWeek.nodes[0].image18.alternativeText}
        />
      </div>
      <div className="my-3">
        <GatsbyImage
          image={getImage(data.allStrapiFashionWeek.nodes[0].image19.localFile)}
          alt={data.allStrapiFashionWeek.nodes[0].image19.alternativeText}
        />
      </div>
      <div className="my-3">
        <GatsbyImage
          image={getImage(data.allStrapiFashionWeek.nodes[0].image20.localFile)}
          alt={data.allStrapiFashionWeek.nodes[0].image20.alternativeText}
        />
      </div>
      <div className="my-3">
        <GatsbyImage
          image={getImage(data.allStrapiFashionWeek.nodes[0].image21.localFile)}
          alt={data.allStrapiFashionWeek.nodes[0].image21.alternativeText}
        />
      </div>
      <div className="my-3">
        <GatsbyImage
          image={getImage(data.allStrapiFashionWeek.nodes[0].image22.localFile)}
          alt={data.allStrapiFashionWeek.nodes[0].image22.alternativeText}
        />
      </div>
      <div className="my-3">
        <GatsbyImage
          image={getImage(data.allStrapiFashionWeek.nodes[0].image23.localFile)}
          alt={data.allStrapiFashionWeek.nodes[0].image23.alternativeText}
        />
      </div>
      <div className="my-3">
        <GatsbyImage
          image={getImage(data.allStrapiFashionWeek.nodes[0].image24.localFile)}
          alt={data.allStrapiFashionWeek.nodes[0].image24.alternativeText}
        />
      </div>
      <div className="my-3">
        <GatsbyImage
          image={getImage(data.allStrapiFashionWeek.nodes[0].image25.localFile)}
          alt={data.allStrapiFashionWeek.nodes[0].image25.alternativeText}
        />
      </div>
      <div className="my-3">
        <GatsbyImage
          image={getImage(data.allStrapiFashionWeek.nodes[0].image26.localFile)}
          alt={data.allStrapiFashionWeek.nodes[0].image26.alternativeText}
        />
      </div>
    </div>
    <div className="hidden md:grid grid-flow-row grid-cols-2 gap-3 gap-y-20 my-20">
      {/* FIRST ROW */}
      <div className="col-span-2 flex justify-center">
        <GatsbyImage
          style={{ width: "826px" }}
          image={getImage(data.allStrapiFashionWeek.nodes[0].image1.localFile)}
          alt={data.allStrapiFashionWeek.nodes[0].image1.alternativeText}
        />
      </div>
      {/* /FIRST ROW */}
      {/* SECOND ROW */}
      <div className="col-span-2 flex justify-center">
        <GatsbyImage
          style={{ width: "450px" }}
          image={getImage(data.allStrapiFashionWeek.nodes[0].image2.localFile)}
          alt={data.allStrapiFashionWeek.nodes[0].image2.alternativeText}
        />
      </div>
      {/* /SECOND ROW */}
      {/* THIRD ROW */}
      <div className="col-span-2 flex justify-center">
        <GatsbyImage
          style={{ width: "450px" }}
          image={getImage(data.allStrapiFashionWeek.nodes[0].image3.localFile)}
          alt={data.allStrapiFashionWeek.nodes[0].image3.alternativeText}
        />
      </div>
      {/* /THIRD ROW */}
      {/* FOURTH ROW */}
      <div className="col-span-2 flex justify-center">
        <GatsbyImage
          style={{ width: "826px" }}
          image={getImage(data.allStrapiFashionWeek.nodes[0].image4.localFile)}
          alt={data.allStrapiFashionWeek.nodes[0].image4.alternativeText}
        />
      </div>
      {/* /FOURTH ROW */}
      {/* FIFTH ROW */}
      <div className="col-span-2 flex justify-center">
        <GatsbyImage
          style={{ width: "450px" }}
          image={getImage(data.allStrapiFashionWeek.nodes[0].image5.localFile)}
          alt={data.allStrapiFashionWeek.nodes[0].image5.alternativeText}
        />
      </div>
      {/* /FIFTH ROW */}
      {/* SIXTH ROW */}
      <div className="my-8 col-span-2 flex justify-center">
        <div className="mr-3">
          <GatsbyImage
            style={{ width: "400px" }}
            image={getImage(
              data.allStrapiFashionWeek.nodes[0].image6.localFile
            )}
            alt={data.allStrapiFashionWeek.nodes[0].image6.alternativeText}
          />
        </div>
        <div className="ml-3">
          <GatsbyImage
            style={{ width: "400px" }}
            image={getImage(
              data.allStrapiFashionWeek.nodes[0].image7.localFile
            )}
            alt={data.allStrapiFashionWeek.nodes[0].image7.alternativeText}
          />
        </div>
      </div>
      {/* /SIXTH ROW */}
      {/* SEVENTH ROW */}
      <div className="col-span-2 flex justify-center">
        <GatsbyImage
          style={{ width: "826px" }}
          image={getImage(data.allStrapiFashionWeek.nodes[0].image8.localFile)}
          alt={data.allStrapiFashionWeek.nodes[0].image8.alternativeText}
        />
      </div>
      {/* /SEVENTH ROW */}
      {/* EIGHTH ROW */}
      <div className="col-span-2 flex justify-center">
        <GatsbyImage
          style={{ width: "450px" }}
          image={getImage(data.allStrapiFashionWeek.nodes[0].image9.localFile)}
          alt={data.allStrapiFashionWeek.nodes[0].image9.alternativeText}
        />
      </div>
      {/* /EIGHTH ROW */}
      {/* NINTH ROW */}
      <div className="col-span-2 flex justify-center">
        <GatsbyImage
          style={{ width: "450px" }}
          image={getImage(data.allStrapiFashionWeek.nodes[0].image10.localFile)}
          alt={data.allStrapiFashionWeek.nodes[0].image10.alternativeText}
        />
      </div>
      {/* /NINTH ROW */}
      {/* TENTH ROW */}
      <div className="my-8 col-span-2 flex justify-center">
        <div className="mr-3">
          <GatsbyImage
            style={{ width: "400px" }}
            image={getImage(
              data.allStrapiFashionWeek.nodes[0].image11.localFile
            )}
            alt={data.allStrapiFashionWeek.nodes[0].image11.alternativeText}
          />
        </div>
        <div className="ml-3">
          <GatsbyImage
            style={{ width: "400px" }}
            image={getImage(
              data.allStrapiFashionWeek.nodes[0].image12.localFile
            )}
            alt={data.allStrapiFashionWeek.nodes[0].image12.alternativeText}
          />
        </div>
      </div>
      {/* /TENTH ROW */}
      {/* ELEVENTH ROW */}
      <div className="col-span-2 flex justify-center">
        <GatsbyImage
          style={{ width: "450px" }}
          image={getImage(data.allStrapiFashionWeek.nodes[0].image13.localFile)}
          alt={data.allStrapiFashionWeek.nodes[0].image13.alternativeText}
        />
      </div>
      {/* /ELEVENTH ROW */}
      {/* TWELFTH ROW */}
      <div className="col-span-2 flex justify-center">
        <GatsbyImage
          style={{ width: "450px" }}
          image={getImage(data.allStrapiFashionWeek.nodes[0].image14.localFile)}
          alt={data.allStrapiFashionWeek.nodes[0].image14.alternativeText}
        />
      </div>
      {/* /TWELFTH ROW */}
      {/* THIRTEENTH ROW */}
      <div className="col-span-2 flex justify-center">
        <GatsbyImage
          style={{ width: "826px" }}
          image={getImage(data.allStrapiFashionWeek.nodes[0].image15.localFile)}
          alt={data.allStrapiFashionWeek.nodes[0].image15.alternativeText}
        />
      </div>
      {/* /THIRTEENTH ROW */}
      {/* FOURTEENTH ROW */}
      <div className="col-span-2 flex justify-center">
        <GatsbyImage
          style={{ width: "826px" }}
          image={getImage(data.allStrapiFashionWeek.nodes[0].image16.localFile)}
          alt={data.allStrapiFashionWeek.nodes[0].image16.alternativeText}
        />
      </div>
      {/* /FOURTEENTH ROW */}
      {/* FIFTEENTH ROW */}
      <div className="col-span-2 flex justify-center">
        <GatsbyImage
          style={{ width: "826px" }}
          image={getImage(data.allStrapiFashionWeek.nodes[0].image17.localFile)}
          alt={data.allStrapiFashionWeek.nodes[0].image17.alternativeText}
        />
      </div>
      {/* /FIFTEENTH ROW */}
    </div>
  </Layout>
)

/**
 * Grab the relevant Gallery collection for this page.
 * Return its title and all the images it contains.
 */
export const query = graphql`
  query FashionWeekPageQuery {
    allStrapiFashionWeek {
      nodes {
        image1 {
          alternativeText
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP])
            }
          }
        }
        image2 {
          alternativeText
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP])
            }
          }
        }
        image3 {
          alternativeText
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP])
            }
          }
        }
        image4 {
          alternativeText
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP])
            }
          }
        }
        image5 {
          alternativeText
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP])
            }
          }
        }
        image6 {
          alternativeText
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP])
            }
          }
        }
        image7 {
          alternativeText
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP])
            }
          }
        }
        image8 {
          alternativeText
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP])
            }
          }
        }
        image9 {
          alternativeText
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP])
            }
          }
        }
        image10 {
          alternativeText
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP])
            }
          }
        }
        image11 {
          alternativeText
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP])
            }
          }
        }
        image12 {
          alternativeText
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP])
            }
          }
        }
        image13 {
          alternativeText
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP])
            }
          }
        }
        image14 {
          alternativeText
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP])
            }
          }
        }
        image15 {
          alternativeText
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP])
            }
          }
        }
        image16 {
          alternativeText
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP])
            }
          }
        }
        image17 {
          alternativeText
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP])
            }
          }
        }
        image18 {
          alternativeText
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP])
            }
          }
        }
        image19 {
          alternativeText
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP])
            }
          }
        }
        image20 {
          alternativeText
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP])
            }
          }
        }
        image21 {
          alternativeText
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP])
            }
          }
        }
        image22 {
          alternativeText
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP])
            }
          }
        }
        image23 {
          alternativeText
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP])
            }
          }
        }
        image24 {
          alternativeText
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP])
            }
          }
        }
        image25 {
          alternativeText
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP])
            }
          }
        }
        image26 {
          alternativeText
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP])
            }
          }
        }
      }
    }
  }
`

export default FashionWeekPage
