import axios from "axios"
import { FormatCurrencyMapper } from "../formatCurrencyMapper"
import { CryptoCoinValueObject } from "../model/CryptoCoinValueObject"

export class HttpRepository {
  _fetcher
  _mapper

  static create() {
    const mapper = FormatCurrencyMapper.create()
    return new HttpRepository({ fetcher: axios, mapper })
  }

  constructor({ fetcher, mapper }) {
    this._fetcher = fetcher
    this._mapper = mapper
  }

  getBTCPrice({ cryptoCoinVO }) {
    const fiatCurrency = cryptoCoinVO.fiatCurrency()
    const url = `https://api.coingecko.com/api/v3/simple/price?ids=${cryptoCoinVO.coinType()}&vs_currencies=${fiatCurrency}`

    return this._fetcher.get(url).then((res) => {
      return this._mapper.map({
        currency: CryptoCoinValueObject.create({
          value: res.data.bitcoin[fiatCurrency],
          coinType: cryptoCoinVO.coinType(),
          fiatCurrency: fiatCurrency,
        }),
      })
    })
  }
}
