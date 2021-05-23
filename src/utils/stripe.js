import { loadStripe } from "@stripe/stripe-js"
let stripePromise
const getStripe = () => {
  if (!stripePromise) {
    // Stripe keys must be set in environment
    stripePromise = loadStripe(
      process.env.STRIPE_PUBLIC_KEY || `pk_test_s06Bi30n0QjpJpZ3P3cCG2Un`
    )
  }
  return stripePromise
}

export default getStripe
