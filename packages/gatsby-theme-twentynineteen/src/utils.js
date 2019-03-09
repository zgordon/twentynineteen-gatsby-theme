import { wordPressUrl } from '../config'

export const createLocalLink = url => {
  if (`#` === url) {
    return null
  }
  return url.replace(wordPressUrl, ``)
}
