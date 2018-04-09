import fetch from 'node-fetch'

export const jsonFetch = (url, options = {}) => {
  const allOptions = {...options, Accept: 'application/json'}
  return fetch(url, allOptions)
    .then(resp => {
      if (!resp.ok) {
        throw new Error(`${resp.status}: ${resp.statusText || 'Unknown Error'}`)
      }
      return resp.json()
    })
}

export const getTopCryptoCoins = (numCoins = 10) => {
  const url = `https://api.coinmarketcap.com/v1/ticker/?limit=${numCoins}`
  return jsonFetch(url)
}
