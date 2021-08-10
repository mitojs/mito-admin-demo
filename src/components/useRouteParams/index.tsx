import { isNumberString } from '@/utils'
import React from 'react'
import { useLocation } from 'react-router-dom'

/**
 * 获取当前页面地址的param: /a/1/b/2 => [1, 2]
 */
export default function useRouteParams() {
  const location = useLocation()
  return location.pathname.split('/').reduce((acc, item) => {
    if (isNumberString(item)) {
      acc.push(Number(item))
    }
    return acc
  }, [])
}
