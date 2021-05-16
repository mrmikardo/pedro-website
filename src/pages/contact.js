import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import InstagramIcon from "@material-ui/icons/Instagram"
import MailOutlineIcon from "@material-ui/icons/MailOutline"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = ({ data }) => (
  <Layout>
    <SEO title="Contact" />
    <div className="grid grid-flow-row grid-cols-1 gap-x-8 justify-center my-20">
      <div className="flex justify-center">
        <GatsbyImage
          image={
            data.strapiContactPage.coverphoto.localFile.childImageSharp
              .gatsbyImageData
          }
          alt="Pedro"
        />
      </div>
      <div className="mt-10">
        <div className="text-center font-bold leading-7">
          <MailOutlineIcon />
          &nbsp;
          <a className="mb-2" href="mailto:pedroyounisg@gmail.com">
            pedroyounisg@gmail.com
          </a>
          <br></br>
          <InstagramIcon />
          &nbsp;
          <a
            href="https://instagram.com/pygphoto"
            target="_blank"
            rel="noopener noreferrer"
          >
            @pygphoto
          </a>
        </div>
      </div>
    </div>
  </Layout>
)

export const query = graphql`
  query ContactPageQuery {
    strapiContactPage {
      coverphoto {
        localFile {
          childImageSharp {
            gatsbyImageData(
              width: 400
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    }
  }
`

export default ContactPage
