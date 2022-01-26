import React, { useState } from "react"
import getStripe from "../utils/stripe"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const formatPrice = (amount, currency) => {
  let price = (amount / 100).toFixed(2)
  let numberFormat = new Intl.NumberFormat(["en-US"], {
    style: "currency",
    currency: currency,
    currencyDisplay: "symbol",
  })
  return numberFormat.format(price)
}

const ProductCard = ({ product }) => {
  const [loading, setLoading] = useState(false)

  const handleSubmit = async event => {
    event.preventDefault()
    setLoading(true)

    // update Strapi inventory
    // TODO generally tidy this up!
    let headers = new Headers()
    headers.append("Authorization", `Bearer ${process.env.GATSBY_HEROKU_JWT}`)
    headers.append("Content-Type", "application/x-www-form-urlencoded")

    let urlencoded = new URLSearchParams()
    urlencoded.append("Quantity", `${product.Quantity - 1}`)

    const res = await fetch(
      `https://pedro-website-strapi.herokuapp.com/products-v-2-s/${product.strapiId}`,
      {
        method: "PUT",
        headers: headers,
        body: urlencoded,
        redirect: "follow",
      }
    )

    // init Stripe checkout flow
    const price = product.prices[0].id
    const stripe = await getStripe()
    const { error } = await stripe.redirectToCheckout({
      mode: "payment",
      lineItems: [{ price, quantity: 1 }],
      successUrl: `${window.location.origin}/store`,
      cancelUrl: `${window.location.origin}/store`,
    })

    if (error) {
      console.warn("Error:", error)
      setLoading(false)
    }
  }

  return (
    <div className="card mx-3 my-3 md:my-0 md:-mb-6">
      <form onSubmit={handleSubmit} className="mb-0">
        <div className="flex flex-row justify-between">
          <h4>{product.Name}</h4>
          <div className="rounded-lg bg-yellow-400 px-3 py-2 -mt-2 mb-2 text-right font-semibold">
            {formatPrice(product.prices[0].unit_amount, "GBP")}
          </div>
        </div>
        <fieldset style={{ border: "none" }}>
          <legend>
            <p className="mb-0">{product.Description}</p>
            <p className="mb-0">{product.Quantity}</p>
          </legend>
          {/*
          <label>
            Price{" "}
            <select name="priceSelect" onChange={handleChange} className="rounded">
              {product.prices.map(price => (
                <option key={price.id} value={price.id}>
                  {price.description}
                </option>
              ))}
            </select>
          </label>
          */}
        </fieldset>
        <GatsbyImage
          image={getImage(product.Images[0].localFile)}
          alt={`Image of ${product.Name}`}
          className="mb-4 thumbnail"
        />
        <div className="flex items-center justify-center">
          <button
            disabled={loading}
            className="rounded-lg bg-purple-400 hover:bg-cyan-250 transform hover:-translate-y-px shadow-lg text-sm font-semibold px-8 py-3 uppercase"
          >
            Buy
          </button>
        </div>
      </form>
    </div>
  )
}

export default ProductCard
