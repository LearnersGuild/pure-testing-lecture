import test from 'tape'

import json2csv from '../json-2-csv'

test('json2csv', t => {
  t.plan(3)

  t.test('should throw an error if input data is not in JSON format', tt => {
    tt.throws(() => json2csv('this-is-not-json'), 'throws if input data is not JSON')
  })

  const inputObjects = [{
    a: 1,
    b: 2,
    c: 3,
  }, {
    a: 10,
    b: 20,
    c: 30,
  }]

  t.test('should include a header row with the correct columns', tt => {
    tt.plan(1)
    const csvData = json2csv(inputObjects)
    const [csvHeaders] = csvData.split('\n')
    tt.deepEqual(csvHeaders, '"a","b","c"', '"a", "b", and "c" headers are present')
  })

  t.test('should have as many non-header rows as incoming objects and correct data', tt => {
    tt.plan(2)
    const csvData = json2csv(inputObjects)
    const [csvHeaders, ...csvRows] = csvData.split('\n')
    tt.equal(csvRows.length, 2, 'has correct number of rows')
    tt.deepEqual(csvRows, [
      '1,2,3',
      '10,20,30',
    ], 'has correct data')
  })

  t.end()
})
