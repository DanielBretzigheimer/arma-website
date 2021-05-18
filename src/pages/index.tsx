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
      <p>
        <Link to="/contact/">Kontakt</Link>
        <Link to="/faq/">FAQ</Link>
        <Link to="/member/">Mitglieder</Link>
        <Link to="/modifications/">Mods</Link>
        <Link to="/streaming/">Twitch</Link>
        <Link to="/teamspeak/">Teamspeak</Link>
      </p>
    </Layout>
  )
}
