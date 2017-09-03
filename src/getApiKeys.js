import md5 from 'js-md5'

function getApiKeys(ts) {
  const apiKey = process.env.REACT_APP_API_KEY1 + process.env.REACT_APP_API_KEY2
  const privateKey = process.env.REACT_APP_PRIV_KEY1 + process.env.REACT_APP_PRIV_KEY2
  return {
    apiKey,
    hash: md5(ts + privateKey + apiKey),
  }
}

export { getApiKeys }
