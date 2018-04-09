import fs from 'fs'
import path from 'path'
import test from 'blue-tape'

import writeFile from '../write-file'

test('writeFile', t => {
  t.plan(1)

  t.test('should write data to the named file', async tt => {
    const outFilename = path.resolve(__dirname, '..', '..', 'tmp', `out-${new Date().getTime()}.csv`)
    const csvData = 'r1c1,r1c2,r1c3\nr2c1,r2c2,r2c3\nr3c1,r3c2,r3c3\n'
    const expectedRows = csvData.split('\n')
    const rowsWritten = await writeFile(outFilename, csvData)

    const dataWritten = fs.readFileSync(outFilename).toString()
    tt.equal(dataWritten, csvData)
  })

  t.end()
})
