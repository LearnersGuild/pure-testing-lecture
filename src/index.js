import parseArgs from 'minimist'

import getTopCryptoCoins from './get-top-crypto-coins'
import json2csv from './json-2-csv'
import writeFile from './write-file'

const NUM_COINS = 10

const writeTopCryptoCoins = async (outFilename, numCoins) => {
  const topCoinsJson = await getTopCryptoCoins(numCoins)
  const topCoinsCsv = json2csv(topCoinsJson)
  writeFile(outFilename, topCoinsCsv)
}

const run = argv => {
  return new Promise((resolve, reject) => {
    const args = parseArgs(argv.slice(2), {
      alias: {h: 'help'},
      boolean: ['h'],
    })

    if (args.h) {
      console.info(```
Usage: ${argv[1]} [options] OUTFILE

Options:
  -h | --help: print this help message
```)
      return resolve()
    }

    const outFilename = args._[0]
    if (!outFilename) {
      return reject('No OUTFILE specified. Try --help for usage.')
    }

    return writeTopCryptoCoins(outFilename, NUM_COINS)
  })
}

if (!module.parent) {
  run(process.argv)
    .then(filename => {
      if (filename) {
        console.info(`Success: result written to ${filename}`)
      }
      process.exit(0)
    })
    .catch(err => {
      console.error(`Failure: ${err}`)
    })
}
