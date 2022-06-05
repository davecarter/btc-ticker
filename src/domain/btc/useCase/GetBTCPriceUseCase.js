import { HttpRepository } from "../repository/HttpRepository"
import { CryptoCoinValueObject } from "../model/CryptoCoinValueObject"

export class GetBTCPriceUseCase {
  static create() {
    const repository = HttpRepository.create()
    return new GetBTCPriceUseCase({ repository })
  }

  constructor({ repository }) {
    this._repository = repository
  }

  async execute({ cryptoCoin, fiatCurrency }) {
    const cryptoCoinVO = CryptoCoinValueObject.create({
      fiatCurrency,
      coinType: cryptoCoin,
    })

    const cryptoCoinResponseVO = await this._repository.getBTCPrice({
      cryptoCoinVO,
    })

    return cryptoCoinResponseVO.serialize()
  }
}
