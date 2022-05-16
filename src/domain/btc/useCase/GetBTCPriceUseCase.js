import { HttpRepository } from "../../repository/HttpRepository"
import { CryptoCoinValueObject } from "../../model/CryptoCoinValueObject"

export class GetBTCPriceUseCase {
  static create() {
    const repository = HttpRepository.create()
    return new GetBTCPriceUseCase({ repository })
  }

  constructor({ repository }) {
    this._repository = repository
  }

  execute({ cryptoCoin }) {
    const cryptoCoinVO = CryptoCoinValueObject.create({ cryptoCoin })
    return this._repository.getBTCPrice({ cryptoCoin: cryptoCoinVO })
  }
}
