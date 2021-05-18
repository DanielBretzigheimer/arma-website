import * as React from "react"
import { Link } from "gatsby"

interface HeaderProps {
  siteTitle: string
}

export default function Header(props: HeaderProps) {
  const { siteTitle } = props

  return (
    <header>
      <div>
        <h1>
          <Link to="/">{siteTitle}</Link>
        </h1>
      </div>
    </header>
  )
}
