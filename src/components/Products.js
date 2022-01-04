import React from "react"
import { graphql, StaticQuery } from "gatsby"
import ProductCard from "./ProductCard"

const containerStyles = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "space-between",
  padding: "1rem 0 1rem 0",
}

const Products = () => {
  return (
    <StaticQuery
      query={graphql`
        query ProductPrices {
          prices: allStripePrice(
            filter: { active: { eq: true } }
            sort: { fields: [unit_amount] }
          ) {
            edges {
              node {
                id
                active
                currency
                unit_amount
                product {
                  id
                  name
                  description
                  localFiles {
                    childImageSharp {
                      gatsbyImageData(
                        formats: [AUTO, WEBP, AVIF]
                        placeholder: BLURRED
                      )
                    }
                  }
                }
              }
            }
          }
        }
      `}
      render={({ prices }) => {
        // Group prices by product
        const products = {}
        for (const { node: price } of prices.edges) {
          const product = price.product
          if (!products[product.id]) {
            products[product.id] = product
            products[product.id].prices = []
          }
          // Don't include product key - don't want infinite
          // nestings of prices -> products -> prices...!
          products[product.id].prices.push({
            id: price.id,
            active: price.active,
            currency: price.currency,
            unit_amount: price.unit_amount,
          })
        }
        return (
          <React.Fragment>
            {Object.keys(products).map(key => (
              <ProductCard key={products[key].id} product={products[key]} />
            ))}
          </React.Fragment>
        )
      }}
    />
  )
}
export default Products
