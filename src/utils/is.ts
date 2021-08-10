function isType(type: string) {
  return function (value: any): boolean {
    return Object.prototype.toString.call(value) === `[object ${type}]`
  }
}

/**
 * 检测变量类型
 * @param type
 */
export const variableTypeDetection = {
  isNumber: isType('Number'),
  isString: isType('String'),
  isBoolean: isType('Boolean'),
  isNull: isType('Null'),
  isUndefined: isType('Undefined'),
  isSymbol: isType('Symbol'),
  isFunction: isType('Function'),
  isObject: isType('Object'),
  isArray: isType('Array'),
}

export const isNumberString = (value: unknown): boolean => {
  if (variableTypeDetection.isNumber(value)) return true
  if (variableTypeDetection.isString(value) && (value as string).trim() !== '' && !isNaN(Number(value))) return true
  return false
}

export function isEmpty(value: any): boolean {
  return (variableTypeDetection.isString(value) && value.trim() === '') || value === undefined || value === null
}

export function isEmptyObj(value: Object): boolean {
  return variableTypeDetection.isObject(value) && Object.keys(value).length === 0
}
