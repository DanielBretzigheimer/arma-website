import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.scss"
import Footer from "./footer"

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout(props: LayoutProps) {
  const { children } = props

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div id="root">
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div id="content">
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  )
}
