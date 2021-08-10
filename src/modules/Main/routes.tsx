const files = require.context('./modules', true, /routes\.(ts|tsx)$/)
import loadable from '@loadable/component'

const routes = []
files.keys().forEach(key => {
  // routes
  const content = files(key).default
  if (content && Object.keys(files(key).default).length !== 0) {
    routes.push(content)
  }
})

// for 404 page
routes.push({
  path: '*',
  component: loadable(() => import(/* webpackChunkName: "NotFound"*/ '@/components/Notfound/NotFound')),
})

export default routes
