import fs from 'fs'

const writeFile = (outFilename, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(outFilename, data, err => {
      if (err) {
        return reject(err)
      }
      return resolve()
    })
  })
}

export default writeFile