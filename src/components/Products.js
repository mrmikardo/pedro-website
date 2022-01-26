import React, { useEffect, useState } from "react"
import { graphql, StaticQuery } from "gatsby"
import ProductCard from "./ProductCard"

const Products = () => {
  // product quantities will change after build time
  // => need to query the API dynamically
  const [strapiProducts, setStrapiProducts] = useState([])
  useEffect(() => {
    fetch(`https://pedro-website-strapi.herokuapp.com/products-v-2-s/`)
      .then(response => response.json())
      .then(resultData => {
        setStrapiProducts(resultData)
      })
  }, [])

  return (
    <StaticQuery
      query={graphql`
        {
          allStripePrice(
            sort: { fields: unit_amount, order: DESC }
            filter: { product: { active: { eq: true } } }
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
                  localFiles {
                    childImageSharp {
                      gatsbyImageData(
                        formats: WEBP
                        placeholder: BLURRED
                        aspectRatio: 1.5
                      )
                    }
                  }
                }
                nickname
              }
            }
          }
          allStrapiProductsV2S(sort: { fields: created_at }) {
            edges {
              node {
                strapiId
                StripeProductID
                Images {
                  localFile {
                    childImageSharp {
                      gatsbyImageData(formats: WEBP)
                    }
                  }
                }
              }
            }
          }
        }
      `}
      render={({ allStripePrice, allStrapiProductsV2S }) => {
        // Group prices by product
        const products = {}
        for (const { node: price } of allStripePrice.edges) {
          const product = price.product
          if (!products[product.id]) {
            // "join" data from Stripe with data from Strapi
            // Strapi contains the substantive product metadata
            const product_ = strapiProducts.find(
              strapiProduct => strapiProduct.StripeProductID === product.id
            )
            // Images come from the StaticQuery (for use with GatsbyImage component)
            const productImage = allStrapiProductsV2S.edges.find(
              strapiProductStatic =>
                strapiProductStatic.node.StripeProductID === product.id
            )
            // In the failure case, use Stripe product data
            products[product.id] = product_ || product
            products[product.id].Images = productImage.node.Images
            products[product.id].prices = []
          }
          // Don't include product key - don't want infinite
          // nestings of prices -> products -> prices...!
          products[product.id].prices.push({
            id: price.id,
            active: price.active,
            currency: price.currency,
            unit_amount: price.unit_amount,
            description: price.nickname, // rename key to something sensible
          })
        }
        return strapiProducts.length > 0 ? (
          // <div className="mt-4 md:mt-0">
          <React.Fragment>
            {Object.keys(products).map(key => (
              <ProductCard key={products[key].id} product={products[key]} />
            ))}
          </React.Fragment>
        ) : (
          <p>Nothing to see here</p>
        )
      }}
    />
  )
}
export default Products
