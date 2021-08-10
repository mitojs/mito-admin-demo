export const parse = url => [...new URLSearchParams(url.split('?')[1])].reduce((a, [k, v]) => ((a[k] = v), a), {})

export const stringify = queryParameters => {
  return queryParameters
    ? Object.entries(queryParameters).reduce((queryString, [key, val], index) => {
        const symbol = queryString.length === 0 ? '?' : '&'
        queryString += typeof val === 'string' ? `${symbol}${key}=${val}` : ''
        return queryString
      }, '')
    : ''
}

export default {
  stringify,
  parse,
}
