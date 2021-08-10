import { atom } from 'recoil'

export const atomEventInfo = atom({
  key: 'eventInfo',
  default: {},
})

export const atomErrorInfo = atom({
  key: 'errorInfo',
  default: {
    eventSum: 0,
    trackerSum: 0,
    userName: '',
    ossUrls: '[]',
  },
})
