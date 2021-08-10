import React, { useEffect, useRef } from 'react'
import ApexCharts from 'apexcharts'

type propsType = {
  series: any[]
  labels: any[]
  width?: number
  height?: number
}
export default function PieChart(props: propsType) {
  const options = {
    series: props.series,
    labels: props.labels,
    chart: {
      width: props.width || 360,
      height: props.height || 200,
      type: 'donut',
    },
    plotOptions: {
      pie: {
        startAngle: -90,
        endAngle: 270,
        donut: {
          size: '65%',
          labels: {
            show: true,
          },
        },
      },
    },
    dataLabels: {
      enabled: true,
      // formatter: function (val) {
      //   console.log('value', val)
      //   return val + '%'
      // },
    },
    fill: {
      type: 'gradient',
    },
    legend: {
      formatter: function (val, opts) {
        return val + ' - ' + opts.w.globals.series[opts.seriesIndex]
      },
      fontSize: '16px',
    },
    // title: {
    //   text: 'Gradient Donut with custom Start-angle',
    // },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: 'bottom',
          },
        },
      },
    ],
  }
  const dom = useRef(null)
  useEffect(() => {
    const chart = new ApexCharts(dom.current, options)
    chart.render()
    return () => {
      chart.destroy()
    }
  }, [props])
  return <div ref={dom}></div>
}
