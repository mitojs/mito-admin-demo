import config from '@/config'
import { downloadFile } from '@/utils'
const rrWebMito = `<script src="https://static.@url.com/f2e/mito/mitoRRweb.min.js" defer="defer" crossorigin="anonymous"></script>`
export function vueSdkCode(apikey: string) {
  return `
  // 将以下脚本放入header标签中
  <script src="${config.sdkCdn}" apikey="${apikey}" customTag="" crossorigin="anonymous"></script>
  ${rrWebMito}
  `
}

export function wxMiniSdkCode(apikey: string) {
  const fileName = config.wxMitoSDK.split('/').pop()
  downloadFile(config.wxMitoSDK, fileName)
  return `//原生小程序
import * as MITO from './${fileName}';
// 需要将文件的下载移到对应路径
  MITO.init({
  apikey: '${apikey}',
  trackKey: '',
  // 预定义的枚举值，去接入指南查看对应项目枚举值
  appId: ''
});

// uni-app main.js
// 需要将文件的下载移到对应路径
import * as MITO from './${fileName}';
import Vue from 'vue';

MITO.init({
  apikey: '${apikey}',
  trackKey: '',
  // 预定义的枚举值，去接入指南查看对应项目枚举值
  appId: ''
});
Vue.use(MITO.MitoVue);`
}
