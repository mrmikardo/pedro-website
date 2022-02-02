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

    // init Stripe checkout flow
    const stripe = await getStripe()
    const { error } = await stripe.redirectToCheckout({
      mode: "payment",
      lineItems: [{ price, quantity: 1 }],
      // successUrl contains product ID so we can update inventory in Strapi
      successUrl: `${window.location.origin}/store?productID=${
        product.id
      }&quantity=${product.Quantity - 1}`,
      cancelUrl: `${window.location.origin}/store`,
      shippingAddressCollection: {
        allowedCountries: [
          // All EU countries + GB
          "AT", // Austria
          "BE", // Belgium
          "BG", // Bulgaria
          "HR", // Croatia
          "CY", // Republic of Cyprus
          "CZ", // Czech Republic
          "DK", // Denmark
          "EE", // Estonia
          "FI", // Finland
          "FR", // France
          "DE", // Germany
          "GR", // Greece
          "HU", // Hungary
          "IE", // Ireland
          "IT", // Italy
          "LV", // Latvia
          "LT", // Lithuania
          "LU", // Luxembourg
          "MT", // Malta
          "NL", // Netherlands
          "PT", // Poland
          "PR", // PORTUGAL <3 <3 <3
          "RO", // Romania
          "SK", // Slovak Republic
          "SI", // Slovenia
          "ES", // Spain
          "SE", // Sweden
          "GB", // Blighty
        ],
      },
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
          <h2 className="truncate mb-0">{product.Name}</h2>
        </div>
        <hr className="mt-1 mb-4" />
        <fieldset style={{ border: "none" }}>
          <legend>
            <p className="mb-0">{product.Description}</p>
          </legend>
        </fieldset>
        <GatsbyImage
          image={getImage(product.Images[0].localFile)}
          alt={`Image of ${product.Name}`}
          className="mb-6 text-center bg-gray-100"
          imgClassName="mx-auto"
          style={{ maxHeight: `210px`, width: `auto` }}
          imgStyle={{
            maxHeight: `210px`,
            width: `auto`,
            display: `block`,
            margin: `auto`,
          }}
        />
        <fieldset style={{ border: "none" }} className="mb-3">
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
