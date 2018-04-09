import fs from 'fs'
import {parse as json2csv} from 'json2csv'

import jsonFetch from './json-fetch'

const writeTopCryptoCoins = async (outFilename, numCoins) => {
  if (!Number.isInteger(numCoins)) {
    return Promise.reject('numCoins must be an integer')
  }
  const topCoinData = await jsonFetch(`https://api.coinmarketcap.com/v1/ticker/?limit=${numCoins}`)
  const topCoinCsv = json2csv(topCoinData)
  
  fs.writeFile(outFilename, topCoinCsv, err => {
    if (err) {
      throw new Error(err)
    }
  })
}

export default writeTopCryptoCoins