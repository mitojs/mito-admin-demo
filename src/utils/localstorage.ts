const local = localStorage
export function getLocalItem(key: string) {
  return local.getItem(key)
}

export function setLocalItem(key: string, value: string) {
  return local.setItem(key, value)
}
