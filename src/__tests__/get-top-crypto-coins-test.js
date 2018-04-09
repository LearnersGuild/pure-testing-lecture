import test from 'blue-tape'
import nock from 'nock'

import getTopCryptoCoins from '../get-top-crypto-coins'
import expectedTickerResponse from './api-coinmarketcap-v1-ticker-limit-10-response'

test('getTopCryptoCoins', t => {
  t.plan(2)

  t.test('should fail if numCoins is not an integer', tt => {
    tt.shouldFail(getTopCryptoCoins('not-a-number'), 'must be an integer')
  })

  t.test('should return a list of objects representing crypto coin market cap information', async tt => {
    const numCoins = 10
    nock.cleanAll()
    nock('https://api.coinmarketcap.com')
      .get(`/v1/ticker/?limit=${numCoins}`)
      .reply(200, expectedTickerResponse)
    const data = await getTopCryptoCoins(numCoins)
    tt.deepEqual(data, expectedTickerResponse)
  })

  t.end()
})
