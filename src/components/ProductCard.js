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
  const [price, setPrice] = useState(product.prices[0].id)

  const handlePriceSelect = event => {
    setPrice(event.target.selectedOptions[0].value)
  }

  const handleSubmit = async event => {
    event.preventDefault()
    setLoading(true)

    // update Strapi inventory
    let headers = new Headers({
      Authorization: `Bearer ${process.env.GATSBY_HEROKU_JWT}`,
      "Content-Type": "application/x-www-form-urlencoded",
    })

    let urlencoded = new URLSearchParams({
      Quantity: `${product.Quantity - 1}`,
    })

    // TODO handle errors
    const res = await fetch(
      // product.id is the *Strapi* ID, which is what we need here
      `https://pedro-website-strapi.herokuapp.com/products-v-2-s/${product.id}`,
      {
        method: "PUT",
        headers: headers,
        body: urlencoded,
        redirect: "follow",
      }
    )

    // init Stripe checkout flow
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
          <h2 className="truncate">{product.Name}</h2>
        </div>
        <hr />
        <fieldset style={{ border: "none" }}>
          <legend>
            <p>{product.Description}</p>
          </legend>
          <hr />
          <label>
            <select
              name="priceSelect"
              onChange={handlePriceSelect}
              className="form-select block w-full px-3 py-1.5 font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            >
              {product.prices.map(price => (
                <option key={price.id} value={price.id}>
                  {price.description}
                </option>
              ))}
            </select>
          </label>
        </fieldset>
        <GatsbyImage
          image={getImage(product.Images[0].localFile)}
          alt={`Image of ${product.Name}`}
          className="mb-4 text-center bg-gray-100"
          imgClassName="mx-auto"
          style={{ maxHeight: `210px`, width: `auto` }}
          imgStyle={{
            maxHeight: `210px`,
            width: `auto`,
            display: `block`,
            margin: `auto`,
          }}
        />
        <div className="flex items-center justify-center">
          <button
            disabled={loading || product.Quantity === 0}
            className={`rounded-lg shadow-lg text-sm font-semibold px-8 py-3 uppercase ${
              product.Quantity === 0
                ? "bg-gray-300"
                : "bg-purple-400 hover:bg-cyan-250 transform hover:-translate-y-px"
            }`}
          >
            {product.Quantity === 0 ? `Sold out` : `Buy`}
          </button>
        </div>
      </form>
    </div>
  )
}

export default ProductCard
