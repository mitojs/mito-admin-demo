import { ICONTYPE } from '@/common/constant'
import { take, takeLatest, TakeEffect } from 'redux-saga/effects'
import { addEffectKeys } from '@/store/middleware/createPromiseMiddleware'
import moment from 'moment'
import { BASE_URL } from '@/services/request'
import { isEmpty, variableTypeDetection } from './is'
import config from '@/config'
/**
 *
 * @param icon icon名字
 * @param type icon类型
 */
export function getIconName(icon: string): string {
  return `mito-${icon}`
}

export interface Action {
  type: string
  payload: unknown
}

/**
 * 方便集合，避免多次变量命名
 * 可以简单的
 * dispatch({ type: ASYNC_XXX, payload }) 触发一个异步action
 * */
export function sagasCollectionCreator(effects: { [key: string]: (action: Action) => any }) {
  return function* () {
    for (const attr in effects) {
      addEffectKeys(attr)
      const wrapperEffect = function* (action) {
        const { __resolve: resolve, __reject: reject, ...payload } = action.payload
        try {
          const res = yield* effects[attr]({ ...action, payload })
          if (typeof resolve === 'function') resolve(res)
        } catch (e) {
          if (typeof reject === 'function') reject(e)
        }
      }
      yield takeLatest(attr, wrapperEffect)
    }
  }
}
/**
 * 将时间转成文字：几分钟前、几小时前，一天前就是正常时间格式
 * @param timeStamp 时间戳
 */
export const timeToString = (timeStamp: number) => {
  let result: number | string
  const minute = 1000 * 60
  const hour = minute * 60
  const day = hour * 24
  // const halfamonth = day * 15
  // const month = day * 30
  const now = new Date().getTime()
  const diffValue = now - timeStamp
  if (diffValue < 0) {
    return
  }
  // const monthC = diffValue / month
  // const weekC = diffValue / (7 * day)
  const dayC = diffValue / day
  const hourC = diffValue / hour
  const minC = diffValue / minute
  if (dayC >= 1) {
    // result=""+ parseInt(dayC) +"天前";
    return formatTime(timeStamp)
  } else if (hourC >= 1) {
    result = '' + Math.floor(hourC) + '小时前'
  } else if (minC >= 1) {
    result = '' + Math.floor(minC) + '分钟前'
  } else {
    result = '刚刚'
  }
  return result
}

export function formatTime(time: Date | string | number, format = 'YYYY-MM-DD HH:mm:ss'): string {
  return moment(time).format(format)
}

/**
 * Get path of a rouned rectangle svg
 * Input: x, y, width, height, radius
 * Output: string of path
 *  */
export function rightRoundedRect(x, y, width, height, radius) {
  const path =
    // start
    'M' +
    x +
    ',' +
    y +
    // horizontal
    'h' +
    (width - radius) +
    // raius
    'a' +
    radius +
    ',' +
    radius +
    ' 0 0 1 ' +
    radius +
    ',' +
    radius +
    // vertical
    'v' +
    (height - 2 * radius) +
    // radius
    'a' +
    radius +
    ',' +
    radius +
    ' 0 0 1 ' +
    -radius +
    ',' +
    radius +
    // horizontal
    'h' +
    (radius - width) +
    // end
    'z'

  return path
}

// 获取名字简写
export function getNameAbbreviation(name: string): string {
  if (name) {
    const realName = name.split('_')[0]
    if (realName.length >= 2) {
      return realName.slice(1, 2)
    }
    return realName
  }
  return '未'
}

// 生成随机颜色
export function generateRandomColor(): string {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16)
  const backgroundColor = '#' + randomColor
  return backgroundColor
}

