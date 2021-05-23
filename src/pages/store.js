import { graphql, Link } from "gatsby"
import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ProductCard from "../components/productCard"

const StorePage = ({ data }) => (
  <Layout>
    <SEO title="Store" />
    {/* Mobile */}
    <div className="md:hidden grid grid-flow-row grid-cols-1 gap-2 gap-y-1">
      {data.allStripePrice.nodes.map(node => {
        return <pre>{JSON.stringify(node, null, 4)}</pre>
      })}
    </div>
    {/* Desktop */}
    <div className="hidden md:grid grid-flow-row grid-cols-2 gap-3 gap-y-20 my-20">
      {data.allStripePrice.nodes.map(node => {
        return <pre>{JSON.stringify(node, null, 4)}</pre>
      })}
    </div>
  </Layout>
)

export const query = graphql`
  {
    allStripePrice(
      filter: { active: { eq: true } }
      sort: { fields: unit_amount, order: DESC }
    ) {
      nodes {
        unit_amount
        unit_amount_decimal
        product {
          name
          description
          id
        }
        id
      }
    }
  }
`

export default StorePage
