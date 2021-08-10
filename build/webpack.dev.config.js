const webpack = require('webpack');
const path = require('path');
const {smart} = require('webpack-merge');
const baseConfig = require('./webpack.base.config');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const common = require('./common');

const styleLoaders = common.getStyleLoaders({
    cssModule: true,
});

const PORT = 1024;

module.exports = smart(baseConfig, {
    mode: 'development',
    // devtool: 'cheap-module-eval-source-map',
    devtool: 'source-map',
    output: {
        // 开发环境下，filename 不能使用 contenthash/chunkhash
        filename: 'js/[name].[hash:8].bundle.js',
        chunkFilename: 'js/[name].chunk.js',
        publicPath: '/',
    },
    module: {
        rules: [].concat(styleLoaders),
    },
    plugins: [
        new FriendlyErrorsPlugin({
            compilationSuccessInfo: {
                messages: [`You application is running here http://localhost:${PORT} \n nginx proxy:http://mito.qa.91jkys.com/`],
                notes: ['Some additional notes to be displayed upon successful compilation']
            }
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],
    watchOptions: {
        aggregateTimeout: 500,
        poll: 1000,
        ignored: /node_modules/
    },
    devServer: {
        contentBase: './',
        disableHostCheck: true,
        host: '0.0.0.0',
        useLocalIp: true,
        port: PORT,
        historyApiFallback: true,
        hotOnly: true,
        inline: true,
        hot: true,
        stats: 'errors-only',
        quiet: true,
        overlay: {
            errors: true,
            warnings: true,
        },
        // openPage:'dist/index.html',
    }
});
