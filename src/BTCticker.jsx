import { useEffect, useState } from "react"
import { domain } from "./domain"
import btcLogo from "./assets/BitcoinSign.png"
import {
  btcTickerContainer,
  headerClass,
  btcLogoClass,
} from "./BTCticker.module.css"

function BTCticker() {
  const [btcPrice, setBtcPrice] = useState()

  useEffect(() => {
    domain
      .get("getBTCPriceUseCase")
      .execute({ cryptoCoin: "bitcoin" })
      .then((data) => setBtcPrice(data))
  }, [])

  return (
    <div className={btcTickerContainer}>
      <header className={headerClass}>
        <img src={btcLogo} className={btcLogoClass} alt="logo" />
        <h1>{btcPrice}</h1>
      </header>
    </div>
  )
}

export default BTCticker
