import jsonFetch from './json-fetch'

const getTopCryptoCoins = numCoins => {
  if (!Number.isInteger(numCoins)) {
    return Promise.reject('numCoins must be an integer')
  }
  return jsonFetch(`https://api.coinmarketcap.com/v1/ticker/?limit=${numCoins}`)
}

export default getTopCryptoCoins