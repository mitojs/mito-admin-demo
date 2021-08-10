const files = require.context('./modules', true, /store\/index\.(ts|tsx)/)

const stores = {}
files.keys().forEach(key => {
  const name = files(key).default && files(key).default.name
  if (name) {
    stores[name] = files(key).default
  }
})
export default stores
