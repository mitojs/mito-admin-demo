import { atom } from 'recoil'

export const atomUser = atom({
  key: 'user',
  default: {
    userId: -1,
    name: '',
    email: '@',
    mobile: '',
    teamId: -1,
    isAdmin: 0,
  },
})
