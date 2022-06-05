export class CryptoCoinValueObject {
  _value
  _coinType
  _fiatCurrency

  static create({ value = {}, coinType, fiatCurrency }) {
    return new CryptoCoinValueObject({ value, coinType, fiatCurrency })
  }

  constructor({ value, coinType, fiatCurrency }) {
    this._coinType = coinType
    this._value = value
    this._fiatCurrency = fiatCurrency
  }

  value() {
    return this._value
  }

  coinType() {
    return this._coinType
  }

  fiatCurrency() {
    return this._fiatCurrency
  }

  serialize() {
    return {
      value: this.value(),
      coinType: this.coinType(),
      fiatCurrency: this.fiatCurrency(),
    }
  }
}
