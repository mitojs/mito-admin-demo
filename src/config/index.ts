import dev from './dev.config'
import prod from './prod.config'
import local from './local.config'
interface TConfig {
  employee?: string
  doc?: string
  end?: string
  sdkCdn?: string
  cookieDomain?: string
  apigwLog?: string
  front?: string
}
let result: TConfig = null

switch (process.env.APP_ENV) {
  case 'development':
    result = dev
    break
  case 'production':
    result = prod
    break
  default:
    result = local
    break
}
export default result
