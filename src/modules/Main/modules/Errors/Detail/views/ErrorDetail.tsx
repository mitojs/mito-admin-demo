import React, { useMemo } from 'react'
import ErrorHeader from '../components/ErrorHeader/ErrorHeader'
import ErrorTabs from '../components/ErrorTabs'
import { renderRoutes } from 'react-router-config'

export default function ErrorDetail(props) {
  const ErrorHeaderRender = useMemo(() => <ErrorHeader />, [])
  const ErrorTabsRender = useMemo(() => <ErrorTabs />, [])
  return (
    <div>
      {ErrorHeaderRender}
      {ErrorTabsRender}
      {renderRoutes(props.route.routes)}
    </div>
  )
}
