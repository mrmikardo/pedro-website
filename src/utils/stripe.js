import { loadStripe } from "@stripe/stripe-js"
let stripePromise
const getStripe = () => {
  if (!stripePromise) {
    // Stripe keys must be set in environment
    stripePromise = loadStripe(process.env.GATSBY_STRIPE_PUBLIC_KEY)
  }
  return stripePromise
}

export default getStripe
