import * as React from 'react'

export function useThrottle(fn, delay, dep = []) {
  const { current } = React.useRef({ fn, timer: null })
  React.useEffect(
    function () {
      current.fn = fn
    },
    [fn],
  )

  return React.useCallback(function f(...args) {
    if (!current.timer) {
      current.timer = setTimeout(() => {
        delete current.timer
      }, delay)
      current.fn.call(this, ...args)
    }
  }, dep)
}
