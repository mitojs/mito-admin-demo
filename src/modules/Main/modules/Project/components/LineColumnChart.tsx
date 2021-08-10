import React, { useRef, useEffect } from 'react'
import ApexCharts from 'apexcharts'

type propsType = {
  series: any[]
  xAxisData: any[]
}
export default function ColumnChart(props: propsType) {
  const options = {
    series: props.series,
    chart: {
      height: 280,
      type: 'bar',
    },
    // plotOptions: {
    //   bar: {
    //     horizontal: false,
    //     columnWidth: '55%',
    //     endingShape: 'rounded',
    //   },
    // },
    dataLabels: {
      enabled: true,
    },
    stroke: {
      show: true,
      width: 4,
      // colors: ['transparent'],
    },
    labels: props.xAxisData,
    yaxis: [
      {
        title: {
          text: '',
        },
      },
      // {
      //   // opposite: true,
      //   title: {
      //     text: '',
      //   },
      // },
    ],
    fill: {
      opacity: 1,
    },
    // legend: {
    //   horizontalAlign: 'left',
    // },
  }

  const dom = useRef(null)
  useEffect(() => {
    const chart = new ApexCharts(dom.current, options)
    chart.render()
  }, [])
  return <div ref={dom}></div>
}
