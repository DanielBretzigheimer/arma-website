import * as React from "react"
import { Link } from "gatsby"
import { ImageFormat } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

export default function IndexPage() {
  const formats: Array<ImageFormat> = ["auto", "webp", "avif"]

  return (
    <Layout>
      <Seo title="Home" />
      <p>Hallo 👋</p>
    </Layout>
  )
}