// 判断颜色的亮度和灰度 返回 dark 和 light
export function lightOrDark(color: any) {
  // Check the format of the color, HEX or RGB?
  let r, g, b
  if (color.match(/^rgb/)) {
    // If HEX --> store the red, green, blue values in separate variables
    color = color.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/)

    r = color[1]
    g = color[2]
    b = color[3]
  } else {
    // If RGB --> Convert it to HEX: http://gist.github.com/983661
    color = +('0x' + color.slice(1).replace(color.length < 5 && /./g, '$&$&'))

    r = color >> 16
    g = (color >> 8) & 255
    b = color & 255
  }

  // HSP (Highly Sensitive Poo) equation from http://alienryderflex.com/hsp.html
  const hsp = Math.sqrt(0.299 * (r * r) + 0.587 * (g * g) + 0.114 * (b * b))

  // Using the HSP value, determine whether the color is light or dark
  if (hsp > 127.5) {
    return 'light'
  } else {
    return 'dark'
  }
}

// 只获取深的颜色
export function getDarkRandomColor(): string {
  const randomColor = this.generateRandomColor()
  // Call lightOrDark function to get the brightness (light or dark)
  const brightness: string = this.lightOrDark(randomColor)

  // If the background color is dark, add the light-text class to it
  if (brightness == 'light') {
    return this.getDarkRandomColor
  }
  return randomColor
}

export const getSingleLoginUrl = () => {
  const frontRedirct = `${location.origin}/f2e/trycatch-front/#/project`
  const url = `${BASE_URL}/user/singleSignOn?front=${frontRedirct}`
  return `${config.employee}${encodeURIComponent(url)}`
}

// 获取错误区间 { start end }
export const getRangeArrIndexes = (arr: any[], targetIndex: number, expand: number): { start: number; end: number } => {
  const length = arr.length
  const start = targetIndex - expand,
    end = targetIndex + expand
  return {
    start: start > 0 ? start : 0,
    end: end >= length - 1 ? length - 1 : end,
  }
}

/**
 * 获取名字的最后两个字
 * @param name
 */
export const getLastName = (name: string) => {
  const length = name.length
  return name.slice(length - 2)
}

export function dataToString(data: any) {
  if (isEmpty(data)) {
    return '无'
  } else if (variableTypeDetection.isObject(data)) {
    return JSON.stringify(data)
  } else {
    return data
  }
}

export function objToArr(obj: any) {
  return Object.entries(obj).map(([value, label]) => ({ value, label }))
}

export function formatNumber(value: string | number) {
  value += ''
  const list = (value as string).split('.')
  const prefix = list[0].charAt(0) === '-' ? '-' : ''
  let num = prefix ? list[0].slice(1) : list[0]
  let result = ''
  while (num.length > 3) {
    result = `,${num.slice(-3)}${result}`
    num = num.slice(0, num.length - 3)
  }
  if (num) {
    result = num + result
  }
  return `${prefix}${result}${list[1] ? `.${list[1]}` : ''}`
}

export function newTabErrorInfo(errorId: number, eventId = 0) {
  if (eventId === 0) {
    window.open(`${config.front}errors/${errorId}/info`)
    return
  }
  window.open(`${config.front}errors/${errorId}/info/${eventId}`)
}

const toDataUrl = (url: string) => {
  return fetch(url)
    .then(response => response.blob())
    .then(blob => URL.createObjectURL(blob))
}
export const downloadFile = async (url: string, filename = '') => {
  const a = document.createElement('a')
  url = url.replace('http:', location.protocol)
  a.href = await toDataUrl(url)
  if (filename.indexOf('.') === -1) {
    const filenameSuffix = url.split('.').pop()
    filename = filename + `.${filenameSuffix}`
  }
  a.download = filename
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
}

export function copyTextSplit(str: string): string {
  const sourceHrefStr = '资源地址:'
  const httpErrorStr = 'http请求失败，失败原因：跨域限制或域名不存在'
  if (str.startsWith(sourceHrefStr)) {
    return str.replace(sourceHrefStr, '')
  } else if (str.startsWith(httpErrorStr)) {
    return str.replace(httpErrorStr, '')
  }
  return str
}
