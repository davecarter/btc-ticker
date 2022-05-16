import axios from "axios"

export class HttpRepository {
  _fetcher

  static create() {
    return new HttpRepository({ fetcher: axios })
  }

  constructor({ fetcher }) {
    this._fetcher = fetcher
  }

  getBTCPrice({ cryptoCoin }) {
    const url = `https://api.coingecko.com/api/v3/simple/price?ids=${cryptoCoin.value()}&vs_currencies=eur`
    return this._fetcher.get(url).then((res) => res.data.bitcoin.eur)
  }
}
