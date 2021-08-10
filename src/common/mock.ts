export const selectOption = [
  {
    label: '错误类型',
    value: 'type',
  },
  {
    label: '状态',
    value: 'status',
  },
  {
    label: '错误等级',
    value: 'level',
  },
  {
    label: 'IP',
    value: 'ip',
  },
  {
    label: '浏览器',
    value: 'browser',
  },
  {
    label: '自定义标签',
    value: 'customer',
  },
]

export const selectValue = {
  type: [
    {
      label: 'UNKNOWN',
      value: 'UNKNOWN',
    },
    {
      label: 'UNKNOWN_FUNCTION',
      value: 'UNKNOWN_FUNCTION',
    },
    {
      label: 'JAVASCRIPT_ERROR',
      value: 'JAVASCRIPT_ERROR',
    },
    {
      label: 'BUSINESS_ERROR',
      value: 'BUSINESS_ERROR',
    },
    {
      label: 'FETCH_ERROR',
      value: 'FETCH_ERROR',
    },
    {
      label: 'RESOURCE_ERROR',
      value: 'RESOURCE_ERROR',
    },
    {
      label: 'PROMISE_ERROR',
      value: 'PROMISE_ERROR',
    },
  ],
  status: [
    {
      label: '未解决',
      value: 1,
    },
    {
      label: '正在解决',
      value: 2,
    },
    {
      label: '已解决',
      value: 3,
    },
    {
      label: '忽略',
      value: 4,
    },
    {
      label: 'Reopen',
      value: 5,
    },
  ],
  level: [
    {
      label: '1',
      value: 1,
    },
    {
      label: '2',
      value: 2,
    },
    {
      label: '3',
      value: 3,
    },
    {
      label: '4',
      value: 4,
    },
  ],
  ip: [
    {
      label: '193.89.123.83',
      value: 1,
    },
    {
      label: '192.33.23.113',
      value: 2,
    },
  ],
  browser: [
    {
      label: '谷歌浏览器',
      value: 1,
    },
    {
      label: '火狐浏览器',
      value: 2,
    },
  ],
  customer: [
    {
      label: 'v1.0.1',
      value: 1,
    },
    {
      label: 'v2.0.1',
      value: 2,
    },
    {
      label: '业务bug',
      value: 3,
    },
    {
      label: '购物车',
      value: 4,
    },
    {
      label: '支付',
      value: 5,
    },
  ],
}
