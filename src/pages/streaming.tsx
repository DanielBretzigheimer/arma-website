import React, { useEffect } from "react"
import Layout from "../components/layout"

export default function Streaming() {
  useEffect(() => {
    const script = document.createElement("script")
    script.setAttribute("src", "https://embed.twitch.tv/embed/v1.js")
    script.addEventListener("load", () => {
      if (document.getElementById("twitch-embed").childNodes.length !== 0)
        return

      const twitch = (window as any).Twitch
      new twitch.Embed("twitch-embed", {
        width: "100%",
        height: 480,
        channel: "mogawolf",
      })
    })
    document.body.appendChild(script)
  })

  return (
    <Layout>
      <div id="twitch-embed"></div>
    </Layout>
  )
}
