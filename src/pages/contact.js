import React from "react"
import InstagramIcon from "@material-ui/icons/Instagram"
import MailOutlineIcon from "@material-ui/icons/MailOutline"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <div className="mt-10">
      <p>Welcome to page 2</p>
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
  </Layout>
)

export default ContactPage
