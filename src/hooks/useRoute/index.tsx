import { RootState } from '@/store/index.type'
import React from 'react'
import { useSelector } from 'react-redux'

export default function useRoute() {
  const curRoute = useSelector<RootState, GlobalState>(state => state.global.currentRoute)
  return curRoute
}
