export class CryptoCoinValueObject {
  _cryptoCoin

  static create({ cryptoCoin }) {
    return new CryptoCoinValueObject({ cryptoCoin })
  }

  constructor({ cryptoCoin }) {
    this._cryptoCoin = cryptoCoin
  }

  value() {
    return this._cryptoCoin
  }

  serialize() {
    return {
      cryptoCoin: this.value(),
    }
  }
}
