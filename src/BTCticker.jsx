import { useEffect, useState } from "react"
import { domain } from "./domain"
import btcLogo from "./assets/BitcoinSign.png"
import {
  btcTickerContainer,
  headerClass,
  btcLogoContainer,
  btcLogoClass,
} from "./BTCticker.module.css"

function BTCticker() {
  const [btcPrice, setBtcPrice] = useState()
  const [fiatCurrency, setFiatCurrency] = useState("eur")

  useEffect(() => {
    domain
      .get("getBTCPriceUseCase")
      .execute({ cryptoCoin: "bitcoin", fiatCurrency })
      .then((data) => {
        setBtcPrice(data)
        console.log("DATA", data)
      })
  }, [fiatCurrency])

  const handleChange = (evt) => setFiatCurrency(evt.target.value)

  return (
    <div className={btcTickerContainer}>
      <header className={headerClass}>
        <div className={btcLogoContainer}>
          <img src={btcLogo} className={btcLogoClass} alt="logo" />
          <h1>{btcPrice?.value}</h1>
        </div>
        <select onChange={handleChange}>
          <option value={"eur"}>eur</option>
          <option value={"usd"}>usd</option>
        </select>
      </header>
    </div>
  )
}

export default BTCticker
