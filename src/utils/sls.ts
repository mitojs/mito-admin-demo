/**
 * 将对象转成ES的AND语法
 * @param obj
 */
export function transformObjToSlsQuery(obj: { [key: string]: string }) {
  const blankReg = / /
  const handledoubleQuotation = (str: string) => {
    if (str.includes(':')) {
      return `"${str}"`
    }
    return str
  }
  return Object.entries(obj)
    .reduce((result, [key, value]) => {
      if (blankReg.test(value.trim())) {
        result.push(...value.split(' ').map(v => `${key}:${handledoubleQuotation(v)}`))
      } else {
        result.push(`${key}:${handledoubleQuotation(value)}`)
      }
      return result
    }, [])
    .join(' AND ')
}
