import { GetBTCPriceUseCase } from "./btc/useCase/GetBTCPriceUseCase"

const useCases = {
  getBTCPriceUseCase: GetBTCPriceUseCase.create(),
}

export const domain = {
  get: (name) => useCases[name],
}
