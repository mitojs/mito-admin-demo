import React, { useState, useEffect, useRef } from 'react'
import Breadcrumb from '@/modules/Main/modules/Errors/Detail/modules/EventInfo/components/Breadcrumb'

export default function BreadcrumbDemo() {
  const [tableData, setTableData] = useState([])
  useEffect(() => {
    window.addEventListener(
      'message',
      function (messageEvent) {
        if (messageEvent.data.type === 'breadcrumb') {
          console.log(messageEvent.data.type, messageEvent.data.data)
          setTableData(messageEvent.data.data)
        }
      },
      false,
    )
  }, [])
  return <Breadcrumb data={tableData}></Breadcrumb>
}
