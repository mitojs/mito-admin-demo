import axios from 'axios'
// 获取用户信息
export const regitserAccount = postBody => axios.post('/regitserAccount', postBody)
