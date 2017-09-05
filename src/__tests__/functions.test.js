import { getApiKeys, convertToHTTPS, randomize } from '../functions'
//import { ENV } from '../index'
import md5 from 'js-md5'


describe('randomize', () => {
  it('returns a number inside the range', () => {
    expect(randomize(1)).toBeLessThan(2)
    expect(randomize(1000)).toBeLessThanOrEqual(1000)
    expect(randomize(1)).toBeGreaterThanOrEqual(0)
  })
})

describe('convertToHTTPS', () => {
  it('converts "http" to "https"', () => {
    expect(convertToHTTPS('http://path.to.go')).toBe('https://path.to.go')
  })
  it('does not change strings without "http"', () => {
    expect(convertToHTTPS('my-string://')).toBe('my-string://')
  })
  it('does not change strings with "https"', () => {
    expect(convertToHTTPS('https://my-url')).toBe('https://my-url')
  })
})

describe('getApiKeys', () => {
  const apiKey = process.env.REACT_APP_API_KEY1 + process.env.REACT_APP_API_KEY2
  const privateKey = process.env.REACT_APP_PRIV_KEY1 + process.env.REACT_APP_PRIV_KEY2
  it('returns an API key and hash from env', () => {
    expect(getApiKeys()).toEqual({
      apiKey,
      hash: md5("1" + privateKey + apiKey),
    })
  })
})
