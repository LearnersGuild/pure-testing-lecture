import fetch from 'node-fetch'

const jsonFetch = (url, options = {}) => {
  const allOptions = {...options, Accept: 'application/json'}
  return fetch(url, allOptions)
    .then(resp => {
      if (!resp.ok) {
        throw new Error(`${resp.status}: ${resp.statusText || 'Unknown Error'}`)
      }
      return resp.json()
    })
}

export default jsonFetch