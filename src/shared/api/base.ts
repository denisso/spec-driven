import { getToken } from '../lib/storage'

const BASE_URL = 'https://dummyjson.com'

function buildUrl(url: string): string {
  if (url.startsWith('http://') || url.startsWith('https://')) {
    return url
  }
  return `${BASE_URL}${url}`
}

function buildHeaders(headers: RequestInit['headers']): Headers {
  const result = new Headers(headers)
  const token = getToken()
  if (token) {
    result.set('Authorization', `Bearer ${token}`)
  }
  return result
}

export function request(url: string, options: RequestInit = {}): Promise<Response> {
  const { headers, ...rest } = options
  return fetch(buildUrl(url), {
    ...rest,
    headers: buildHeaders(headers),
  })
}
