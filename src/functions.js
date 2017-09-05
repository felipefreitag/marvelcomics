import md5 from 'js-md5'

function getApiKeys(ts = "1") {
  const apiKey = process.env.REACT_APP_API_KEY1 + process.env.REACT_APP_API_KEY2
  const privateKey = process.env.REACT_APP_PRIV_KEY1 + process.env.REACT_APP_PRIV_KEY2
  return {
    apiKey,
    hash: md5(ts + privateKey + apiKey),
  }
}

function convertToHTTPS(path) {
  return path.replace(/^http:\/\//i, 'https://')
}

function randomize(total) {
  return Math.floor(Math.random() * total)
}

export { getApiKeys, convertToHTTPS, randomize }
