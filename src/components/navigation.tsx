import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import "./navigation.scss"

export default function Navigation() {
  return (
    <nav>
      <Link className="nav-item" to="/member/">
        Mitglieder
      </Link>
      <Link className="nav-item" to="/contact/">
        Kontakt
      </Link>
      <Link className="nav-item" to="/modifications/">
        Mods
      </Link>
      <div className="logo">
        <Link to="/">
          <StaticImage
            alt="Aufklärungsbataillon 178"
            src="../images/logo.png"
          />
        </Link>
      </div>
      <Link className="nav-item" to="/streaming/">
        Twitch
      </Link>
      <Link className="nav-item" to="/teamspeak/">
        Teamspeak
      </Link>
      <Link className="nav-item" to="/faq/">
        FAQ
      </Link>
    </nav>
  )
}
