import test from 'blue-tape'
import nock from 'nock'

import {jsonFetch} from '../index'

test('jsonFetch', t => {
  t.plan(2)

  t.test('should fail on error responses', tt => {
    nock.cleanAll()
    nock('https://www.example.com')
      .get('/NotFound')
      .reply(404, 'Not Found')
      .get('/ServerError')
      .reply(500, 'Internal Server Error')
    tt.shouldFail(jsonFetch('https://www.example.com/NotFound'), 'Not Found')
    tt.shouldFail(jsonFetch('https://www.example.com/ServerError'), 'Internal Server Error')
  })

  t.test('should return the data as an object on success response', async tt => {
    const expectedData = {this: 'is', my: 'data'}
    nock.cleanAll()
    nock('https://www.example.com')
      .get('/SomeData')
      .reply(200, expectedData)
    const data = await jsonFetch('https://www.example.com/SomeData')
    tt.deepEqual(data, expectedData)
  })

  t.end()
})
