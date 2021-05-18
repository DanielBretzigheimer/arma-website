import { Link } from "gatsby"
import React from "react"

export default function Footer() {
  return (
    <footer>
      © {new Date().getFullYear()} ·{" "}
      <a href="https://www.daniel-bretzigheimer.dev/">Daniel Bretzigheimer</a>
    </footer>
  )
}
