// postcss-loader 会自动查找并调用这个文件
// eslint-disable-next-line @typescript-eslint/no-var-requires
const autoprefixer = require('autoprefixer')
module.exports = {
  plugins: [autoprefixer()],
}
