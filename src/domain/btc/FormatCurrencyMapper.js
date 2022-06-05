import { CryptoCoinValueObject } from "./model/CryptoCoinValueObject"

export class FormatCurrencyMapper {
  static create() {
    return new FormatCurrencyMapper()
  }

  map({ currency }) {
    const value = currency.value()
    const coinType = currency.coinType()
    const fiatCurrencyUppercase = currency.fiatCurrency()
    const culture = currency.fiatCurrency() === "eur" ? "es-ES" : "en-US"
    console.log("uppercase", fiatCurrencyUppercase)
    const formattedValue = new Intl.NumberFormat(culture, {
      style: "currency",
      currency: fiatCurrencyUppercase,
    }).format(value)

    return CryptoCoinValueObject.create({
      value: formattedValue,
      coinType,
      fiatCurrency: "usd",
    })
  }
}
