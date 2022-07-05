import { useEffect, useState } from "react"
import { w3cwebsocket as W3CWebSocket } from "websocket"
import { formattedValue } from "./utils/formattedValue"
import {
  btcTickerContainer,
  headerClass,
  btcLogoContainer,
} from "./BTCticker.module.css"

function BTCticker() {
  const [btcPrice, setBtcPrice] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const element = document.documentElement

  useEffect(() => {
    const websocket = new W3CWebSocket("wss://ws.bitstamp.net/")

    websocket.onopen = () => {
      console.log("WebSocket Client Connected")
      websocket.send(
        JSON.stringify({
          event: "bts:subscribe",
          data: {
            channel: "live_trades_btceur",
          },
        })
      )
    }
    websocket.onmessage = (evt) =>
      setBtcPrice(
        formattedValue({
          value: JSON.parse(evt.data).data.price || 0,
        })
      )
  }, [])

  const toggleFullscreen = () => {
    if (!isFullscreen) {
      element.requestFullscreen()
      setIsFullscreen(true)
    }

    if (isFullscreen) {
      document.exitFullscreen()
      setIsFullscreen(false)
    }
  }

  return (
    <div className={btcTickerContainer}>
      <header className={headerClass}>
        <div onClick={toggleFullscreen} className={btcLogoContainer}>
          <h1>{btcPrice}</h1>
        </div>
      </header>
    </div>
  )
}

export default BTCticker
