import React, { useEffect } from 'react'
import { useCountUp } from 'react-countup'
const config = {
  start: 0,
  duration: 1,
  delay: 0,
}
export default function useCount(num: number) {
  const { countUp, update } = useCountUp({ end: num, ...config })
  useEffect(() => {
    update(num)
  }, [num])
  return countUp
}
