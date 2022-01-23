import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Products from "../components/Products"

const StorePage = () => (
  <Layout>
    <SEO title="Store" />
    {/* Mobile */}
    <div className="md:hidden grid grid-flow-row grid-cols-1 gap-2 gap-y-1">
      <Products />
    </div>
    {/* Desktop */}
    <div className="hidden md:grid grid-flow-row grid-cols-2 gap-3 gap-y-20 my-20">
      <Products />
    </div>
  </Layout>
)

export default StorePage
