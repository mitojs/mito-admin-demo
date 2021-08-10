// export function curryInitParam<T>(initParams: T) {
//     return function <k extends keyof T>(params?: k): T {
//         return { ...initParams, ...arguments }
//     }
// }

export const throttle = (fn: Function, delay: number, isImmediate: boolean) => {
  let canRun = true
  return function (...args: any) {
    if (canRun === false) return
    if (canRun === null && isImmediate) {
      fn.apply(this, args)
    }
    fn.apply(this, args)
    canRun = false
    setTimeout(() => {
      canRun = true
    }, delay)
  }
}
